import React, { FC } from 'react'
import { IMenu } from '../../interfaces/menu.interface';
import { getMenuItemNameBySlugFromMenu, getSubMenuItemsArrBySlugFromMenu } from '../../services/core/parse';

import s from './Footer.module.scss'

interface FooterProps {
    menu: IMenu
}

const Footer: FC<FooterProps> = ({ menu }) => {
    console.log('menu', menu);


    return (
        <>
            <footer className={s.footer}>
                <div className="container">
                    <div className={s.footer__top}>
                        <ul className={s.footer__menu}>
                            <li className={s.footer__item}>
                                {
                                    getMenuItemNameBySlugFromMenu(menu, 'cvety-poshtuchno')
                                }
                                <ul className={s.footer__menuChild}>
                                    {
                                        menu && getSubMenuItemsArrBySlugFromMenu(menu, 'cvety-poshtuchno').map(subItem => <li className={s.footer__menuChildItem} key={subItem.id}>{subItem.name}</li>)
                                    }

                                </ul>

                            </li>
                            <li className={s.footer__item}>
                                {
                                    getMenuItemNameBySlugFromMenu(menu, 'rozy')
                                }
                                <ul className={s.footer__menuChild}>
                                    {
                                        menu && getSubMenuItemsArrBySlugFromMenu(menu, 'rozy').map(subItem => <li className={s.footer__menuChildItem} key={subItem.id}>{subItem.name}</li>)
                                    }
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                {
                                    getMenuItemNameBySlugFromMenu(menu, 'bukety')
                                }
                                <ul className={s.footer__menuChild}>
                                    {
                                        menu && getSubMenuItemsArrBySlugFromMenu(menu, 'bukety').map(subItem => <li className={s.footer__menuChildItem} key={subItem.id}>{subItem.name}</li>)
                                    }

                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                {
                                    getMenuItemNameBySlugFromMenu(menu, 'kompozicii')
                                }
                                <ul className={s.footer__menuChild}>
                                    {
                                        menu && getSubMenuItemsArrBySlugFromMenu(menu, 'kompozicii').map(subItem => <li className={s.footer__menuChildItem} key={subItem.id}>{subItem.name}</li>)
                                    }
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                {
                                    getMenuItemNameBySlugFromMenu(menu, 'podarki')
                                }
                                <ul className={s.footer__menuChild}>
                                    {
                                        menu && getSubMenuItemsArrBySlugFromMenu(menu, 'podarki').map(subItem => <li className={s.footer__menuChildItem} key={subItem.id}>{subItem.name}</li>)
                                    }
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                {
                                    getMenuItemNameBySlugFromMenu(menu, 'shary')
                                }
                                <ul className={s.footer__menuChild}>
                                    {
                                        menu && getSubMenuItemsArrBySlugFromMenu(menu, 'shary').map(subItem => <li className={s.footer__menuChildItem} key={subItem.id}>{subItem.name}</li>)
                                    }
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                Информация
                                <ul className={s.footer__menuChild}>
                                    <li className={s.footer__menuChildItem}>Доставка</li>
                                    <li className={s.footer__menuChildItem}>Оплата</li>
                                    <li className={s.footer__menuChildItem}>Отзывы</li>
                                    <li className={s.footer__menuChildItem}>Блог</li>
                                    <li className={s.footer__menuChildItem}>Гарантии</li>
                                    <li className={s.footer__menuChildItem}>Вопрос и ответ</li>
                                    <li className={s.footer__menuChildItem}>Корпоративным клиентам</li>
                                    <li className={s.footer__menuChildItem}>О компании</li>
                                    <li className={s.footer__menuChildItem}>Контакты</li>
                                </ul>
                            </li>
                        </ul>

                        <div className={s.footer__contacts}>
                            <div className={s.contacts__title}>Наши координаты</div>
                            <div className={s.contacts__point}>
                                <div className={s.contacts__pointName}>Служба Доставки</div>
                                <div className={s.contacts__pointPhone}>+7 (920) 211-49-03</div>
                            </div>
                            <div className={s.contacts__point}>
                                <div className={s.contacts__pointName}>Ул. Вл. Невского 17</div>
                                <div className={s.contacts__pointPhone}>+7 (920) 211-49-03</div>
                            </div>
                            <div className={s.contacts__point}>
                                <div className={s.contacts__pointName}>Ул. Революции 1905 года 80</div>
                                <div className={s.contacts__pointPhone}>+7 (906) 678-65-99</div>
                            </div>
                            <div className={s.contacts__email}>
                                <div className={s.contacts__emailName}>E-mail:</div>
                                <div className={s.contacts__emailText}>info@lavkaroz.ru</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
