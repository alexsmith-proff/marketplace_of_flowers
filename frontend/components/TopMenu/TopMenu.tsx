import React, { FC } from 'react';

import s from './TopMenu.module.scss'

interface TopMenuProps {
}

const TopMenu: FC<TopMenuProps> = ({ }) => {

    return (
        <div className={s.topmenu}>
            <div className="container">
                <div className={s.topmenuContainer}>
                    <a href="#">
                        <div className={s.stock}>
                            <img className={s.stock__ico} src="img/discount.png" alt="discount" />
                            <div className={s.stock__text}>АКЦИИ</div>
                        </div>
                    </a>
                    <ul className={s.menu}>
                        <li className={s.menuItem}>
                            <a href="#">Цветы поштучно</a>
                        </li>
                        <li className={s.menuItem}>
                            <a href="#">Розы</a>
                            <ul className={s.menuChild}>
                                <li className={s.menuItemChild}>
                                    <a href="#">Голандские розы</a>
                                </li>
                                <li className={s.menuItemChild + ' ' + s.active}>
                                    <a href="#">Местная роза</a>
                                </li>
                                <li className={s.menuItemChild}>
                                    <a href="#">Кустовые розы</a>
                                </li>
                                <li className={s.menuItemChild}>
                                    <a href="#">Пионовидные розы</a>
                                </li>
                                <li className={s.menuItemChild}>
                                    <a href="#">Букет из 101 розы</a>
                                </li>
                            </ul>
                        </li>
                        <li className={s.menuItem}>
                            <a href="#">Букеты</a>
                        </li>
                        <li className={s.menuItem}>
                            <a href="#">Композиции</a>
                        </li>
                        <li className={s.menuItem}>
                            <a href="#">Подарки</a>
                        </li>
                        <li className={s.menuItem}>
                            <a href="#">Шары</a>
                        </li>
                        <li className={s.menuItem}>
                            <a href="#">Свадебные букеты</a>
                        </li>
                        <li className={s.menuItem}>
                            <a href="#">Повод</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;