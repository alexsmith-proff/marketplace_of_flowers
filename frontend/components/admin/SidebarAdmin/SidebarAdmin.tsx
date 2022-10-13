import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineFundProjectionScreen, AiOutlineMenuUnfold, AiOutlineRead, AiOutlineAudit } from "react-icons/ai";
import { TbNewSection } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import s from './SidebarAdmin.module.scss'

interface SidebarAdminProps {
}
const sidebarItems = [
    {
        name: 'Главная',
        ico: <AiOutlineFundProjectionScreen />,
        link: '/main'
    },
    {
        name: 'Меню',
        ico: <AiOutlineMenuUnfold />,
        link: '/menu'
    },
    {
        name: 'Каталог',
        ico: <AiOutlineRead />,
        link: '/catalog'
    },
    {
        name: 'Секции',
        ico: <TbNewSection />,
        link: '/sections'
    },
    {
        name: 'Покупатели',
        ico: <AiOutlineAudit />,
        link: '/buyers'
    },
    {
        name: 'Настройки',
        ico: <IoSettingsOutline />,
        link: '/settings'
    },
]

const SidebarAdmin = ({ }: SidebarAdminProps) => {
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
                            <li className={s.item} key={index}>
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