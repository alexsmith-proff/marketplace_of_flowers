import { useEffect, useState } from "react"
import { getFilterElementFromFilterBySlug } from "../../../services/core/parse"
import { IFilter, IFilterActiveColor, IFilterContext, IFilterData, IFilterElement, IFilterPrice, IShowFilterButton } from "../../../interfaces/filter.interface"
import { IProductMinMaxPrice } from "../../../interfaces/products.interface"
import { FilterDataType } from "../../../enums/Filter.enum"

const FilterInit = (filter: IFilter, slug: string) => {
    const f = getFilterElementFromFilterBySlug(filter, slug)
    return { ...f, values: f?.values.map((item) => ({ ...item, value: '0' })) }
}

export const useFilter = (filterMinMaxPrice: IProductMinMaxPrice, filter: IFilter, getProductsByFilter: (FilterData: IFilterData[]) => void) => {
    const [price, setPrice] = useState<IFilterPrice>({
        limitMin: filterMinMaxPrice.minPrice,
        limitMax: filterMinMaxPrice.maxPrice,
        valueMin: filterMinMaxPrice.minPrice,
        valueMax: filterMinMaxPrice.maxPrice
    })
    const [color, setColor] = useState<IFilterElement>(() => getFilterElementFromFilterBySlug(filter, 'cveta'))
    const [activeColor, setActiveColor] = useState<IFilterActiveColor>()
    const [diametrFlavor, setDiametrFlavor] = useState<IFilterElement>(() => FilterInit(filter, 'diametr-buketa'))
    const [heightFlavor, setHeightFlavor] = useState<IFilterElement>(() => FilterInit(filter, 'vysota-buketa'))
    const [composition, setComposition] = useState<IFilterElement>(() => FilterInit(filter, 'sostav'))
    const [purpose, setPurpose] = useState<IFilterElement>(() => FilterInit(filter, 'komu'))
    // Состояние триггер кнопки 'Очистить фильтры'
    const [clearBtn, setClearBtn] = useState<boolean>(false)
    // Состояние кнопки 'Показать', isActive - 
    const [showBtn, setShowBtn] = useState<IShowFilterButton>({ isVisible: false, top: 0 })


    const value: IFilterContext = {
        price: price,
        setFilterPrice: setPrice,
        color: color,
        activeColor: activeColor,
        setFilterActiveColor: setActiveColor,
        diametrFlavor: diametrFlavor,
        setFilterDiametrFlavor: setDiametrFlavor,
        heightFlavor: heightFlavor,
        setFilterHeightFlavor: setHeightFlavor,
        composition: composition,
        setFilterComposition: setComposition,
        purpose: purpose,
        setFilterPurpose: setPurpose,
        clearBtn: clearBtn,
        // setFilterClear: setClear
        showBtn: showBtn,
        setShowBtn: setShowBtn,
    }

    useEffect(() => {
        setShowBtn({ ...showBtn, isVisible: true })
    }, [activeColor, diametrFlavor, heightFlavor, composition, purpose])

    // Перевод фильтров в дефолтное состояние
    const handleClearFilter = () => {
        setPrice({ ...price, valueMin: filterMinMaxPrice.minPrice, valueMax: filterMinMaxPrice.maxPrice })
        setActiveColor(null)
        setDiametrFlavor(() => getFilterElementFromFilterBySlug(filter, 'diametr-buketa'))
        setHeightFlavor(() => getFilterElementFromFilterBySlug(filter, 'vysota-buketa'))
        setComposition(() => FilterInit(filter, 'sostav'))
        setPurpose(() => FilterInit(filter, 'komu'))
        // Нажата кнопка 'Очистить фильтры'
        setClearBtn(!clearBtn)
    }

    // Обработчик нажатия на кнопку "Показать"
    const handleShowBtn = () => {
        const filterData: IFilterData[] = []

        if (value.price) filterData.push({
            type: FilterDataType.PriceMinMax,
            nameFilter: 'Цена',
            values: [String(value.price.valueMin), String(value.price.valueMax)]
        })

        if (value.activeColor) filterData.push({
            type: FilterDataType.OneData,
            nameFilter: 'Цвета',
            values: [value.activeColor.name]
        })

        const diametrFlavor = value.diametrFlavor.values.filter(item => +item.value == 1)
        if (diametrFlavor.length > 0) {
            filterData.push({
                type: FilterDataType.ManyData,
                nameFilter: value.diametrFlavor.name,
                values: diametrFlavor.map(item => item.name)
            })
        }

        const heightFlavor = value.heightFlavor.values.filter(item => +item.value == 1)
        if (heightFlavor.length > 0) {
            filterData.push({
                type: FilterDataType.ManyData,
                nameFilter: value.heightFlavor.name,
                values: heightFlavor.map(item => item.name)
            })
        }

        const purpose = value.purpose.values.filter(item => +item.value == 1)
        if (purpose.length > 0) {
            filterData.push({
                type: FilterDataType.ManyData,
                nameFilter: value.purpose.name,
                values: purpose.map(item => item.name)
            })
        }

        getProductsByFilter(filterData)

        setShowBtn({ ...showBtn, isVisible: false })
    }
    return { value, handleClearFilter, handleShowBtn }
}