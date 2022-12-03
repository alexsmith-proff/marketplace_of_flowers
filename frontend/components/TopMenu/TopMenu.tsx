import React, { FC } from 'react';
import { IMenu } from '../../interfaces/menu.interface';

import s from './TopMenu.module.scss'

interface TopMenuProps {
    menu: IMenu
}

const TopMenu: FC<TopMenuProps> = ({ menu }) => {
    console.log('menuuuuuuuuuuuu',menu);
    

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
                        {
                            menu.items.map((item) => (
                                <li className={s.menuItem} key={item.id}>
                                    {item.name}
                                    {
                                        item.submenuitems.length != 0 && 
                                        <ul className={s.menuChild}>
                                            {
                                                item.submenuitems.map((itemChild) => <li className={s.menuItemChild} key={itemChild.id}>{itemChild.name}</li>)                                                    
                                            }
                                        </ul>
                                    }
                                    {/* <ul className={s.menuChild}>
                                        {
                                            item.submenuitems && (
                                                <>
                                                {
                                                    item.submenuitems.map((itemChild) => <li className={s.menuItemChild} key={itemChild.id}>{itemChild.name}</li>)                                                    
                                                }
                                                </>
                                            )
                                        }
                                    </ul> */}
                                </li>
                            ))
                        }
                        {/* <li className={s.menuItem}>
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
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;