import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { GetAllCatalog, GetCatalogByParent, GetCatalogNameBySlug, GetMenu, GetMinMaxPriceProduct, GetSection } from '../../services/core/requests'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'
import CatalogCards from '../../components/CatalogCards/CatalogCards'
import { ICatalogCards } from '../../interfaces/catalog.interface'
import CatalogSeo from '../../components/CatalogSeo/CatalogSeo'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface'
import { getBreadCrumbsFromCatalog } from '../../services/core/parse'
import { IProductMinMaxPrice } from '../../interfaces/products.interface'
import Filter from '../../components/Filter/Filter'


interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    breadCrumbsArr: IBreadCrumbs[],
    minMaxPriceProduct: IProductMinMaxPrice,
    catalogCards: ICatalogCards,
    catalogSeo: ISection,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, breadCrumbsArr, minMaxPriceProduct, catalogSeo, footerMenu, catalogCards, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }) => {

    return (
        <div>
            <Filter filterMinMaxPrice={minMaxPriceProduct} />
            {/* <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
                <BreadCrumbs breadCrumbsArr={breadCrumbsArr} />
                <CatalogCards title={catalogCards.title} catalogCards={catalogCards.cards} />

                <Filter filterMinMaxPrice={minMaxPriceProduct} />

                <CatalogSeo catalogSeoSection={catalogSeo} />
            </MainLayout> */}
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

    const breadCrumbsArr = getBreadCrumbsFromCatalog(catalogArr, query.slug)

    // ]

    const catalogCards: ICatalogCards = {
        title: await GetCatalogNameBySlug(query.slug),
        cards: await GetCatalogByParent(query.slug)
    }

    const minMaxPriceProduct = await GetMinMaxPriceProduct()
    console.log(minMaxPriceProduct);



    const catalogSeo = await GetSection('catalog-seo')

    // const catalogCards = null

    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')


    return {
        props: { topMenu, headerMenu, footerMenu, breadCrumbsArr, minMaxPriceProduct, catalogCards, catalogSeo, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }
    }
}


export default Index