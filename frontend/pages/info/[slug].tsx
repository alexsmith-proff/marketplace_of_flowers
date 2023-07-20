import React, { FC, useState } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { GetMenu, GetSection } from '../../services/core/requests'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'
import { ICatalog } from '../../interfaces/catalog.interface'
import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface'
import InfoLayout from '../../layouts/InfoLayout/InfoLayout'
import InfoAbout from '../../components/InfoAbout/InfoAbout'
import InfoPay from '../../components/InfoPay/InfoPay'
import InfoDelivery from '../../components/InfoDelivery/InfoDelivery'

interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    catalogCards: ICatalog[],
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
    breadCrumbsArr: IBreadCrumbs[],
    slugUrl: string,
    about: ISection,
    employee: ISection, 

}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, slugUrl, about, employee }) => {
    // console.log(slugUrl);
    return (
        <div>
            <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
                <InfoLayout sideMenuSlug={slugUrl}>
                    { slugUrl === 'about' && <InfoAbout about={about} employee={employee} /> }
                    { slugUrl === 'pay' && <InfoPay /> }
                    { slugUrl === 'delivery' && <InfoDelivery /> }
                </InfoLayout>
            </MainLayout>
        </div >
    )
}


export async function getServerSideProps(context) {
    const { query } = context
    const slugUrl = query.slug

    const topMenu = await GetMenu('verkhnee-menyu')
    const headerMenu = await GetMenu('menyu-v-khedere')
    const footerMenu = await GetMenu('menyu-v-futere')

    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')

    const about = await GetSection('o-nas')
    const employee = await GetSection('nashi-sotrudniki')

    return {
        props: { topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, slugUrl, about, employee }
    }
}


export default Index