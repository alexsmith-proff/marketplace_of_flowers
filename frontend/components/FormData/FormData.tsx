import React, { FC, useState } from "react";
import Image from "next/image";
import MaskedInput from "react-text-mask";
import ProductOut from "../ProductOut/ProductOut";
import MarkerNum from "../Elements/Markers/MarkerNum/MarkerNum"
import CheckBox from "../Elements/CheckBoxs/CheckBox/CheckBox";
import CheckBoxTime from "../Elements/CheckBoxs/CheckBoxTime/CheckBoxTime";
import CheckBoxDate from "../Elements/CheckBoxs/CheckBoxDate/CheckBoxDate";
import MapYandex from "../MapYandex/MapYandex";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setIsVisibleAuthForm } from "../../redux/user/userSlice";
import allEndPoints from "../../services/api/api";
import { Field, Formik } from "formik"
import * as Yup from 'yup';
import { IProductOutItem } from "../../interfaces/products.interface";
import { IMapStateDefault, IShop } from "../../interfaces/map.interface";
import { IOrderInput } from "../../interfaces/order.interface";
import { UserOrdersStatus } from "../../enums/User.enum";

import s from './FormData.module.scss'

interface FormDataProps {
    formRef: any
}

const FormData: FC<FormDataProps> = ({ formRef }) => {
    const user = useSelector((user: RootState) => user.user)
    const cartProduct = useSelector((cartProduct: RootState) => cartProduct.cartProduct.products)
    const dispatch = useDispatch()
    const router = useRouter()
    // checkBoxValue 'Я сам получу заказ'
    const [isGetMyself, setIsGetMyself] = useState<boolean>(false)
    const [shopActiveIndex, setShopActiveIndex] = useState(0)

    const [productOut, setProductOut] = useState<IProductOutItem[]>([
        {
            text: 'Самовывоз',
            isActive: false
        },
        {
            text: 'Доставка',
            isActive: true
        }
    ])

    const shop: IShop[] = [
        {
            name: 'ул. Революции 1905 года, 80',
            lat: 51.667596,
            long: 39.185905,
        },
        {
            name: 'ул. Владимира Невского, 17',
            lat: 51.709873,
            long: 39.150053,
        },

    ]

    const defaultState: IMapStateDefault = {
        center: [51.670554, 39.192204],
        zoom: 13
    };



    let validationSchema = Yup.object().shape({
        name: Yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        phoneNumber: Yup.string().matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'Неверный формат').required('Обязательное поле'),

        receiverName: !isGetMyself && productOut[1].isActive ? Yup.string().typeError('Должно быть строкой').required('Обязательное поле') : null,
        receiverPhoneNumber: !isGetMyself && productOut[1].isActive ? Yup.string().matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'Неверный формат').required('Обязательное поле') : null,

        address: Yup.string().typeError('Должно быть строкой'),
        apartment: Yup.string().typeError('Должно быть строкой'),
        entrance: Yup.number().typeError('Должно быть числом'),
        floor: Yup.number().typeError('Должно быть числом'),

        shop: Yup.string().typeError('Должно быть строкой'),

        time: Yup.string().typeError('Должно быть строкой'),
        date: Yup.string().typeError('Должно быть строкой'),

        comments: Yup.string().typeError('Должно быть строкой'),

        cardNumber: Yup.string().typeError('Неверный формат').required('Обязательное поле'),
        cardMonthYear: Yup.string().typeError('Должно быть числом').required('Обязательное поле'),
        cardCVV: Yup.number().typeError('Должно быть числом').required('Обязательное поле')
    })


    const handleClickProductOut = (index: number) => {
        setProductOut(productOut.map((item, ind) => index === ind ? { ...item, isActive: true } : { ...item, isActive: false }))
    }

    const handleChangeCheckBox = () => {
        setIsGetMyself(!isGetMyself)

    }

    const handleOnClickShop = (index) => {
        setShopActiveIndex(index)
    }

    return (
        <div>
            <div className={s.productOut}>
                <ProductOut productOut={productOut} Click={handleClickProductOut} />
            </div>
            <Formik
                initialValues={
                    {
                        name: '',
                        phoneNumber: '',
                        receiverName: '',
                        receiverPhoneNumber: '',
                        address: '',
                        apartment: '',
                        entrance: '',
                        floor: '',
                        shop: shop[0].name,
                        radio: '',
                        time: '',
                        date: '',
                        comments: '',
                        cardNumber: '',
                        cardMonthYear: '',
                        cardCVV: '',
                    }
                }
                innerRef={formRef}
                validateOnBlur
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    if (!Object.keys(user.profile).length) {
                        dispatch(setIsVisibleAuthForm(true))
                    } else {
                        cartProduct.forEach(product => {
                            try {
                                const order: IOrderInput = {
                                    name: product.name,
                                    number: 123456789,
                                    price: product.price * product.count,
                                    user_id: user.profile.id,
                                    status: UserOrdersStatus.AWAITINGPAYMENT,
                                    deliveryDate: values.date
                                }
                                allEndPoints.order.setOrder(order)
                            } catch (error) {
                                console.log(error)
                            }
                        })
                        router.push('/')
                    }
                }}
            >
                {
                    ({ values, errors, touched, handleChange, handleBlur }) => (
                        < div className={s.form} >
                            <div className={s.formDataBlock}>
                                <div className={s.title}>
                                    <MarkerNum num={1} />
                                    <h2 className={s.titleText}>Контактные данные</h2>
                                </div>
                                <div className={s.inputWrap}>
                                    <div className={s.inputBlock}>
                                        <label className={s.caption} htmlFor={'name'}>Ваше имя*</label>
                                        <div className={s.input}>
                                            <input type="text" name={"name"} onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="Имя" />
                                            {
                                                touched.name && errors.name && <p className={s.error}>{errors.name}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className={s.inputBlock}>
                                        <label className={s.caption} htmlFor={'phoneNumber'}>Ваш телефон*</label>
                                        <div className={s.input}>
                                            <Field name="phoneNumber">
                                                {
                                                    ({ field }) => <MaskedInput
                                                        {...field}
                                                        type="text"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        mask={["+", "7", "(", /[0-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                                                        placeholder="+7(___)___-__-__"
                                                    />
                                                }
                                            </Field>
                                            {
                                                touched.phoneNumber && errors.phoneNumber && <p className={s.error}>{errors.phoneNumber}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                productOut[1].isActive && <div className={s.formDataBlock}>
                                    <div className={s.title}>
                                        <MarkerNum num={2} />
                                        <h2 className={s.titleText}>Получатель</h2>
                                    </div>
                                    <div className={s.checkbox}>
                                        <CheckBox name={'Я сам получу заказ'} id={1} onChangeCheckBox={handleChangeCheckBox} checked={isGetMyself} />
                                    </div>
                                    {
                                        !isGetMyself && (
                                            <div className={s.inputWrap}>
                                                <div className={s.inputBlock}>
                                                    <label className={s.caption} htmlFor={'name'}>Имя получателя*</label>
                                                    <div className={s.input}>
                                                        <input type="text" name={"receiverName"} onChange={handleChange} onBlur={handleBlur} value={values.receiverName} placeholder="Имя" />
                                                        {
                                                            touched.receiverName && errors.receiverName && <p className={s.error}>{errors.receiverName}</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div className={s.inputBlock}>
                                                    <label className={s.caption} htmlFor={'phoneNumber'}>Телефон получателя*</label>
                                                    <div className={s.input}>
                                                        <Field name="receiverPhoneNumber">
                                                            {
                                                                ({ field }) => <MaskedInput
                                                                    {...field}
                                                                    type="text"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    mask={["+", "7", "(", /[0-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                                                                    placeholder="+7(___)___-__-__"
                                                                />
                                                            }
                                                        </Field>
                                                        {
                                                            touched.receiverPhoneNumber && errors.receiverPhoneNumber && <p className={s.error}>{errors.receiverPhoneNumber}</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            }



                            <div className={s.formDataBlock}>
                                <div className={s.title}>
                                    <MarkerNum num={productOut[1].isActive ? 3 : 2} />
                                    <h2 className={s.titleText}>Детали доставки</h2>
                                </div>
                                {
                                    productOut[1].isActive ?
                                        <div className={s.inputWrap}>
                                            <div className={s.inputBlock}>
                                                <label className={s.caption} htmlFor={'address'}>Адрес</label>
                                                <div className={`${s.input} ${s.bigWidthInput}`}>
                                                    <input type="text" name={"address"} onChange={handleChange} onBlur={handleBlur} value={values.address} />
                                                    {
                                                        touched.address && errors.address && <p className={s.error}>{errors.address}</p>
                                                    }
                                                </div>
                                            </div>
                                            <div className={s.inputBlock}>
                                                <label className={s.caption} htmlFor={'apartment'}>Квартира, офис</label>
                                                <div className={`${s.input} ${s.smallWidthInput}`}>
                                                    <input type="text" name={"apartment"} onChange={handleChange} onBlur={handleBlur} value={values.apartment} />
                                                    {
                                                        touched.apartment && errors.apartment && <p className={s.error}>{errors.apartment}</p>
                                                    }
                                                </div>
                                            </div>
                                            <div className={s.inputBlock}>
                                                <label className={s.caption} htmlFor={'entrance'}>Подьезд</label>
                                                <div className={`${s.input} ${s.smallWidthInput}`}>
                                                    <input type="text" name={"entrance"} onChange={handleChange} onBlur={handleBlur} value={values.entrance} />
                                                    {
                                                        touched.entrance && errors.entrance && <p className={s.error}>{errors.entrance}</p>
                                                    }
                                                </div>
                                            </div>
                                            <div className={s.inputBlock}>
                                                <label className={s.caption} htmlFor={'floor'}>Этаж</label>
                                                <div className={`${s.input} ${s.smallWidthInput}`}>
                                                    <input type="text" name={"floor"} onChange={handleChange} onBlur={handleBlur} value={values.floor} />
                                                    {
                                                        touched.floor && errors.floor && <p className={s.error}>{errors.floor}</p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <h2 className={s.titleMapText}>Магазины в Воронеже</h2>
                                            <div className={s.shopsWrap}>
                                                {
                                                    shop.map((item, ind) => (
                                                        <div className={s.shopItem} onClick={() => handleOnClickShop(ind)} key={ind}>
                                                            <div className={s.radioBtn}>
                                                                <label>
                                                                    <Field type="radio" name="shop" checked={shopActiveIndex === ind ? true : false} value={item.name} />
                                                                    {item.name}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                            <MapYandex defaultState={defaultState} shops={[shop[shopActiveIndex]]} width={'600px'} />
                                        </div>

                                }
                                <div className={s.dataTimeWrap}>
                                    <Field name="date">
                                        {
                                            ({ field: { name }, form: { setFieldValue } }) => <CheckBoxDate name={name} setFieldValue={setFieldValue} />
                                        }
                                    </Field>
                                    <Field name="time">
                                        {
                                            ({ field: { name }, form: { setFieldValue } }) => <CheckBoxTime name={name} setFieldValue={setFieldValue} />
                                        }
                                    </Field>
                                </div>
                                <div className={s.commentsWrap}>
                                    <label className={s.caption} htmlFor={'entrance'}>Комментарии</label>
                                    <div className={s.textarea}>
                                        <textarea name="comments" cols={50} rows={10} onChange={handleChange} onBlur={handleBlur} ></textarea>
                                        {
                                            touched.comments && errors.comments && <p className={s.error}>{errors.comments}</p>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className={s.formDataBlock}>
                                <div className={s.title}>
                                    <MarkerNum num={productOut[1].isActive ? 4 : 3} />
                                    <h2 className={s.titleText}>Способы оплаты</h2>
                                </div>
                                <div className={s.paymentWrap}>
                                    <div className={s.radioBlock}>
                                        <div className={s.radioBlockTitle}>
                                            <div className={s.radioBlockImg}>
                                                <Image src={`/img/cards.png`} width={24} height={24} />
                                            </div>
                                            <p className={s.radioBlockTitleText}>Банковской картой онлайн</p>
                                        </div>
                                        <div className={s.radioBtn}>
                                            <Field name="radio" type="radio" checked={true} />
                                        </div>
                                        {/* <RadioButton active={true} color="000" onClickBut={null} /> */}
                                    </div>
                                    <div className={s.inputBlock + ' ' + s.cardNumber}>
                                        <div className={s.input}>
                                            <Field name="cardNumber">
                                                {
                                                    ({ field }) => <MaskedInput
                                                        {...field}
                                                        type="text"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                                                        placeholder="Номер карты"

                                                    />
                                                }
                                            </Field>
                                            {
                                                touched.cardNumber && errors.cardNumber && <p className={s.error + ' ' + s.cardNumber}>{errors.cardNumber}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className={s.inputBlock + ' ' + s.cardMonthYearCVV}>
                                        <div className={s.input}>
                                            <Field name="cardMonthYear">
                                                {
                                                    ({ field }) => <MaskedInput
                                                        {...field}
                                                        type="text"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        mask={[/\d/, /\d/, "/", /\d/, /\d/]}
                                                        placeholder="MM/YY"
                                                    />
                                                }
                                            </Field>
                                            {
                                                touched.cardMonthYear && errors.cardMonthYear && <p className={s.error}>{errors.cardMonthYear}</p>
                                            }
                                        </div>
                                        <div className={s.input}>
                                            <Field name="cardCVV">
                                                {
                                                    ({ field }) => <MaskedInput
                                                        {...field}
                                                        type="text"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        mask={[/\d/, /\d/, /\d/]}
                                                        placeholder="CVV/CVC"
                                                    />
                                                }
                                            </Field>
                                            {
                                                touched.cardCVV && errors.cardCVV && <p className={s.error}>{errors.cardCVV}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            </Formik >
        </div >
    )
}

export default FormData