import React from 'react';
import TopInfo from '../../modules/TopInfo/TopInfo';
import Header from '../../modules/Header/Header';
import TopMenu from '../../modules/TopMenu/TopMenu';
import Footer from '../../modules/Footer/Footer';
import { IMenu } from '../../interfaces/menu.interface';
import { ISection } from '../../interfaces/section.interface';

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
            <Header />
            <TopMenu menu={headerMenu} />
            {children}
            <Footer menu={footerMenu} menuInfo={footerMenuInfo} menuCoordinates={footerMenuCoordinates} menuEmail={footerMenuEmail} />
        </>
    );
};

export default MainLayout;