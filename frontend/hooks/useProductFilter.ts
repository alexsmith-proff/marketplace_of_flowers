import { useState } from "react"
import { IProductFilter } from "../interfaces/products.interface"

export const useProductFilter = (initialProductFilterArr) => {
    const [productFilterArr, setProductFilterArr] = useState<IProductFilter[]>(initialProductFilterArr)

    const change = (filterItems: IProductFilter[]) => {
        setProductFilterArr(filterItems)
    }

    return { productFilterArr, change }
}