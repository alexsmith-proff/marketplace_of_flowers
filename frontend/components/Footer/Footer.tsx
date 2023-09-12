import React, { FC } from 'react'
import { IMenu } from '../../interfaces/menu.interface';
import { ISection } from '../../interfaces/section.interface';
import { getTextInTextBlockFromElement, getTextInTextBlockFromSection } from '../../services/core/parse';

import s from './Footer.module.scss'
import FooterMenuList from './FooterMenuList/FooterMenuList';

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
                        <FooterMenuList items={menu?.items} />
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
