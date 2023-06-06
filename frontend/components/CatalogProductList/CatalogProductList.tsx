import React, { FC } from "react";
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import { IProduct } from "../../interfaces/products.interface";

import s from './CatalogProductList.module.scss'

interface CatalogProductListProps {
    products: IProduct[]
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

export default CatalogProductList