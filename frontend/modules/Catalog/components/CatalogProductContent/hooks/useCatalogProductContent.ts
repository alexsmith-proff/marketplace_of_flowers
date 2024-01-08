import { useEffect, useState } from "react"
import { IProduct } from "../../../../../interfaces/products.interface"

export const useCatalogProductContent = (products: IProduct[]) => {
    // Вырезает из products товары на странице
    function getProductsOnPage(): IProduct[] {
        return products.slice(currentPagePagination * countPerPagePagination, currentPagePagination * countPerPagePagination + countPerPagePagination)
    }

    // Массив товаров на странице
    const [productsOnPage, setProductsOnPage] = useState<IProduct[]>([])

    // Текущая страница пагинации
    const [currentPagePagination, setCurrentPagePagination] = useState<number>(0)

    // Количество продуктов на странице
    const countPerPagePagination = 9

    // Количество страниц пагинации
    const countPagination = Math.ceil(products.length / countPerPagePagination)

    const handleClickPagiation = (pageNum) => {
        setCurrentPagePagination(pageNum)
    }

    useEffect(() => {
        // При изменении products и соответственно значения сортировки - 1 страница пагинации
        setCurrentPagePagination(0)
    }, [products])
    useEffect(() => {
        if (products) {
            setProductsOnPage(() => getProductsOnPage())
        }
    }, [products, currentPagePagination])

    return { countPagination, productsOnPage, handleClickPagiation, currentPagePagination}
}