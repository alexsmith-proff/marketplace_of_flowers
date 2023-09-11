﻿import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TopInfo from '../../components/TopInfo/TopInfo';
import TopMenu from '../../components/TopMenu/TopMenu';
import { IMenu } from '../../interfaces/menu.interface';
import { ISection } from '../../interfaces/section.interface';
import Call from '../../components/Header/Call/Call';
import HeaderText from '../../components/Header/HeaderText/HeaderText';
import HeaderFavoriteBtn from '../../components/Header/HeaderFavoriteBtn/HeaderFavoriteBtn';
import HeaderLogo from '../../components/Header/HeaderLogo/HeaderLogo';
import HeaderFind from '../../components/Header/HeaderFind/HeaderFind';
import HeaderCall from '../../components/Header/HeaderCall/HeaderCall';

interface MainLayoutProps {
    topMenu: IMenu,
    headerMenu?: IMenu,
    footerMenu: IMenu,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
    children: React.ReactNode
}

const MainLayout = ({ topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, children }: MainLayoutProps) => {
    return (
        <>
            <TopInfo menu={topMenu} />
            <Header
                logoComponent={<HeaderLogo />}
                findComponent={<HeaderFind />}
                callComponent={<HeaderCall />}
                headerTextComponent={<HeaderText text='Доставка цветов в Воронеже' />}
                favoriteBtnComponent={<HeaderFavoriteBtn />}
            />
            {headerMenu && <TopMenu menu={headerMenu} />}

            {children}
            <Footer menu={footerMenu} menuInfo={footerMenuInfo} menuCoordinates={footerMenuCoordinates} menuEmail={footerMenuEmail} />
        </>
    );
};

export default MainLayout;