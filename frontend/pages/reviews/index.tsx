import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { GetMenu, GetSection } from '../../services/core/requests'
import { IMenu } from '../../interfaces/menu.interface'
import { ISection } from '../../interfaces/section.interface'
import { ICatalog } from '../../interfaces/catalog.interface'
import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface'
import Reviews from '../../components/Reviews/Reviews'

interface IndexProps {
    topMenu: IMenu,
    footerMenu: IMenu,
    headerMenu: IMenu,
    catalogCards: ICatalog[],
    footerMenuInfo: IMenu,
    footerMenuCoordinates: ISection,
    footerMenuEmail: ISection
    breadCrumbsArr: IBreadCrumbs[],
    reviews: ISection
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, breadCrumbsArr, reviews }) => {

    return (
        <div>
            <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
                <BreadCrumbs breadCrumbsArr={breadCrumbsArr} />
                <Reviews reviewSection={reviews} sendReviewBtnVisible={true} />
            </MainLayout>
        </div >
    )
}


export async function getServerSideProps(context) {

    const {query} = context

    const topMenu = await GetMenu('verkhnee-menyu')
    const headerMenu = await GetMenu('menyu-v-khedere')
    const footerMenu = await GetMenu('menyu-v-futere')

    const footerMenuInfo = await GetMenu('menyu-informaciya')
    const footerMenuCoordinates = await GetSection('nashi-koordinaty')
    const footerMenuEmail = await GetSection('e-mail')

    // const breadCrumbsArr = getBreadCrumbsFromCatalog(catalogArr, query.slug)
    const breadCrumbsArr: IBreadCrumbs[] = [
        {
            slug: '',
            text: 'Главная',
        },
        {
            slug: 'reviews',
            text: 'Отзывы',
        }
    ]
    const reviews = await GetSection('reviews')

    return {
        props: { topMenu, headerMenu, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail, breadCrumbsArr, reviews }
    }
}


export default Index