import classNames from "classnames"
import { FC, useContext, useState } from "react"
import FilterContext from "../../../context/filter-context"
import RangeSlider from "../../Elements/RangeSlider/RangeSlider"
import s from './FilterPrice.module.scss'

interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const value = useContext(FilterContext)
    const [priceValue, setPriceValue] = useState(15000)


    const handleChangeValue = v => {
        setPriceValue(v)
    }
    const ch = e => {
        setPriceValue(e.target.value)
    }

    console.log('valueeee', value);

    return (
        <div>
            <div className={s.rangeInput}>
                <div>{priceValue}</div>
                <RangeSlider value={priceValue} changeValue={handleChangeValue}/>
            </div>
        </div>
    )
}

export default FilterPrice