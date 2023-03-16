import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { GetCatalogByParent, GetCatalogNameBySlug, GetMenu, GetSection } from '../../services/core/requests'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'
import CatalogCards from '../../components/CatalogCards/CatalogCards'
import { ICatalogCards } from '../../interfaces/catalog.interface'
import CatalogSeo from '../../components/CatalogSeo/CatalogSeo'

interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    catalogCards: ICatalogCards,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, footerMenu, catalogCards, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }) => {

    return (
        <div>
            <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
                <CatalogCards title={catalogCards.title} catalogCards={catalogCards.cards} />
                <CatalogSeo />
            </MainLayout>
        </div >
    )
}


export async function getServerSideProps(context) {
    const { query } = context
    const topMenu = await GetMenu('verkhnee-menyu')
    const headerMenu = await GetMenu('menyu-v-khedere')
    const footerMenu = await GetMenu('menyu-v-futere')

    const catalogCards: ICatalogCards = {
        title: await GetCatalogNameBySlug(query.slug),
        cards: await GetCatalogByParent(query.slug)
    }
    
    // const catalogCards = null

    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')

    return {
        props: { topMenu, headerMenu, footerMenu, catalogCards, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }
    }
}


export default Index