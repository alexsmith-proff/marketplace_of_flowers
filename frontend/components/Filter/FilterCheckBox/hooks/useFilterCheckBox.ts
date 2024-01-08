import { useState } from "react"
import { IFilterElement, IFilterValue } from "../../../../interfaces/filter.interface"

export const useFilterCheckBox = (filter, changeCheckBox: (val: IFilterElement) => void) => {
    const [isExpand, setIsExpand] = useState<boolean>(false)

    const handleChangeCheckBoxFilterElement = (itemValue: IFilterValue) => {
        changeCheckBox({...filter, values: filter.values.map((item: IFilterValue) => (
            item.id === itemValue.id ? (item.value == '0' ? { ...item, value: '1' } : { ...item, value: '0' }) : item
        ))
    })
    }
    // changeCheckBox: (val: IFilterElement) => void

    const HandleExpand = () => {
        setIsExpand(!isExpand)
    }
    return { isExpand, handleChangeCheckBoxFilterElement, HandleExpand }
}