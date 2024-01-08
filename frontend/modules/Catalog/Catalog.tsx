import { FC } from "react";
import Filter from "../../components/Filter/Filter";
import CatalogProductContent from "./components/CatalogProductContent/CatalogProductContent";
import { useCatalog } from "./hooks/useCatalog";
import { IFilter } from "../../interfaces/filter.interface";
import { IProductMinMaxPrice } from "../../interfaces/products.interface";

import s from './Catalog.module.scss'

interface CatalogProps {
    filter: IFilter
    minMaxPriceProduct: IProductMinMaxPrice
}

const Catalog: FC<CatalogProps> = ({ filter, minMaxPriceProduct }) => {
    const { sortItem, setSortItem, products, handleGetProductsByFilter } = useCatalog()

    return (
        <div className="container">
            <div className={s.wrap}>
                <Filter filterMinMaxPrice={minMaxPriceProduct} filter={filter} getProductsByFilter={handleGetProductsByFilter} />
                <CatalogProductContent sortItem={sortItem} setSortItem={setSortItem} products={products} />
            </div>

        </div>
    )
}

export default Catalog