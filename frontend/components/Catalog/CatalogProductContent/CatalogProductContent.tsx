import { FC, useState, useEffect } from "react";
import CatalogProductList from "../../CatalogProductList/CatalogProductList";
import Sorting from "../../Sorting/Sorting";
import Pagination from "../../Pagination/Pagination";
import { ICatalogProduct } from "../../../interfaces/catalog.interface";

import s from './CatalogProductContent.module.scss'
import { IProduct } from "../../../interfaces/products.interface";

type CatalogProductContentProps = {
    sortItem: string
    setSortItem: (sort: string) => void
    // products: ICatalogProduct[]
    products: IProduct[]
}

const CatalogProductContent: FC<CatalogProductContentProps> = ({ sortItem, setSortItem, products }) => {
    // Вырезает из products товары на странице
    function getProductsOnPage(): IProduct[] {
        return products.slice(currentPagePagination * countPerPagePagination, currentPagePagination * countPerPagePagination + countPerPagePagination)
    }

    // Массив товаров на странице
    // const [productsOnPage, setProductsOnPage] = useState<ICatalogProduct[]>([])
    const [productsOnPage, setProductsOnPage] = useState<IProduct[]>([])

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
            <div className={s.pagination}>
                <Pagination pageCount={countPagination} onClickPagination={handleClickPagiation} />
            </div>
        </div>
    )
}

export default CatalogProductContent