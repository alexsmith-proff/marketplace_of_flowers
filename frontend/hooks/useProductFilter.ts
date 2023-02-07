import { useState } from "react"
import { IProductFilterRowTable } from "../interfaces/products.interface"

export const useProductFilter = (initialProductFilterArr) => {
    const [productFilterArr, setProductFilterArr] = useState<IProductFilterRowTable[]>(initialProductFilterArr)

    // Определяет готовность к созданию объекта IProductFilterRowTable. Проверяет поля на пустоту. Если одно из полей пустое то возвращает false
    const ReadyToCreate = () => {
        if(productFilterArr.find((item) => item.filterElementName == '' || item.filterValueName == '')){
            return false
        }
        return true
    }

    // Определяет готовность к отправке. Если поле isActiveCreateBtn = true (не нажата кнопка сохранить(галочка)) то возвращает false - нельзя отправлять
    const ReadyToFetch = () => {
        if(productFilterArr.find((item) => item.isActiveCreateBtn)){
            return false
        }
        return true
    }

    let isReadyCreate = ReadyToCreate()
    let isReadyToFeach = ReadyToFetch()

    const change = (filterItems: IProductFilterRowTable[]) => {
        setProductFilterArr(filterItems)
    }

    return { productFilterArr, change, isReadyCreate, isReadyToFeach }
}