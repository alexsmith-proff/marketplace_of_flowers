import { FC } from "react"
import FilterTitle from "../FilterTitle/FilterTitle"
import FilterSeparateLine from "../FilterSeparateLine/FilterSeparateLine"
import RangeSlider from "../../../UI/RangeSlider/RangeSlider"
import { useFilterPrice } from "./hooks/useFilterPrice"

import s from './FilterPrice.module.scss'


interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const { valueContext, inputPriceMax, inputPriceMin,onChangePriceValueMin, onChangePriceValueMax, onKeyDownPriceValueMin, onKeyDownPriceValueMax, handleChangeValueMin, handleChangeValueMax} = useFilterPrice()

    return (
        <div>
            <FilterTitle title="Цена" />
            <div className={s.inputWrap}>
                <input className={s.input} type="text" value={inputPriceMin} onChange={onChangePriceValueMin} onKeyDown={onKeyDownPriceValueMin} />
                <input className={s.input} type="text" value={inputPriceMax} onChange={onChangePriceValueMax} onKeyDown={onKeyDownPriceValueMax} />
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
                    minValueTrack={valueContext.price.limitMin}
                    maxValueTrack={valueContext.price.limitMax}
                    valueMin={valueContext.price.valueMin}
                    valueMax={valueContext.price.valueMax}
                    changeValueMin={handleChangeValueMin}
                    changeValueMax={handleChangeValueMax}
                />
            </div>
            <div className={s.label}>
                <div className={s.labelItem}>от <span>{valueContext.price.limitMin} ₽</span></div>
                <div className={s.labelItem}>от <span>{valueContext.price.limitMax} ₽</span></div>
            </div>
            <FilterSeparateLine />

        </div>
    )
}

export default FilterPrice