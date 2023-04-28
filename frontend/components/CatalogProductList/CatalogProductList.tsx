import { FC } from "react";

import s from './CatalogProductList.module.scss'
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import { ICatalogProduct } from "../../interfaces/catalog.interface";
import Sorting from "../Sorting/Sorting";

interface CatalogProductListProps {
    sortItem: string
    setSortItem: (sort: string) => void
    products: ICatalogProduct[]
}

const CatalogProductList: FC<CatalogProductListProps> = ({ sortItem, setSortItem,  products }) => {
    console.log('CatalogProductList');
    
    return (
        <div className={s.wrap}>
            <div className={s.sorting}>
                <Sorting sortItem={sortItem} setSortItem={setSortItem} />
            </div>
            <ul className={s.list}>
                {
                    products?.map(item => <CatalogProduct product={item} key={item.id} />)
                }
            </ul>
        </div>
    )
}

export default CatalogProductList