import classNames from "classnames"
import { FC, useContext, useState } from "react"
import FilterContext from "../../../context/filter-context"
import RangeSlider from "../../Elements/RangeSlider/RangeSlider"
import FilterSeparateLine from "../FilterSeparateLine/FilterSeparateLine"
import FilterTitle from "../FilterTitle/FilterTitle"
import s from './FilterPrice.module.scss'

interface IPrice {
    inputValue: number,
    value: number
}

interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const value = useContext(FilterContext)

    const [priceValueMax, setPriceValueMax] = useState<IPrice>({
        inputValue: value.minMaxPrice.maxPrice,
        value: value.minMaxPrice.maxPrice
    })
    const [priceValueMin, setPriceValueMin] = useState<IPrice>({
        inputValue: value.minMaxPrice.minPrice,
        value: value.minMaxPrice.minPrice
    })


    // Валидация val
    const validAndSetPriceValue = val => {
        if (val >= value.minMaxPrice.maxPrice) val = value.minMaxPrice.maxPrice
        if (val <= value.minMaxPrice.minPrice) val = value.minMaxPrice.minPrice
        return val
    }




    const onChangePriceValueMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceValueMin({ ...priceValueMin, inputValue: Number(e.target.value) })
    }

    const onChangePriceValueMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(value.minMaxPrice.maxPrice);
        setPriceValueMax({ ...priceValueMax, inputValue: Number(e.target.value) })
    }

    // После нажатия Enter
    const onKeyDownPriceValueMin = (e) => {

        if (e.key === 'Enter') {
            const val = validAndSetPriceValue(priceValueMin.inputValue)
            setPriceValueMin({ ...priceValueMin, inputValue: val, value: val })
        }
    }

    // После нажатия Enter
    const onKeyDownPriceValueMax = (e) => {
        if (e.key === 'Enter') {
            let val = validAndSetPriceValue(priceValueMax.inputValue)
            setPriceValueMax({ ...priceValueMax, inputValue: val, value: val })
        }
    }

    const handleChangeValueMin = v => {
        setPriceValueMin({ inputValue: v, value: v })
    }

    const handleChangeValueMax = v => {
        setPriceValueMax({ inputValue: v, value: v })
    }

    // console.log('priceValueMax', priceValueMax);


    return (
        <div>
            <FilterTitle title="Цена" />
            <div className={s.inputWrap}>
                <input className={s.input} type="text" value={priceValueMin.inputValue} onChange={onChangePriceValueMin} onKeyDown={onKeyDownPriceValueMin} />
                <input className={s.input} type="text" value={priceValueMax.inputValue} onChange={onChangePriceValueMax} onKeyDown={onKeyDownPriceValueMax} />
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
                    valueMin={priceValueMin.value}
                    valueMax={priceValueMax.value}
                    changeValueMin={handleChangeValueMin}
                    changeValueMax={handleChangeValueMax}
                />
            </div>
            <div className={s.label}>
                <div className={s.labelItem}>от <span>{value.minMaxPrice.minPrice} ₽</span></div>
                <div className={s.labelItem}>от <span>{value.minMaxPrice.maxPrice} ₽</span></div>
            </div>
            <FilterSeparateLine />

        </div>
    )
}

export default FilterPrice