import classNames from "classnames"
import { FC, useContext, useState } from "react"
import FilterContext from "../../../context/filter-context"
import RangeSlider from "../../Elements/RangeSlider/RangeSlider"
import s from './FilterPrice.module.scss'

interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const value = useContext(FilterContext)
    const [priceValueMax, setPriceValueMax] = useState(35000)
    const [priceValueMin, setPriceValueMin] = useState(3000)


    const handleChangeValueMax = v => {
        setPriceValueMax(v)
    }

    const handleChangeValueMin = v => {
        setPriceValueMin(v)
    }


    console.log('valueeee', value);

    return (
        <div>
            <div className={s.rangeInput}>
                <div>{priceValueMax}</div>
                <RangeSlider valueMax={priceValueMax} valueMin={priceValueMin} changeValueMax={handleChangeValueMax} changeValueMin={handleChangeValueMin}/>
                <div>{priceValueMin}</div>
            </div>
        </div>
    )
}

export default FilterPrice