import React, { FC } from 'react'
import { IMenu } from '../../interfaces/menu.interface';
import { ISection } from '../../interfaces/section.interface';
import { getMenuItemNameBySlugFromMenu, getSubMenuItemsArrBySlugFromMenu, getTextInTextBlockFromElement, getTextInTextBlockFromSection } from '../../services/core/parse';

import s from './Footer.module.scss'

interface FooterProps {
    menu: IMenu,
    menuInfo?: IMenu
    menuCoordinates?: ISection
    menuEmail?: ISection
}

const Footer: FC<FooterProps> = ({ menu, menuInfo, menuCoordinates, menuEmail }) => {

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
                                {
                                    menuInfo && menuInfo.name
                                }
                                {/* Информация */}
                                <ul className={s.footer__menuChild}>
                                    {
                                        menuInfo && menuInfo.items.map(item => <li className={s.footer__menuChildItem} key={item.id}>{item.name}</li>)
                                    }

                                </ul>
                            </li>
                        </ul>

                        {
                            menuCoordinates && (
                                <div className={s.footer__contacts}>
                                    <div className={s.contacts__title}>{menuCoordinates.name}</div>
                                    {
                                        menuCoordinates.elements.map((el, index) => (
                                            <div className={s.contacts__point} key={index}>
                                                <div className={s.contacts__pointName}>{getTextInTextBlockFromElement(el, 'title')}</div>
                                                <div className={s.contacts__pointPhone}>{getTextInTextBlockFromElement(el, 'telefon')}</div>
                                            </div>
                                        ))
                                    }
                                    
                                    <div className={s.contacts__email}>
                                        <div className={s.contacts__emailName}>{getTextInTextBlockFromSection(menuEmail, 'e-mail', 'title')}</div>
                                        <div className={s.contacts__emailText}>{getTextInTextBlockFromSection(menuEmail, 'e-mail', 'soderzhimoe')}</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
