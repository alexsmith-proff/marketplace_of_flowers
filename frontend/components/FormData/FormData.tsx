import { FC, useState } from "react";
import ProductOut from "../ProductOut/ProductOut";
import { IProductOutItem } from "../../interfaces/products.interface";

import s from './FormData.module.scss'
import MarkerNum from "../Elements/Markers/MarkerNum/MarkerNum"
import { Formik } from "formik"
import * as Yup from 'yup';

interface FormDataProps {}

const FormData: FC<FormDataProps> = ({ }) => {
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

    const validationSchema = Yup.object().shape({
        name: Yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        phoneNumber: Yup.number().typeError('Должно быть числом').required('Обязательное поле')
    })


    const handleClick = (index: number) => {
        setProductOut(productOut.map((item, ind) => index === ind ? { ...item, isActive: true } : { ...item, isActive: false }))
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
                validateOnBlur
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
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
                        </div>
                    )
                }
            </Formik >
        </div >
    )
}

export default FormData