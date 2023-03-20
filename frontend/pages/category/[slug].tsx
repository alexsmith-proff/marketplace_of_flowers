import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { GetAllCatalog, GetCatalogByParent, GetCatalogNameBySlug, GetMenu, GetSection } from '../../services/core/requests'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'
import CatalogCards from '../../components/CatalogCards/CatalogCards'
import { ICatalogCards } from '../../interfaces/catalog.interface'
import CatalogSeo from '../../components/CatalogSeo/CatalogSeo'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface'

interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    breadCrumbsArr: IBreadCrumbs[]
    catalogCards: ICatalogCards,
    catalogSeo: ISection,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, breadCrumbsArr, catalogSeo, footerMenu, catalogCards, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }) => {

    return (
        <div>
            <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
                <BreadCrumbs breadCrumbsArr={breadCrumbsArr} />
                <CatalogCards title={catalogCards.title} catalogCards={catalogCards.cards} />
                <CatalogSeo catalogSeoSection={catalogSeo} />
            </MainLayout>
        </div >
    )
}


export async function getServerSideProps(context) {
    const { query } = context
    const topMenu = await GetMenu('verkhnee-menyu')
    const headerMenu = await GetMenu('menyu-v-khedere')
    const footerMenu = await GetMenu('menyu-v-futere')

    // Получить весь каталог
    const catalogArr = await GetAllCatalog()
    console.log(catalogArr);
    

    const breadCrumbsArr = [
        {
            slug: '',
            text: 'Главная'
        },
        {
            slug: 'bukety',
            text: 'Букеты'
        }
    ]

    const catalogCards: ICatalogCards = {
        title: await GetCatalogNameBySlug(query.slug),
        cards: await GetCatalogByParent(query.slug)
    }


    const catalogSeo = await GetSection('catalog-seo')

    // const catalogCards = null

    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')

    return {
        props: { topMenu, headerMenu, footerMenu, breadCrumbsArr, catalogCards, catalogSeo, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }
    }
}


export default Index