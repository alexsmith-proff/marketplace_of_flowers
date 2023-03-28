import classNames from "classnames"
import { FC, useContext, useState } from "react"
import FilterContext from "../../../context/filter-context"
import RangeSlider from "../../Elements/RangeSlider/RangeSlider"
import s from './FilterPrice.module.scss'

interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const value = useContext(FilterContext)
    const [priceValue, setPriceValue] = useState(0)


    const handleChangeValue = v => {
        setPriceValue(v)

        // console.log('jyhgjhgvj');

        // setMinPriceValue(e.target.value)

    }
    const ch = e => {
        setPriceValue(e.target.value)
    }

    console.log('valueeee', value);

    return (
        <div>
            <div className={s.rangeInput}>
                <div>{priceValue}</div>
                <RangeSlider changeValue={handleChangeValue}/>
                {/* <RangeSlider /> */}
                {/* <input type="range" min={0} max={200} value={priceValue} onChange={ch} /> */}
            </div>
        </div>
    )
}

export default FilterPrice