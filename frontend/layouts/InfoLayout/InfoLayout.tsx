import React, { FC, useState } from 'react';
import { ISection } from '../../interfaces/section.interface';

import s from './InfoLayout.module.scss'
import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import SideMenu from '../../components/SideMenu/SideMenu';

interface ISideMenuItem {
    name: string,
    slug: string,
    active: boolean
}

interface InfoLayoutProps {
    sideMenuSlug: string
    children: React.ReactNode
}

const InfoLayout: FC<InfoLayoutProps> = ({ sideMenuSlug, children }: InfoLayoutProps) => {
    const [sideMenu, setSideMenu] = useState<ISideMenuItem[]>([
        {
            name: 'О нас',
            slug: 'about',
            active: sideMenuSlug === 'about' ? true : false
        },
        {
            name: 'Оплата',
            slug: 'pay',
            active: sideMenuSlug === 'pay' ? true : false
        },
        {
            name: 'Доставка',
            slug: 'delivery',
            active: sideMenuSlug === 'delivery' ? true : false
        }
    ])
    const [breadCrumbsArr, setBreadCrumbsArr] = useState<IBreadCrumbs[]>([
        {
            slug: '',
            text: 'Главная',
        },
        {
            slug: sideMenuSlug,
            text: sideMenuSlug === 'about' ? 'О нас' : sideMenuSlug === 'pay' ? 'Оплата' : sideMenuSlug === 'delivery' ? 'Доставка' : '',
        },
    ])


    return (
        <>
            <BreadCrumbs breadCrumbsArr={breadCrumbsArr} />
            <div className='container'>
                <div className={s.wrap}>
                    <SideMenu />
                    {children}
                </div>
            </div>
        </>
    );
};

export default InfoLayout;