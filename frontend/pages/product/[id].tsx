import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { GetAllCatalog, GetMenu, GetProductsById, GetSection } from '../../services/core/requests'
import { getBreadCrumbsFromCatalog } from '../../services/core/parse'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'
import { IProduct, IProductFilter } from '../../interfaces/products.interface'
import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface'
import ProductCard from '../../components/ProductCard/ProductCard'

interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
    breadCrumbsArr: IBreadCrumbs[]
    product: IProduct
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, breadCrumbsArr, product }) => {
    return (
        <div>
            <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
                <BreadCrumbs breadCrumbsArr={breadCrumbsArr} />
                <ProductCard product={product} />
            </MainLayout>
        </div >
    )
}


export async function getServerSideProps(context) {
    const { query } = context

    const topMenu = await GetMenu('verkhnee-menyu')
    const headerMenu = await GetMenu('menyu-v-khedere')
    const footerMenu = await GetMenu('menyu-v-futere')

    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')

    // Получить весь каталог
    const product: IProduct = await GetProductsById(query.id)

    // Получить весь каталог
    const catalogArr = await GetAllCatalog()

    const breadCrumbsArr = getBreadCrumbsFromCatalog(catalogArr, product.catalog.slug)

    return {
        props: { topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, breadCrumbsArr, product }
    }
}


export default Index