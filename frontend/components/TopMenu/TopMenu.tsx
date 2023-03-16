import Image from 'next/image';
import React, { FC, useState } from 'react';
import { IMenu } from '../../interfaces/menu.interface';

import s from './TopMenu.module.scss'

interface TopMenuProps {
    menu: IMenu
}

const TopMenu: FC<TopMenuProps> = ({ menu }) => {
    const [menuItemActive, setMenuItemActive] = useState<boolean>(false)

    return (
        <div className={s.topmenu}>
            <div className="container">
                <div className={s.topmenuContainer}>
                    <a href="#">
                        <div className={s.stock}>
                            <div className={s.stock__ico}>
                                <Image src='/img/discount.png' width={40} height={40} alt='discount' />
                            </div>
                            <div className={s.stock__text}>АКЦИИ</div>
                        </div>
                    </a>
                    {
                        menu &&
                        <ul className={s.menu}>
                            {
                                menu.items.map((item) => (
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