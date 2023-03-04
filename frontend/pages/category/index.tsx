import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { GetMenu, GetSection } from '../../services/core/requests'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'

interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }) => {

    return (
        <div>
            <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
            </MainLayout>
        </div >
    )
}


export async function getServerSideProps() {
    const topMenu = await GetMenu('verkhnee-menyu')
    const headerMenu = await GetMenu('menyu-v-khedere')
    const footerMenu = await GetMenu('menyu-v-futere')
    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')

    return {
        props: { topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }
    }
}


export default Index