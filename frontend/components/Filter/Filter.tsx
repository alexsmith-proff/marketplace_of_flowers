import { FC, useState } from "react"
import FilterContext from "../../context/filter-context"
import { IProductMinMaxPrice } from "../../interfaces/products.interface"
import s from './Filter.module.scss'
import FilterPrice from "./FilterPrice/FilterPrice"

interface FilterProps {
    filterMinMaxPrice: IProductMinMaxPrice
}

const Filter: FC<FilterProps> = ({ filterMinMaxPrice }) => {
    const [minMaxPrice, setMinMaxPrice] = useState<IProductMinMaxPrice>(filterMinMaxPrice)
    // const setPrice = (minMax: IProductMinMaxPrice) => setMinMaxPrice({ ...minMaxPrice, minPrice: minMax.minPrice, maxPrice: minMax.maxPrice })



    const value = {
        minMaxPrice: minMaxPrice,
        setPrice: setMinMaxPrice,
    }

    return (
        <div className="container">
            <div className={s.wrap}>
                <FilterContext.Provider value={value}>
                    <FilterPrice />
                </FilterContext.Provider>
            </div>
        </div>
    )
}

export default Filter