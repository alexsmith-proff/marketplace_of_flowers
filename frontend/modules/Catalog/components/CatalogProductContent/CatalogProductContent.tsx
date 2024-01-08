import { FC } from "react";
import CatalogProductList from "../CatalogProductList/CatalogProductList";
import Pagination from "../../../../components/Pagination/Pagination";
import Sorting from "../Sorting/Sorting";
import { useCatalogProductContent } from "./hooks/useCatalogProductContent";
import { IProduct } from "../../../../interfaces/products.interface";

import s from './CatalogProductContent.module.scss'

type CatalogProductContentProps = {
    sortItem: string
    setSortItem: (sort: string) => void
    products: IProduct[]
}

const CatalogProductContent: FC<CatalogProductContentProps> = ({ sortItem, setSortItem, products }) => {
    const { countPagination, productsOnPage, handleClickPagiation, currentPagePagination} = useCatalogProductContent(products)

    return (
        <div className={s.wrap}>
            {
                countPagination !== 0 ?
                    <div className={s.sorting}>
                        <Sorting sortItem={sortItem} setSortItem={setSortItem} />
                    </div>
                    :
                    <></>
            }
            <CatalogProductList products={productsOnPage} />
            <div className={s.pagination}>
                <Pagination pageCount={countPagination} onClickPagination={handleClickPagiation} forcePage={currentPagePagination} />
            </div>
        </div>
    )
}

export default CatalogProductContent