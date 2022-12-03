import React, { FC } from 'react';
import { IMenu } from '../../interfaces/menu.interface';

import s from './TopInfo.module.scss'

interface TopInfoProps {
    menu: IMenu
}

const TopInfo: FC<TopInfoProps> = ({ menu }) => {

    return (
        <div className="container">
            <div className={s.topInfo}>
                <div className={s.topInfoTime}>
                    <img className={s.topInfoTime__ico} src="img/clock.png" alt="clock" />
                    <div className={s.topInfoTime__text}>Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</div>
                </div>
                <ul className={s.TopInfoMenu}>
                    {
                        menu.items.map((item) => (
                            <li className={s.TopInfoMenu__item} key={item.id}>
                                <a className={s.TopInfoMenu__link} href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className={s.TopInfoSocialProfile}>
                    <div className={s.TopInfoSocial}>
                        <a className={s.TopInfoSocial__link} href="#">
                            <img className={s.TopInfoSocial__ico} src="img/vk.png" alt="vk" />
                        </a>
                        <a className={s.TopInfoSocial__link} href="#">
                            <img className={s.TopInfoSocial__ico} src="img/insta.png" alt="instagram" />
                        </a>
                    </div>
                    <div className={s.TopInfoProfile}>
                        <img className={s.TopInfoProfile__ico} src="img/user-ico.png" alt="" />
                        <div className={s.TopInfoProfile__text}>Мои заказы</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TopInfo;