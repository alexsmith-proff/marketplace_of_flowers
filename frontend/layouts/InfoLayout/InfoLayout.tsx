import React, { FC, useState, useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import SideMenu from '../../components/SideMenu/SideMenu';
import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface';

import s from './InfoLayout.module.scss'

interface InfoLayoutProps {
    sideMenuSlug: string
    children: React.ReactNode
}

const InfoLayout: FC<InfoLayoutProps> = ({ sideMenuSlug, children }: InfoLayoutProps) => {
    const [breadCrumbsArr, setBreadCrumbsArr] = useState<IBreadCrumbs[]>([])

    useEffect(() => {
        setBreadCrumbsArr([
            {
                slug: '',
                text: 'Главная',
            },
            {
                slug: sideMenuSlug,
                text: sideMenuSlug === 'about' ? 'О нас' : sideMenuSlug === 'pay' ? 'Оплата' : sideMenuSlug === 'delivery' ? 'Доставка' : '',
            }
        ])
    }, [sideMenuSlug])


    return (
        <>
            <BreadCrumbs breadCrumbsArr={breadCrumbsArr} />
            <div className='container'>
                <div className={s.wrap}>
                    <SideMenu sideMenuSlug={sideMenuSlug}/>
                    {children}
                </div>
            </div>
        </>
    );
};

export default InfoLayout;