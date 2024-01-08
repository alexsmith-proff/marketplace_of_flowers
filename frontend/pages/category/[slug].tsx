import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import CatalogCards from '../../modules/CatalogCards/CatalogCards'
import Catalog from '../../modules/Catalog/Catalog'
import CatalogSeo from '../../components/CatalogSeo/CatalogSeo'
import { getBreadCrumbsFromCatalog } from '../../services/core/parse'
import { GetAllCatalog, GetCatalogByParent, GetCatalogNameBySlug, GetFilterBySlug, GetMenu, GetMinMaxPriceProduct, GetSection } from '../../services/core/requests'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'
import { ICatalogCards } from '../../interfaces/catalog.interface'
import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface'
import { IProductMinMaxPrice } from '../../interfaces/products.interface'
import { IFilter } from '../../interfaces/filter.interface'

interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    breadCrumbsArr: IBreadCrumbs[],
    minMaxPriceProduct: IProductMinMaxPrice,
    catalogCards: ICatalogCards,
    filter: IFilter,
    catalogSeo: ISection,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, breadCrumbsArr, minMaxPriceProduct, filter, catalogSeo, footerMenu, catalogCards, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }) => {

    return (
        <div>
            <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
                <BreadCrumbs breadCrumbsArr={breadCrumbsArr} />
                <CatalogCards catalogCards={catalogCards} />
                <Catalog filter={filter} minMaxPriceProduct={minMaxPriceProduct} />
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
    const breadCrumbsArr = getBreadCrumbsFromCatalog(catalogArr, query.slug)

    const catalogCards: ICatalogCards = {
        title: await GetCatalogNameBySlug(query.slug),
        cards: await GetCatalogByParent(query.slug)
    }

    const minMaxPriceProduct = await GetMinMaxPriceProduct()
    const filter = await GetFilterBySlug('filtr-osnovnoi')
    const catalogSeo = await GetSection('catalog-seo')

    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')

    return {
        props: { topMenu, headerMenu, footerMenu, breadCrumbsArr, minMaxPriceProduct, catalogCards, filter, catalogSeo, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }
    }
}

export default Index