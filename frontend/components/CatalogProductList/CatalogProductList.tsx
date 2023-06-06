import React, { FC } from "react";
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import { IProduct } from "../../interfaces/products.interface";

import s from './CatalogProductList.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface CatalogProductListProps {
    products: IProduct[]
}

const CatalogProductList: FC<CatalogProductListProps> = ({ products }) => {
    const buyProducts = useSelector((state: RootState) => state.cartProduct.products)
    const favoriteProduct = useSelector((state: RootState) => state.favoriteProduct.products)
    console.log('buyProducts', buyProducts)
    console.log('favoriteProduct', favoriteProduct)
    

    return (
        <div className={s.wrap}>
            <ul className={s.list}>
                {
                    products?.map(item => <CatalogProduct
                        product={item}
                        isBuyProduct={buyProducts?.some(pr => pr.id == item.id)}
                        isFavorite={favoriteProduct?.some(pr => pr.id == item.id)} 
                        key={item.id}
                    />)
                }
            </ul>
        </div>
    )
}

export default CatalogProductList