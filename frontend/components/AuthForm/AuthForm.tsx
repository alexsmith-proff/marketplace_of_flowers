import { FC, useEffect, useState } from 'react'
import Image from 'next/image';
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import allEndPoints from '../../services/api/api'

import s from './AuthForm.module.scss'

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
    const [error, setError] = useState<string>('')

    useEffect(() => {
        // Выключает скролл основного окна
        document.body.style.overflow = "hidden"
        // Смещение за счет елемента скролла
        document.body.style.marginLeft = "-17px"
    }, [])

    const handleclickCloseBtn = () => {
        // Включает скролл основного окна
        document.body.style.overflow = "visible"
        // Убирает смещение 
        document.body.style.marginLeft = "0px"
        clickCloseBtn()
    }

    const handleClickButton = (index: number) => {
        setButtons(buttons.map((item, ind) => ind === index ? { ...item, isActive: true } : { ...item, isActive: false }))
    }

    let validationSchema = Yup.object().shape({
        email: Yup.string().email('Неправильно введен пароль').required('Обязательное поле'),
        password: Yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        name: Yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    })

    return (
        <div className={s.popup}>
            <div className={s.form}>
                <div className={s.closeBtn} onClick={handleclickCloseBtn}>
                    <Image src={'/img/close-btn.png'} width={24} height={24} />
                </div>
                <h3 className={s.title}>Регистрация</h3>
                <ul className={s.wrapItems}>
                    {
                        buttons.map((button, index) => <li className={button.isActive ? `${s.item} ${s.active}` : s.item} onClick={() => handleClickButton(index)} key={index}>{button.name}</li>)
                    }
                </ul >
                {
                    error && <p className={s.allError}>{error}</p>
                }
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
                    onSubmit={async (values) => {
                        if (buttons[0].isActive) {
                            // Ристрация
                            try {
                                const res = await allEndPoints.auth.registartion({
                                    email: values.email,
                                    password: values.password
                                })
                                console.log('respppp', res.data)
                                setError('')
                                localStorage.setItem('accessToken', res.data.accessToken)

                            } catch (error) {
                                if (error.response.data.statusCode == 401) setError('Пользователь с таким email существует')
                            }
                        } else {
                            // Логин
                            console.log('Логин')
                        }
                    }}
                >
                    {
                        ({ values, errors, touched, handleChange, handleBlur }) => (
                            <>
                                <Form>
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
                                    {
                                        buttons[0].isActive && (
                                            <div className={s.formItem}>
                                                <label className={s.caption} htmlFor={'name'}>ФИО</label>
                                                <div className={s.input}>
                                                    <input type="text" name={"name"} onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="ФИО" />
                                                    {
                                                        touched.name && errors.name && <p className={s.error}>{errors.name}</p>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                    <button className={s.submit} type='submit'>{buttons[0].isActive ? 'Регистрация' : 'Вход'}</button>
                                </Form>
                            </>
                        )
                    }
                </Formik>
                <p className={s.text}>Нажимая кнопку "Зарегистрироваться" вы соглашаетесь с условиями обработки персональных данных и публичной офертой.</p>

            </div >
        </div>
    )
}

export default AuthForm