import React, { FC } from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderFind from './HeaderFind/HeaderFind';
import HeaderCall from './HeaderCall/HeaderCall';
import HeaderText from './HeaderText/HeaderText';
import HeaderFavoriteBtnWithCount from './HeaderFavoriteBtnWithCount/HeaderFavoriteBtnWithCount';
import HeaderCart from './HeaderCart/HeaderCart';

import s from './Header.module.scss'

interface HeaderProps {
    logoComponent: React.ReactNode,
    findComponent: React.ReactNode
    callComponent: React.ReactNode
    headerTextComponent: React.ReactNode
    favoriteBtnComponent: React.ReactNode
    cartComponent: React.ReactNode
}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.headerContainer}>
                    <HeaderLogo />
                    <HeaderFind />
                    <HeaderCall />
                    <HeaderText text='Доставка цветов в Воронеже' />
                    <HeaderFavoriteBtnWithCount />
                    <HeaderCart />
                </div>
            </div>
        </div>
    );
};

export default Header;