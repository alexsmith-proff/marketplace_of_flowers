import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthForm from '../AuthForm/AuthForm';
import { IMenu } from '../../interfaces/menu.interface';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import allEndPoints from '../../services/api/api';
import { setIsVisibleAuthForm, setUserData } from '../../redux/user/userSlice';

import s from './TopInfo.module.scss'

interface TopInfoProps {
    menu: IMenu
}

const TopInfo: FC<TopInfoProps> = ({ menu }) => {
    const user = useSelector((state: RootState) => state.user)
    const isVisibleAuthForm = useSelector((state: RootState) => state.user.isVisibleAuthForm)
    const dispatch = useDispatch()
    // const [isAuth, setIsAuth] = useState<boolean>(false)
    // const [isVisibleAuthForm, setIsVisibleAuthForm] = useState<boolean>(false)

    const router = useRouter()

    const handleClickProfile = () => {
        if (Object.keys(user.profile).length) router.push(`/profile/`)
        else dispatch(setIsVisibleAuthForm(true))
    }

    const setUser = async () => {
        const res = await allEndPoints.auth.getProfile()
        // if (res.data) {
        //     dispatch(setIsAuth(true))            
        // }
        dispatch(setUserData(res.data))
    }

    useEffect(() => {
        setUser()
    }, [])
    
    // useEffect(() => {
    //     if (Object.keys(user.profile).length) {
    //         setUser()
    //     }
    // }, [isAuth])


    return (
        <div className="container">
            {
                isVisibleAuthForm && <div className={s.dialog}><AuthForm /></div>
            }
            <div className={s.topInfo}>
                <div className={s.topInfoTime}>
                    <Image src={'/img/clock.png'} width={16} height={16} alt='clock-ico' />
                    {/* <img className={s.topInfoTime__ico} src="img/clock.png" alt="clock" /> */}
                    <div className={s.topInfoTime__text}>Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</div>
                </div>
                {
                    menu &&
                    <ul className={s.TopInfoMenu}>
                        {
                            menu.items.map((item) => (
                                <li className={s.TopInfoMenu__item} key={item.id}>
                                    <Link href={`/${item.link}`}>
                                        <a className={s.TopInfoMenu__link}>{item.name}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }

                <div className={s.TopInfoSocialProfile}>
                    <div className={s.TopInfoSocial}>
                        <a className={s.TopInfoSocial__link} href="#">
                            <div className={s.TopInfoSocial__ico}>
                                <Image src={'/img/vk.png'} width={24} height={24} alt='vk-ico' />
                            </div>
                        </a>
                        <a className={s.TopInfoSocial__link} href="#">
                            <div className={s.TopInfoSocial__ico}>
                                <Image src={'/img/insta.png'} width={24} height={24} alt='instagram-ico' />
                            </div>
                        </a>
                    </div>
                    <div className={s.TopInfoProfile} onClick={handleClickProfile}>
                        <div className={s.TopInfoProfile__ico}>
                            <Image src={'/img/user-ico.png'} width={20} height={20} alt='user-ico' />
                        </div>
                        <div className={s.TopInfoProfile__text}>Мои заказы</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TopInfo;