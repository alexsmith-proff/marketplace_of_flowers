import React, { FC, useState } from "react";
import Image from "next/image";
import MaskedInput from "react-text-mask";
import { useRouter } from "next/router";
import ProductOut from "../ProductOut/ProductOut";
import MarkerNum from "../Elements/Markers/MarkerNum/MarkerNum"
import CheckBox from "../Elements/CheckBoxs/CheckBox/CheckBox";
import { Field, Formik } from "formik"
import * as Yup from 'yup';
import { IProductOutItem } from "../../interfaces/products.interface";

import s from './FormData.module.scss'
import CheckBoxTime from "../Elements/CheckBoxs/CheckBoxTime/CheckBoxTime";
import CheckBoxDate from "../Elements/CheckBoxs/CheckBoxDate/CheckBoxDate";

interface FormDataProps {
    formRef: any
}

const FormData: FC<FormDataProps> = ({ formRef }) => {
    const router = useRouter()
    // checkBoxValue 'Я сам получу заказ'
    const [isGetMyself, setIsGetMyself] = useState<boolean>(false)




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


    let validationSchema = Yup.object().shape({
        name: Yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        phoneNumber: Yup.string().matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'Неверный формат').required('Обязательное поле'),

        receiverName: !isGetMyself ? Yup.string().typeError('Должно быть строкой').required('Обязательное поле') : null,
        receiverPhoneNumber: !isGetMyself ? Yup.string().matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'Неверный формат').required('Обязательное поле') : null,

        address: Yup.string().typeError('Должно быть строкой'),
        apartment: Yup.string().typeError('Должно быть строкой'),
        entrance: Yup.number().typeError('Должно быть числом'),
        floor: Yup.number().typeError('Должно быть числом'),

        cardNumber: Yup.string().typeError('Неверный формат').required('Обязательное поле'),
        cardMonthYear: Yup.string().typeError('Должно быть числом').required('Обязательное поле'),
        cardCVV: Yup.number().typeError('Должно быть числом').required('Обязательное поле'),

        time: Yup.string().typeError('Должно быть строкой'),
        date: Yup.string().typeError('Должно быть строкой'),
    })


    const handleClick = (index: number) => {
        setProductOut(productOut.map((item, ind) => index === ind ? { ...item, isActive: true } : { ...item, isActive: false }))
    }

    const handleChangeCheckBox = () => {
        setIsGetMyself(!isGetMyself)

    }

    return (
        <div>
            <ProductOut productOut={productOut} Click={handleClick} />
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
                        cardNumber: '',
                        cardMonthYear: '',
                        cardCVV: '',
                        radio: '',
                        time: '',
                        date: '',
                    }
                }
                innerRef={formRef}
                validateOnBlur
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                    router.push('/')
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
                            <div className={s.formDataBlock}>
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
                            <div className={s.formDataBlock}>
                                <div className={s.title}>
                                    <MarkerNum num={3} />
                                    <h2 className={s.titleText}>Детали доставки</h2>
                                </div>
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
                            </div>
                            <div className={s.formDataBlock}>
                                <div className={s.title}>
                                    <MarkerNum num={4} />
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
                            <div className={s.formDataBlock}>
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
                            </div>
                        </div>
                    )
                }
            </Formik >
        </div >
    )
}

export default FormData