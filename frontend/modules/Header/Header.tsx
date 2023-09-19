import React, { FC } from 'react';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import HeaderFind from './components/HeaderFind/HeaderFind';
import HeaderCall from './components/HeaderCall/HeaderCall';
import HeaderText from './components/HeaderText/HeaderText';
import HeaderFavoriteBtnWithCount from './components/HeaderFavoriteBtnWithCount/HeaderFavoriteBtnWithCount';
import HeaderCart from './components/HeaderCart/HeaderCart';

import s from './Header.module.scss'

interface HeaderProps {}

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