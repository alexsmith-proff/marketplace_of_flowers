import { FC, useState, useEffect } from "react";
import CatalogProductList from "../../CatalogProductList/CatalogProductList";
import Sorting from "../../Sorting/Sorting";
import Pagination from "../../Pagination/Pagination";
import { ICatalogProduct } from "../../../interfaces/catalog.interface";

import s from './CatalogProductContent.module.scss'

type CatalogProductContentProps = {
    sortItem: string
    setSortItem: (sort: string) => void
    products: ICatalogProduct[]
}

const CatalogProductContent: FC<CatalogProductContentProps> = ({ sortItem, setSortItem, products }) => {
    // Вырезает из products товары на странице
    function getProductsOnPage(): ICatalogProduct[] {
        return products.slice(currentPagePagination * countPerPagePagination, currentPagePagination * countPerPagePagination + countPerPagePagination)
    }

    // Массив товаров на странице
    const [productsOnPage, setProductsOnPage] = useState<ICatalogProduct[]>([])

    // Текущая страница пагинации
    const [currentPagePagination, setCurrentPagePagination] = useState<number>(0)

    // Количество продуктов на странице
    const countPerPagePagination = 9

    // Количество страниц пагинации
    const countPagination = Math.ceil(products.length / countPerPagePagination)


    useEffect(() => {
        setCurrentPagePagination(0)
    }, [products])
    useEffect(() => {
        if (products) {
            setProductsOnPage(() => getProductsOnPage())
        }
    }, [products, currentPagePagination])

    const handleClickPagiation = (pageNum) => {        
        setCurrentPagePagination(pageNum)
    }

    return (
        <div className={s.wrap}>
            <div className={s.sorting}>
                <Sorting sortItem={sortItem} setSortItem={setSortItem} />
            </div>
            <CatalogProductList products={productsOnPage} />
            <Pagination pageCount={countPagination} onClickPagination={handleClickPagiation} />
        </div>
    )
}

export default CatalogProductContent