import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { IMenu } from '../../interfaces/menu.interface';

import s from './TopMenu.module.scss'
import ConnectedTopMenuStock from './ConnectedTopMenuStock/ConnectedTopMenuStock';
import TopMenuList from './TopMenuList/TopMenuList';

interface TopMenuProps {
    menu: IMenu
}

const TopMenu: FC<TopMenuProps> = ({ menu }) => {
    return (
        <div className={s.topmenu}>
            <div className="container">
                <div className={s.topmenuContainer}>
                        <ConnectedTopMenuStock />
                        <TopMenuList menu={menu} />
                </div>
            </div>
        </div>
    );
};

export default TopMenu;