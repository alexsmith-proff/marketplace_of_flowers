import { useState } from "react"
import { IProductFilterRowTable } from "../interfaces/products.interface"

export const useProductFilter = (initialProductFilterArr) => {
    const [productFilterArr, setProductFilterArr] = useState<IProductFilterRowTable[]>(initialProductFilterArr)

    const change = (filterItems: IProductFilterRowTable[]) => {
        setProductFilterArr(filterItems)
    }

    return { productFilterArr, change }
}