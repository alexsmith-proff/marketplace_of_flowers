import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TopInfo from '../../components/TopInfo/TopInfo';
import TopMenu from '../../components/TopMenu/TopMenu';
import { IMenu } from '../../interfaces/menu.interface';
import { ISection } from '../../interfaces/section.interface';
import Logo from '../../components/Logo/Logo';

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
            <Header logoComponent={<Logo src='/img/logo.png' />} />
            {headerMenu && <TopMenu menu={headerMenu} />}

            {children}
            <Footer menu={footerMenu} menuInfo={footerMenuInfo} menuCoordinates={footerMenuCoordinates} menuEmail={footerMenuEmail} />
        </>
    );
};

export default MainLayout;