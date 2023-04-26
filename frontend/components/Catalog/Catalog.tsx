import { FC } from "react";
import Filter from "../Filter/Filter";
import { IFilter, IFilterData } from "../../interfaces/filter.interface";
import { GetProductsByFilterData } from "../../services/core/requests";
import { IProductMinMaxPrice } from "../../interfaces/products.interface";
import CatalogProducts from "../CatalogProducts/CatalogProducts";

import s from './Catalog.module.scss'

interface CatalogProps {
    filter: IFilter
    minMaxPriceProduct: IProductMinMaxPrice
}

const Catalog: FC<CatalogProps> = ({ filter, minMaxPriceProduct }) => {

    const handleGetProductsByFilter = async (FilterData: IFilterData[]) => {
        console.log('FFFFilterData', FilterData);
        const products = await GetProductsByFilterData(FilterData)
        console.log('pppppproducts', products);
    }

    return (
        <div className="container">
            <div className={s.wrap}>
                <Filter filterMinMaxPrice={minMaxPriceProduct} filter={filter} getProductsByFilter={handleGetProductsByFilter} />
                <CatalogProducts />
            </div>

        </div>
    )
}

export default Catalog