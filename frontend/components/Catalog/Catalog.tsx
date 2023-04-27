import { FC, useState } from "react";
import Filter from "../Filter/Filter";
import { IFilter, IFilterData } from "../../interfaces/filter.interface";
import { GetProductsByFilterData } from "../../services/core/requests";
import { IProductMinMaxPrice } from "../../interfaces/products.interface";
import CatalogProducts from "../CatalogProductList/CatalogProductList";

import s from './Catalog.module.scss'
import CatalogProductList from "../CatalogProductList/CatalogProductList";
import { ICatalogProduct } from "../../interfaces/catalog.interface";

interface CatalogProps {
    filter: IFilter
    minMaxPriceProduct: IProductMinMaxPrice
}

const Catalog: FC<CatalogProps> = ({ filter, minMaxPriceProduct }) => {
    const [products, setProducts] = useState<ICatalogProduct[]>([])

    const handleGetProductsByFilter = async (FilterData: IFilterData[]) => {
        console.log('FFFFilterData', FilterData);
        setProducts(await GetProductsByFilterData(FilterData))
        console.log('pppppproducts', products);
    }

    return (
        <div className="container">
            <div className={s.wrap}>
                <Filter filterMinMaxPrice={minMaxPriceProduct} filter={filter} getProductsByFilter={handleGetProductsByFilter} />
                <CatalogProductList products={products} />
            </div>

        </div>
    )
}

export default Catalog