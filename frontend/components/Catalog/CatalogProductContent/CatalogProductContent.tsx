import { FC } from "react";
import CatalogProductList from "../../CatalogProductList/CatalogProductList";
import Sorting from "../../Sorting/Sorting";
import { ICatalogProduct } from "../../../interfaces/catalog.interface";

import s from './CatalogProductContent.module.scss'

type CatalogProductContentProps = {
    sortItem: string
    setSortItem: (sort: string) => void
    products: ICatalogProduct[]
}

const CatalogProductContent: FC<CatalogProductContentProps> = ({ sortItem, setSortItem,  products }) => {

    console.log('CatalogProductContent');
    
    return(
        <div className={s.wrap}>
            <div className={s.sorting}>
                <Sorting sortItem={sortItem} setSortItem={setSortItem} />
            </div>
            <CatalogProductList products={products} />
        </div>
    )
}

export default CatalogProductContent