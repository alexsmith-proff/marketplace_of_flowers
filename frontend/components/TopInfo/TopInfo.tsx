import Image from 'next/image';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import AuthForm from '../AuthForm/AuthForm';
import { IMenu } from '../../interfaces/menu.interface';

import s from './TopInfo.module.scss'
import { useRouter } from 'next/router';

interface TopInfoProps {
    menu: IMenu
}

const TopInfo: FC<TopInfoProps> = ({ menu }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isVisibleAuthForm, setIsVisibleAuthForm] = useState<boolean>(false)

    const router = useRouter()

    const handleClickProfile = () => {
        if (isAuth) router.push(`profile/`)
        else setIsVisibleAuthForm(true)


    }

    const handleClickCloseBtn = () => {
        setIsVisibleAuthForm(false)
    }

    return (
        <div className="container">
            {
                isVisibleAuthForm && <div className={s.dialog}><AuthForm clickCloseBtn={handleClickCloseBtn} /></div>
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