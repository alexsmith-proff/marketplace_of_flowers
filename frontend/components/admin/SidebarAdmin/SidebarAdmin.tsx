import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconContext } from "react-icons";
import { AiOutlineFundProjectionScreen, AiOutlineMenuUnfold, AiOutlineRead, AiOutlineTeam } from "react-icons/ai";
import { TbNewSection } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import s from './SidebarAdmin.module.scss'

interface SidebarAdminProps {
    itemNum: number
}
const sidebarItems = [
    {
        name: 'Главная',
        ico: <AiOutlineFundProjectionScreen />,
        link: '/admin'
    },
    {
        name: 'Меню',
        ico: <AiOutlineMenuUnfold />,
        link: '/admin/menu'
    },
    {
        name: 'Каталог',
        ico: <AiOutlineRead />,
        link: '/admin/catalog'
    },
    {
        name: 'Секции',
        ico: <TbNewSection />,
        link: '/admin/sections'
    },
    {
        name: 'Покупатели',
        ico: <AiOutlineTeam />,
        link: '/admin/buyers'
    },
    {
        name: 'Настройки',
        ico: <IoSettingsOutline />,
        link: '/admin/settings'
    },
]

const SidebarAdmin = ({ itemNum }: SidebarAdminProps) => {
    return (
        <div className={s.sidebar}>
            <div className={s.sidebarTop}>
                <div className={s.avatar}>
                    <Image className={s.photo} src="/img/avatar.jpeg" width={50} height={50} alt="avatar" />
                    <div className={s.name}>Алексей Кузнецов</div>
                </div>
            </div>
            <div className="sidebarItems">
                <ul className="list">
                    {
                        sidebarItems.map((item, index) => (
                            <li className={index==itemNum ? (s.item + ' ' + s.active) : s.item} key={index}>
                                <Link href={item.link}>
                                    <a className={s.link}>
                                        <div className={s.nameItem}>{item.name}</div>
                                        <IconContext.Provider value={{ color: "white", size:"22px", className: "global-class-name" }}>
                                            <div>
                                                {item.ico}
                                            </div>
                                        </IconContext.Provider>
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default SidebarAdmin;