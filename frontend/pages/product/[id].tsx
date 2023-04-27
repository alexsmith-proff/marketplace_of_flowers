import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { GetAllCatalog, GetMenu, GetProductsAll, GetProductsById, GetSection } from '../../services/core/requests'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'
import { IProduct, IProductFilter } from '../../interfaces/products.interface'

interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
    product: IProduct
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, product }) => {
    console.log('product', product)
    
    
    return (
        <div>
            <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
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
    const product = await GetProductsById(query.id)

   


    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')


    return {
        props: { topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, product }
    }
}


export default Index