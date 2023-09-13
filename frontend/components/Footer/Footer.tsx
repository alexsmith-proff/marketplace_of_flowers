import React, { FC } from 'react'
import FooterMenuList from './FooterMenuList/FooterMenuList';
import FooterContactsList from './FooterContactsList/FooterContactsList';
import { IMenu } from '../../interfaces/menu.interface';
import { ISection } from '../../interfaces/section.interface';

import s from './Footer.module.scss'

interface FooterProps {
    menu: IMenu,
    menuInfo?: IMenu
    menuCoordinates?: ISection
    menuEmail?: ISection
}

const Footer: FC<FooterProps> = ({ menu, menuCoordinates, menuEmail }) => {

    return (
        <>
            <footer className={s.footer}>
                <div className="container">
                    <div className={s.footerWrap}>
                        <FooterMenuList items={menu?.items} />
                        <FooterContactsList name={menuCoordinates.name} menuCoordinates={menuCoordinates.elements} menuEmail={menuEmail} />
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
