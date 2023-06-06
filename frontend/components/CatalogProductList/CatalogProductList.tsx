import React, { FC } from "react";
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import { IProduct } from "../../interfaces/products.interface";

import s from './CatalogProductList.module.scss'
import { useSelector } from "react-redux";

interface CatalogProductListProps {
    products: IProduct[]
}

const CatalogProductList: FC<CatalogProductListProps> = ({ products }) => {  
    const buyProducts: IProduct[] = useSelector(state => state.product.products)  
    
    return (
        <div className={s.wrap}>
            <ul className={s.list}>
                {
                    products?.map(item => <CatalogProduct product={item} isBuyProduct={buyProducts?.some(pr => pr.id == item.id)} key={item.id} />)
                }
            </ul>
        </div>
    )
}

export default CatalogProductList