import React, { FC } from 'react';

import s from './Header.module.scss'

interface HeaderProps {
    logoComponent: React.ReactNode,
    findComponent: React.ReactNode
    callComponent: React.ReactNode
    headerTextComponent: React.ReactNode
    favoriteBtnComponent: React.ReactNode
    cartComponent: React.ReactNode
}

const Header: FC<HeaderProps> = ({ logoComponent, findComponent, callComponent, headerTextComponent, favoriteBtnComponent, cartComponent }) => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.headerContainer}>
                    {logoComponent}
                    {headerTextComponent}
                    {findComponent}
                    {callComponent}
                    {favoriteBtnComponent}
                    {cartComponent}                   
                </div>
            </div>
        </div>
    );
};

export default Header;