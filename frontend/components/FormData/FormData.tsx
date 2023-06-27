import React, { FC, useState } from "react";
import ProductOut from "../ProductOut/ProductOut";
import MarkerNum from "../Elements/Markers/MarkerNum/MarkerNum"
import { Formik } from "formik"
import * as Yup from 'yup';
import { IProductOutItem } from "../../interfaces/products.interface";

import s from './FormData.module.scss'
import { useRouter } from "next/router";
import CheckBox from "../Elements/CheckBox/CheckBox";

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
        phoneNumber: Yup.number().typeError('Должно быть числом').required('Обязательное поле'),

        receiverName: !isGetMyself ? Yup.string().typeError('Должно быть строкой').required('Обязательное поле') : null,
        receiverPhoneNumber: !isGetMyself ? Yup.number().typeError('Должно быть числом').required('Обязательное поле') : null,

        address: Yup.string().typeError('Должно быть строкой'),
        apartment: Yup.string().typeError('Должно быть строкой'),
        entrance: Yup.string().typeError('Должно быть строкой'),
        floor: Yup.string().typeError('Должно быть строкой'),
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
                    ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
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
                                            <input type="text" name={"name"} onChange={handleChange} onBlur={handleBlur} value={values.name} />
                                            {
                                                touched.name && errors.name && <p className={s.error}>{errors.name}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className={s.inputBlock}>
                                        <label className={s.caption} htmlFor={'phoneNumber'}>Ваш телефон*</label>
                                        <div className={s.input}>
                                            <input type="text" name={"phoneNumber"} onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} />
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
                                                    <input type="text" name={"receiverName"} onChange={handleChange} onBlur={handleBlur} value={values.receiverName} />
                                                    {
                                                        touched.receiverName && errors.receiverName && <p className={s.error}>{errors.receiverName}</p>
                                                    }
                                                </div>
                                            </div>
                                            <div className={s.inputBlock}>
                                                <label className={s.caption} htmlFor={'phoneNumber'}>Телефон получателя*</label>
                                                <div className={s.input}>
                                                    <input type="text" name={"receiverPhoneNumber"} onChange={handleChange} onBlur={handleBlur} value={values.receiverPhoneNumber} />
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
                        </div>
                    )
                }
            </Formik >
        </div >
    )
}

export default FormData