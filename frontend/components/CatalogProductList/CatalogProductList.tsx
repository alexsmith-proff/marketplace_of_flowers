import React, { FC } from "react";

import s from './CatalogProductList.module.scss'
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import { ICatalogProduct } from "../../interfaces/catalog.interface";
import Sorting from "../Sorting/Sorting";

interface CatalogProductListProps {
    products: ICatalogProduct[]
}

const CatalogProductList: FC<CatalogProductListProps> = ({ products }) => {
    
    return (
        <div className={s.wrap}>
            <ul className={s.list}>
                {
                    products?.map(item => <CatalogProduct product={item} key={item.id} />)
                }
            </ul>
        </div>
    )
}

export default React.memo(CatalogProductList)