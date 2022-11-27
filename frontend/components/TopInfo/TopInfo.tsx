import React, { FC } from 'react';

import s from './TopInfo.module.scss'

const TopInfo: FC = () => {

    return (
        <div className="container">
            <div className={s.topInfo}>
                <div className={s.topInfoTime}>
                    <img className={s.topInfoTime__ico} src="img/clock.png" alt="clock" />
                        <div className={s.topInfoTime__text}>Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</div>
                </div>
                <ul className={s.TopInfoMenu}>
                    <li className={s.TopInfoMenu__item}>
                        <a className={s.TopInfoMenu__link} href="#">Доставка</a>
                    </li>
                    <li className={s.TopInfoMenu__item}>
                        <a className={s.TopInfoMenu__link} href="#">Оплата</a>
                    </li>
                    <li className={s.TopInfoMenu__item}>
                        <a className={s.TopInfoMenu__link} href="#">Отзывы</a>
                    </li>
                    <li className={s.TopInfoMenu__item}>
                        <a className={s.TopInfoMenu__link} href="#">Блог</a>
                    </li>
                    <li className={s.TopInfoMenu__item}>
                        <a className={s.TopInfoMenu__lin} href="#">Информация</a>
                </li>
                <li className={s.TopInfoMenu__item}>
                    <a className={s.TopInfoMenu__link} href="#">Контакты</a>
                </li>
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