import classNames from "classnames"
import { FC, useContext, useState } from "react"
import FilterContext from "../../../context/filter-context"
import s from './FilterPrice.module.scss'

interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const value = useContext(FilterContext)
    // const [minPriceValue, setMinPriceValue] = useState(100)

    const handleChangeRange = e => {
        // console.log('jyhgjhgvj');

        // setMinPriceValue(e.target.value)

    }

    console.log('valueeee', value);

    return (
        <div>
            <h3 className={s.title}>Цена</h3>
            <div className={s.inputWrap}>
                <input className={s.input} type="text" />
                <input className={s.input} type="text" />
            </div>
            <div className={s.rangeInput}>
                
            <input className={s.inp} min="500" max="50000" step="500" type="range" />
            <input className={s.inp} min="100" max="2500" step="50" type="range" />
            {/* <input min="500" max="50000" step="500" type="range" /> */}

                

                {/* <input className={s.range} type={'range'} min={1} max={10} /> */}
                {/* <input className={s.range} type={'range'} min={5} max={50} /> */}
                {/* <input className={classNames(s.rangeMax, s.range)} type="range" min={filterPriceMinMaxPrice.minPrice} max={filterPriceMinMaxPrice.maxPrice} value={filterPriceMinMaxPrice.maxPrice} step="1" /> */}
            </div>
            <div className={s.label}>
                <div className={s.labelItem}>от <span>{value.minMaxPrice.minPrice} ₽</span></div>
                <div className={s.labelItem}>от <span>{value.minMaxPrice.maxPrice} ₽</span></div>
            </div>
        </div>
    )
}

export default FilterPrice