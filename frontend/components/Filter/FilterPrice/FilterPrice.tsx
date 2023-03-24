import classNames from "classnames"
import { FC, useContext, useState } from "react"
import s from './FilterPrice.module.scss'

interface FilterPriceProps {}

const FilterPrice: FC<FilterPriceProps> = ({}) => {
    // const value = useContext()
    // const [minPriceValue, setMinPriceValue] = useState(100)

    const handleChangeRange = e => {
        // console.log('jyhgjhgvj');

        // setMinPriceValue(e.target.value)

    }
    return (
        <div>
            <h3 className={s.title}>Цена</h3>
            <div className={s.inputWrap}>
                <input className={s.input} type="text" />
                <input className={s.input} type="text" />
            </div>
            <div className={s.rangeInput}>
                <div className={'range'}>
                    {/* <input type={'range'} min={value} max={} value={} onChange={e => handleChangeRange(e)} /> */}
                </div>
                <input type={'range'} min={5} max={50} />
                {/* <input className={classNames(s.rangeMax, s.range)} type="range" min={filterPriceMinMaxPrice.minPrice} max={filterPriceMinMaxPrice.maxPrice} value={filterPriceMinMaxPrice.maxPrice} step="1" /> */}
            </div>
            <div className={s.label}>
                {/* <div className={s.labelItem}>от <span>{minMaxPrice.minPrice} ₽</span></div> */}
                {/* <div className={s.labelItem}>от <span>{minMaxPrice.maxPrice} ₽</span></div> */}
            </div>
        </div>
    )
}

export default FilterPrice