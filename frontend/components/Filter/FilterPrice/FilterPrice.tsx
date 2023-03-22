import classNames from "classnames"
import { FC, useState } from "react"
import { IProductMinMaxPrice } from "../../../interfaces/products.interface"
import s from './FilterPrice.module.scss'

interface FilterPriceProps {
    filterPriceMinMaxPrice: IProductMinMaxPrice
}

const FilterPrice: FC<FilterPriceProps> = ({ filterPriceMinMaxPrice }) => {
    const [minPriceValue, setMinPriceValue] = useState(100)

    const handleChangeRange = e => {
        console.log('jyhgjhgvj');

        setMinPriceValue(e.target.value)

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
                    <input type={'range'} min={filterPriceMinMaxPrice.minPrice} max={filterPriceMinMaxPrice.maxPrice} value={minPriceValue} onChange={e => handleChangeRange(e)} />
                </div>
                <input type={'range'} min={5} max={50} />
                {/* <input className={classNames(s.rangeMax, s.range)} type="range" min={filterPriceMinMaxPrice.minPrice} max={filterPriceMinMaxPrice.maxPrice} value={filterPriceMinMaxPrice.maxPrice} step="1" /> */}
            </div>
            <div className={s.label}>
                <div className={s.labelItem}>от <span>{filterPriceMinMaxPrice.minPrice} ₽</span></div>
                <div className={s.labelItem}>от <span>{filterPriceMinMaxPrice.maxPrice} ₽</span></div>
            </div>
        </div>
    )
}

export default FilterPrice