import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TopInfo from '../../components/TopInfo/TopInfo';
import { IMenu } from '../../interfaces/menu.interface';
import { ISection } from '../../interfaces/section.interface';

import s from './MainLayout.module.scss'

interface MainLayoutProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
    children: React.ReactNode
}

const MainLayout = ({ topMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, children }: MainLayoutProps) => {
    return (
        <>
            <TopInfo menu={topMenu} />
            <Header />
            {children}
            <Footer menu={footerMenu} menuInfo={footerMenuInfo} menuCoordinates={footerMenuCoordinates} menuEmail={footerMenuEmail} />
        </>
    );
};

export default MainLayout;