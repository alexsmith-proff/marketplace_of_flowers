import { useContext, useEffect, useState } from "react"
import { IFilterContext } from "../../../../interfaces/filter.interface"
import FilterContext from "../../../../context/filter-context"

export const useFilterPrice = () => {
    const valueContext: IFilterContext = useContext(FilterContext)

    const [inputPriceMax, setInputPriceMax] = useState<number>(valueContext.price.limitMax)
    const [inputPriceMin, setInputPriceMin] = useState<number>(valueContext.price.limitMin)

    // Валидация val
    const validAndSetPriceValue = val => {
        if (val >= valueContext.price.limitMax) val = valueContext.price.limitMax
        if (val <= valueContext.price.limitMin) val = valueContext.price.limitMin
        return val
    }

    const onChangePriceValueMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPriceMin(Number(e.target.value))
    }

    const onChangePriceValueMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPriceMax(Number(e.target.value))
    }

    // После нажатия Enter
    const onKeyDownPriceValueMin = (e) => {
        if (e.key === 'Enter') {
            const val = validAndSetPriceValue(inputPriceMin)
            valueContext.setFilterPrice({...valueContext.price, valueMin: val})
            valueContext.setShowBtn({isVisible: true, top: 80})
        }
    }

    // После нажатия Enter
    const onKeyDownPriceValueMax = (e) => {
        if (e.key === 'Enter') {
            const val = validAndSetPriceValue(inputPriceMax)
            valueContext.setFilterPrice({...valueContext.price, valueMax: val})
            valueContext.setShowBtn({isVisible: true, top: 80})
        }
    }

    const handleChangeValueMin = v => {
        valueContext.setFilterPrice({...valueContext.price, valueMin: v})
        setInputPriceMin(v)
        valueContext.setShowBtn({isVisible: true, top: 80})
    }

    const handleChangeValueMax = v => {
        valueContext.setFilterPrice({...valueContext.price, valueMax: v})
        setInputPriceMax(v)
        valueContext.setShowBtn({isVisible: true, top: 80})
    }

    // Нажата кнопка 'Очистить фильтры'
    useEffect(() => {
        setInputPriceMin(valueContext.price.limitMin)
        setInputPriceMax(valueContext.price.limitMax)
    }, [valueContext.clearBtn])

    return {
        valueContext,
        inputPriceMax,
        inputPriceMin,
        onChangePriceValueMin,
        onChangePriceValueMax,
        onKeyDownPriceValueMin,
        onKeyDownPriceValueMax,
        handleChangeValueMin,
        handleChangeValueMax
    }
}