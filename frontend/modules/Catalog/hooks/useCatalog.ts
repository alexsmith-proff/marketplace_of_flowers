import { useEffect, useState } from "react"
import { GetProductsByFilterData } from "../../../services/core/requests"
import { SortingsList } from "../../../constants/sorting.conts"
import { IFilterData, IFilterOrderData } from "../../../interfaces/filter.interface"
import { IProduct } from "../../../interfaces/products.interface"

export const useCatalog = () => {
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
    return { sortItem, setSortItem, products, handleGetProductsByFilter }
}