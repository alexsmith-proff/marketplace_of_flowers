import { FC, useEffect, useState } from 'react'
import Image from 'next/image';
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import allEndPoints from '../../services/api/api'

import s from './AuthForm.module.scss'
import { useDispatch } from 'react-redux';
import { setIsVisibleAuthForm, setUserData } from '../../redux/user/userSlice';

interface IButton {
    name: string
    isActive: boolean
}

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = ({ }) => {
    const dispatch = useDispatch()
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
        dispatch(setIsVisibleAuthForm(false))
    }

    const handleClickButton = (index: number) => {
        setError('')
        setButtons(buttons.map((item, ind) => ind === index ? { ...item, isActive: true } : { ...item, isActive: false }))
    }

    let validationSchema = Yup.object().shape({
        email: Yup.string().email('Неправильно введен пароль').required('Обязательное поле'),
        password: Yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        name: buttons[0].isActive ? Yup.string().typeError('Должно быть строкой').required('Обязательное поле') : null,
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
                            // Регистрация
                            try {
                                const res = await allEndPoints.auth.registartion({
                                    email: values.email,
                                    password: values.password,
                                    name: values.name
                                })
                                // console.log('resp', res.data)
                                setError('')
                                setButtons(buttons.map((item, index) => index === 1 ? { ...item, isActive: true } : { ...item, isActive: false }))
                            } catch (error) {
                                if (error.response.data.statusCode == 401) setError('Пользователь с таким email существует')
                            }
                        } else {
                            // Логин
                            try {
                                let res = await allEndPoints.auth.login({
                                    email: values.email,
                                    password: values.password
                                })
                                setError('')
                                localStorage.setItem('accessToken', res.data.accessToken)
                                res = await allEndPoints.auth.getProfile()
                                dispatch(setUserData(res.data))
                                dispatch(setIsVisibleAuthForm(false))

                            } catch (error) {
                                console.log(error);
                                if (error.response.data.statusCode == 401) setError('Неправильный логин или пароль')
                            }
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
                <p className={s.text}>Нажимая кнопку `&#34;`Зарегистрироваться`&#34;` вы соглашаетесь с условиями обработки персональных данных и публичной офертой.</p>

            </div >
        </div>
    )
}

export default AuthForm