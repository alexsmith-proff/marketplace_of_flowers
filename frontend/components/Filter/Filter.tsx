import { FC, useState } from "react"
import FilterContext from "../../context/filter-context"
import { IFilter } from "../../interfaces/filter.interface"
import { IProductMinMaxPrice } from "../../interfaces/products.interface"
import FilterColor from "./FilterColor/FilterColor"
import FilterPrice from "./FilterPrice/FilterPrice"
import FilterSize from "./FilterSize/FilterSize"

import s from './Filter.module.scss'
import FilterCheckBox from "./FilterCheckBox/FilterCheckBox"

interface FilterProps {
    filterMinMaxPrice: IProductMinMaxPrice
    filter: IFilter
}

const Filter: FC<FilterProps> = ({ filterMinMaxPrice, filter }) => {
    const [minMaxPrice, setMinMaxPrice] = useState<IProductMinMaxPrice>(filterMinMaxPrice)

    const value = {
        minMaxPrice: minMaxPrice,
        setPrice: setMinMaxPrice,
        filter: filter,
    }

    return (
        <div className="container">
            <div className={s.wrap}>
                <FilterContext.Provider value={value}>
                    <FilterPrice />
                    <FilterColor />
                    <FilterSize />
                    <FilterCheckBox filterName="Состав" filterSlug="sostav" />
                    <FilterCheckBox filterName="Кому" filterSlug="komu" separateLine={false} />
                </FilterContext.Provider>
            </div>
            <div className={s.button}>Очистить фильтры</div>
        </div>
    )
}

export default Filter