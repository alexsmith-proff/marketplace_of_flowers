import { FC, useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import { IFilter, IFilterData, IFilterOrderData } from "../../interfaces/filter.interface";
import { GetProductsAll, GetProductsByFilterData } from "../../services/core/requests";
import { IProductMinMaxPrice } from "../../interfaces/products.interface";

import s from './Catalog.module.scss'
import { ICatalogProduct } from "../../interfaces/catalog.interface";
import { SortingsList } from "../../constants/sorting.conts";
import CatalogProductContent from "./CatalogProductContent/CatalogProductContent";

interface CatalogProps {
    filter: IFilter
    minMaxPriceProduct: IProductMinMaxPrice
}

const Catalog: FC<CatalogProps> = ({ filter, minMaxPriceProduct }) => {
    const [products, setProducts] = useState<ICatalogProduct[]>([])
    const [sortItem, setSortItem] = useState<string>(SortingsList[0])

    useEffect(() => {
        const fetchData = async () => {
            console.log(GetProductsAll());
            
            setProducts(await GetProductsAll())
        }
        fetchData()
    }, [])


    const handleGetProductsByFilter = async (FilterData: IFilterData[]) => {
        const FilterOrderData: IFilterOrderData = {
            order: sortItem,
            filters: FilterData
        }
        console.log('FFFFilterData', FilterOrderData);
        setProducts(await GetProductsByFilterData(FilterOrderData))
        console.log('pppppproducts', products);
    }

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