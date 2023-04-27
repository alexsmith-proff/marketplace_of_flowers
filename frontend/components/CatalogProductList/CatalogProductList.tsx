import { FC } from "react";

import s from './CatalogProductList.module.scss'
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import { ICatalogProduct } from "../../interfaces/catalog.interface";

interface CatalogProductListProps {
    products: ICatalogProduct[]
}

const CatalogProductList: FC<CatalogProductListProps> = ({ products }) => {
    return (
        <ul className={s.list}>
            {
                products?.map(item => <CatalogProduct product={item} key={item.id} />)
            }
        </ul>
    )
}

export default CatalogProductList