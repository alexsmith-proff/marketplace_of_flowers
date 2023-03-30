import { FC, useState } from "react"
import FilterContext from "../../context/filter-context"
import { IFilter } from "../../interfaces/filter.interface"
import { IProductMinMaxPrice } from "../../interfaces/products.interface"
import s from './Filter.module.scss'
import FilterColor from "./FilterColor/FilterColor"
import FilterPrice from "./FilterPrice/FilterPrice"
import FilterSize from "./FilterSize/FilterSize"

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
                </FilterContext.Provider>
            </div>
        </div>
    )
}

export default Filter