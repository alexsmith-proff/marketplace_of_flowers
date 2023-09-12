import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { IMenu } from '../../interfaces/menu.interface';

import s from './TopMenu.module.scss'
import ConnectedTopMenuStock from './ConnectedTopMenuStock/ConnectedTopMenuStock';

interface TopMenuProps {
    menu: IMenu
}

const TopMenu: FC<TopMenuProps> = ({ menu }) => {
    const [menuItemActive, setMenuItemActive] = useState<boolean>(false)

    return (
        <div className={s.topmenu}>
            <div className="container">
                <div className={s.topmenuContainer}>
                        <ConnectedTopMenuStock />
                    {
                        menu &&
                        <ul className={s.menu}>
                            {
                                menu.items.map((item) => (
                                    <Link href={`/category/${item.link}`} key={item.id}>
                                        <a>
                                            <li className={s.menuItem} key={item.id}>
                                                {item.name}
                                                {
                                                    (item.submenuitems.length != 0) &&
                                                    <ul className={s.menuChild}>
                                                        {
                                                            item.submenuitems.map((itemChild) => <li className={s.menuItemChild} key={itemChild.id}>{itemChild.name}</li>)
                                                        }
                                                    </ul>
                                                }
                                            </li>
                                        </a>
                                    </Link>
                                ))
                            }
                        </ul>
                    }

                </div>
            </div>
        </div>
    );
};

export default TopMenu;