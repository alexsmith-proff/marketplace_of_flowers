import { FC, useEffect, useState } from "react"
import FilterContext from "../../context/filter-context"
import FilterPrice from "./FilterPrice/FilterPrice"
import FilterColor from "./FilterColor/FilterColor"
import FilterSize from "./FilterSize/FilterSize"
import FilterComposition from "./FilterComposition/FilterComposition"
import FilterPurpose from "./FilterPurpose/FilterPurpose"
import { IProductMinMaxPrice } from "../../interfaces/products.interface"
import { IFilter, IFilterActiveColor, IFilterContext, IFilterData, IFilterElement, IFilterPrice, IShowFilterButton } from "../../interfaces/filter.interface"

import { getFilterElementFromFilterBySlug } from "../../services/core/parse"

import FilterShowBtn from "../Elements/Buttons/FilterShowBtn/FilterShowBtn"
import { FilterDataType } from "../../enums/Filter.enum"

import s from './Filter.module.scss'

interface FilterProps {
    filterMinMaxPrice: IProductMinMaxPrice
    filter: IFilter
    getProductsByFilter: (FilterData: IFilterData[]) => void
}
const FilterInit = (filter: IFilter, slug: string) => {
    const f = getFilterElementFromFilterBySlug(filter, slug)
    return { ...f, values: f?.values.map((item) => ({ ...item, value: '0' })) }
}

const Filter: FC<FilterProps> = ({ filterMinMaxPrice, filter, getProductsByFilter }) => {
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


    return (
        <div className={s.wrap}>
            <div className={s.filter}>
                <FilterContext.Provider value={value}>
                    <FilterPrice />
                    <FilterColor />
                    <FilterSize />
                    <FilterComposition />
                    <FilterPurpose />
                    <FilterShowBtn visible={showBtn.isVisible} onClick={handleShowBtn}>Показать</FilterShowBtn>
                </FilterContext.Provider>
            </div>
            <div className={s.button} onClick={handleClearFilter}>Очистить фильтры</div>
        </div>
    )
}

export default Filter