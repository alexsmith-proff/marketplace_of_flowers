import { FC, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import allEndPoints from '../../services/api/api'


import s from './AuthForm.module.scss'
import Image from 'next/image';

interface IButton {
    name: string
    isActive: boolean
}

interface AuthFormProps {
    clickCloseBtn: () => void
}

const AuthForm: FC<AuthFormProps> = ({ clickCloseBtn }) => {
    const [buttons, setButtons] = useState<IButton[]>([
        {
            name: 'Регистрация',
            isActive: true
        },
        {
            name: 'Вход',
            isActive: false
        }
    ])
    const hadleClick = async () => {
        try {
            const res = await allEndPoints.auth.registartion({
                email: 'qdq@aa.ru',
                password: 'aaqqq'
            })
            console.log('respppp', res.data);
            localStorage.setItem('accessToken', res.data.accessToken)

        } catch (error) {
            console.log('Ошибка запроса', error.response.data.message);
        }
    }


    const handleClickButton = (index: number) => {
        setButtons(buttons.map((item, ind) => ind===index ? {...item, isActive: true} : {...item, isActive: false}))
    }



    let validationSchema = Yup.object().shape({
        email: Yup.string().email('Неправиль введен пароль').required('Обязательное поле'),
        password: Yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        name: Yup.string().typeError('Должно быть строкой')
    })

    return (
        <>
            <div className={s.form}>
                <div className={s.closeBtn} onClick={clickCloseBtn}>
                    <Image src={'/img/close-btn.png'} width={24} height={24} />
                </div>
                <h3 className={s.title}>Регистрация</h3>
                <ul className={s.wrapItems}>
                    {
                        buttons.map((button, index) => <li className={button.isActive ? `${s.item} ${s.active}` : s.item} onClick={() => handleClickButton(index)} key={index}>{button.name}</li> )
                    }
                </ul >
                <Formik
                    initialValues={
                        {
                            name: '',
                            email: '',
                            password: '',
                        }
                    }
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {
                        ({ values, errors, touched, handleChange, handleBlur }) => (
                            <>
                                <div className={s.formItem}>
                                    <label className={s.caption} htmlFor={'name'}>Логин</label>
                                    <div className={s.input}>
                                        <input type="text" name={"email"} onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email" />
                                        {
                                            touched.email && errors.email && <p className={s.error}>{errors.email}</p>
                                        }
                                    </div>
                                </div>
                                <div className={s.formItem}>
                                    <label className={s.caption} htmlFor={'name'}>Пароль</label>
                                    <div className={s.input}>
                                        <input type="password" name={"password"} onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Пароль" />
                                        {
                                            touched.password && errors.password && <p className={s.error}>{errors.password}</p>
                                        }
                                    </div>
                                </div>
                                <div className={s.formItem}>
                                    <label className={s.caption} htmlFor={'name'}>ФИО</label>
                                    <div className={s.input}>
                                        <input type="text" name={"name"} onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="ФИО" />
                                        {
                                            touched.name && errors.name && <p className={s.error}>{errors.name}</p>
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    }
                </Formik>
                <p className={s.text}>Нажимая кнопку "Зарегистрироваться" вы соглашаетесь с условиями обработки персональных данных и публичной офертой.</p>

            </div >
        </>
    )
}

export default AuthForm