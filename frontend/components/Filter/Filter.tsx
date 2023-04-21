import { FC, useEffect, useState } from "react"
import FilterContext from "../../context/filter-context"
import FilterPrice from "./FilterPrice/FilterPrice"
import FilterColor from "./FilterColor/FilterColor"
import FilterSize from "./FilterSize/FilterSize"
import FilterComposition from "./FilterComposition/FilterComposition"
import FilterPurpose from "./FilterPurpose/FilterPurpose"
import { IProductMinMaxPrice } from "../../interfaces/products.interface"
import { IFilter, IFilterActiveColor, IFilterContext, IFilterElement, IFilterPrice, IFilterValue, IShowFilterButton } from "../../interfaces/filter.interface"

import { getFilterElementFromFilterBySlug } from "../../services/core/parse"

import s from './Filter.module.scss'
import FilterShowBtn from "../Elements/Buttons/FilterShowBtn/FilterShowBtn"


interface FilterProps {
    filterMinMaxPrice: IProductMinMaxPrice
    filter: IFilter
}
const FilterInit = (filter: IFilter, slug: string) => {
    const f = getFilterElementFromFilterBySlug(filter, slug)
    return { ...f, values: f?.values.map((item) => ({ ...item, value: '0' })) }
}

const Filter: FC<FilterProps> = ({ filterMinMaxPrice, filter }) => {
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
        setShowBtn({...showBtn, isVisible: true})
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
        console.log('Обработчик нажатия на кнопку "Показать"');
        setShowBtn({...showBtn, isVisible: false})
    }


    return (
        <div className="container">
            <div className={s.wrap}>
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