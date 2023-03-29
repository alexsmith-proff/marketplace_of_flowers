import classNames from "classnames"
import { FC, useContext, useState } from "react"
import FilterContext from "../../../context/filter-context"
import RangeSlider from "../../Elements/RangeSlider/RangeSlider"
import s from './FilterPrice.module.scss'

interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const value = useContext(FilterContext)
    const [priceValueMax, setPriceValueMax] = useState(value.minMaxPrice.maxPrice)
    const [priceValueMin, setPriceValueMin] = useState(value.minMaxPrice.minPrice)


    const handleChangeValueMax = v => {
        setPriceValueMax(v)
    }

    const handleChangeValueMin = v => {
        setPriceValueMin(v)
    }

    const onChangePriceValueMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('onChangePriceValueMin');
        setPriceValueMin(e.target.value)
    }
    const onChangePriceValueMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('onChangePriceValueMax');
        setPriceValueMax(e.target.value)
    }


    // console.log('valueeee', value);

    return (
        <div>
            <h3 className={s.title}>Цена</h3>
            <div className={s.inputWrap}>
                <input className={s.input} type="text" value={priceValueMin} onChange={onChangePriceValueMin} />
                <input className={s.input} type="text" value={priceValueMax} onChange={onChangePriceValueMax} />
            </div>
            <div className={s.RangeSlider}>
                <RangeSlider
                    widthTrack={240}
                    heightTrack={3}
                    colorTrack="#D0D2D7"
                    colorProgressTrack="#0093A2"
                    widthThumb={20}
                    heightThumb={20}
                    colorThumb="#FFFFFF"
                    borderThumb="3px solid #0093A2"
                    dualThumb={true}
                    minValueTrack={value.minMaxPrice.minPrice}
                    maxValueTrack={value.minMaxPrice.maxPrice}
                    valueMax={priceValueMax}
                    valueMin={priceValueMin}
                    changeValueMax={handleChangeValueMax}
                    changeValueMin={handleChangeValueMin} />
            </div>
            <div className={s.label}>
                <div className={s.labelItem}>от <span>{value.minMaxPrice.minPrice} ₽</span></div>
                <div className={s.labelItem}>от <span>{value.minMaxPrice.maxPrice} ₽</span></div>
            </div>
        </div>
    )
}

export default FilterPrice