import { FC } from "react"
import { IProductMinMaxPrice } from "../../interfaces/products.interface"
import s from './Filter.module.scss'
import FilterPrice from "./FilterPrice/FilterPrice"

interface FilterProps {
    filterMinMaxPrice: IProductMinMaxPrice
}

const Filter: FC<FilterProps> = ({ filterMinMaxPrice }) => {
    return (
        <div className="container">
            <div className={s.wrap}>
                <FilterPrice filterPriceMinMaxPrice={filterMinMaxPrice} />
            </div>
        </div>
    )
}

export default Filter