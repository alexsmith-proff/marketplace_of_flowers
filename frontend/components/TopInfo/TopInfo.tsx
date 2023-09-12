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
    menu: IMenu,
    TimeComponent: React.ReactNode,
    MenuComponent: React.ReactNode,
    SocialComponent: React.ReactNode,
    ProfileComponent: React.ReactNode,
}

const TopInfo: FC<TopInfoProps> = ({ menu, TimeComponent, MenuComponent, SocialComponent, ProfileComponent }) => {
    // const user = useSelector((state: RootState) => state.user)
    // const isVisibleAuthForm = useSelector((state: RootState) => state.user.isVisibleAuthForm)
    // const dispatch = useDispatch()
    // const router = useRouter()

    // const handleClickProfile = () => {
    //     if (Object.keys(user.profile).length) router.push(`/profile/`)
    //     else dispatch(setIsVisibleAuthForm(true))
    // }

    // const setUser = async () => {
    //     const res = await allEndPoints.auth.getProfile()
    //     dispatch(setUserData(res.data))
    // }

    // useEffect(() => {
    //     setUser()
    // }, [])

    return (
        <div className="container">
            {/* {
                isVisibleAuthForm && <div className={s.dialog}><AuthForm /></div>
            } */}
            <div className={s.topInfo}>
                {TimeComponent}
                {MenuComponent}

                <div className={s.TopInfoSocialProfile}>
                    {SocialComponent}
                    {ProfileComponent}

                    {/* <div className={s.TopInfoProfile} onClick={handleClickProfile}>
                        <div className={s.TopInfoProfile__ico}>
                            <Image src={'/img/user-ico.png'} width={20} height={20} alt='user-ico' />
                        </div>
                        <div className={s.TopInfoProfile__text}>Мои заказы</div>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default TopInfo;