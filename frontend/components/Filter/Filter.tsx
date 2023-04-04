import { FC, useState } from "react"
import FilterContext from "../../context/filter-context"
import FilterPrice from "./FilterPrice/FilterPrice"
import FilterColor from "./FilterColor/FilterColor"
import FilterSize from "./FilterSize/FilterSize"
import FilterComposition from "./FilterComposition/FilterComposition"
import FilterPurpose from "./FilterPurpose/FilterPurpose"
import { IProductMinMaxPrice } from "../../interfaces/products.interface"
import { IFilter, IFilterElement, IFilterValue } from "../../interfaces/filter.interface"

import { getFilterElementFromFilterBySlug } from "../../services/core/parse"

import s from './Filter.module.scss'

export interface IActiveColor extends IFilterValue {
    index: number
 }

export interface IFilterContext {
    minMaxPrice: IProductMinMaxPrice
    setFilterPrice: any
    color: IFilterElement
    // setFilterColor: any
    activeColor: IActiveColor
    setFilterActiveColor: any
    diametrFlavor: IFilterElement
    setFilterDiametrFlavor: any
    heightFlavor: IFilterElement
    setFilterHeightFlavor: any
    composition: IFilterElement
    setFilterComposition: any
    purpose: IFilterElement,
    setFilterPurpose: any,
}

interface FilterProps {
    filterMinMaxPrice: IProductMinMaxPrice
    filter: IFilter
}
const FilterInit = (filter: IFilter, slug: string) => {
    const f = getFilterElementFromFilterBySlug(filter, slug)
    return { ...f, values: f?.values.map((item) => ({ ...item, value: '0' })) }
}

const Filter: FC<FilterProps> = ({ filterMinMaxPrice, filter }) => {
    const [minMaxPrice, setMinMaxPrice] = useState<IProductMinMaxPrice>(filterMinMaxPrice)
    const [color, setColor] = useState<IFilterElement>(() => getFilterElementFromFilterBySlug(filter, 'cveta'))
    const [activeColor, setActiveColor] = useState<IActiveColor>()
    const [diametrFlavor, setDiametrFlavor] = useState<IFilterElement>(() => FilterInit(filter, 'diametr-buketa'))
    const [heightFlavor, setHeightFlavor] = useState<IFilterElement>(() => FilterInit(filter, 'vysota-buketa'))
    const [composition, setComposition] = useState<IFilterElement>(() => FilterInit(filter, 'sostav'))
    const [purpose, setPurpose] = useState<IFilterElement>(() => FilterInit(filter, 'komu'))


    const value: IFilterContext = {
        minMaxPrice: minMaxPrice,
        setFilterPrice: setMinMaxPrice,
        color: color,
        // setFilterColor: setColor,
        activeColor: activeColor,
        setFilterActiveColor: setActiveColor,
        diametrFlavor: diametrFlavor,
        setFilterDiametrFlavor: setDiametrFlavor,
        heightFlavor: heightFlavor,
        setFilterHeightFlavor: setHeightFlavor,
        composition: composition,
        setFilterComposition: setComposition,
        purpose: purpose,
        setFilterPurpose: setPurpose
    }

    // console.log('diametrFlavordddd', diametrFlavor, heightFlavor, composition, purpose);
    // console.log(activeColor);
    

    // Перевод фильтров в дефолтное состояние
    const handleFilter = () => {
        value.setFilterPrice(filterMinMaxPrice)   
        setActiveColor(null)     
        setDiametrFlavor(() => getFilterElementFromFilterBySlug(filter, 'diametr-buketa'))
        setHeightFlavor(() => getFilterElementFromFilterBySlug(filter, 'vysota-buketa'))
        setComposition(() => FilterInit(filter, 'sostav'))
        setPurpose(() => FilterInit(filter, 'komu'))
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
                </FilterContext.Provider>
            </div>
            <div className={s.button} onClick={handleFilter}>Очистить фильтры</div>
        </div>
    )
}

export default Filter