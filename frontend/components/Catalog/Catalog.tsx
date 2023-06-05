import { FC, useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import { IFilter, IFilterData, IFilterOrderData } from "../../interfaces/filter.interface";
import { GetProductsByFilterData } from "../../services/core/requests";
import { IProduct, IProductMinMaxPrice } from "../../interfaces/products.interface";

import s from './Catalog.module.scss'
import { ICatalogProduct } from "../../interfaces/catalog.interface";
import { SortingsList } from "../../constants/sorting.conts";
import CatalogProductContent from "./CatalogProductContent/CatalogProductContent";

interface CatalogProps {
    filter: IFilter
    minMaxPriceProduct: IProductMinMaxPrice
}

const Catalog: FC<CatalogProps> = ({ filter, minMaxPriceProduct }) => {
    // const [products, setProducts] = useState<ICatalogProduct[]>([])
    const [products, setProducts] = useState<IProduct[]>([])
    const [sortItem, setSortItem] = useState<string>(SortingsList[0])
    const [filterData, setFilterData] = useState<IFilterData[]>([])

    useEffect(() => {
        const fetchDataByFilter = async () => {
            setProducts(await GetProductsByFilterData({
                order: sortItem,
                filters: filterData
            }))
        }
        fetchDataByFilter()
    }, [sortItem])


    const handleGetProductsByFilter = async (FilterData: IFilterData[]) => {
        setFilterData(FilterData)
        const FilterOrderData: IFilterOrderData = {
            order: sortItem,
            filters: FilterData
        }
        // console.log('FFFFilterData', FilterOrderData);
        setProducts(await GetProductsByFilterData(FilterOrderData))
        // console.log('pppppproducts', products);
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