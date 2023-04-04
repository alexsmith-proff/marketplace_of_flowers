import { FC, useContext, useState, useEffect } from "react"
import FilterContext from "../../../context/filter-context"
import FilterTitle from "../FilterTitle/FilterTitle"
import RangeSlider from "../../Elements/RangeSlider/RangeSlider"
import FilterSeparateLine from "../FilterSeparateLine/FilterSeparateLine"
import { IFilterContext } from "../Filter"

import s from './FilterPrice.module.scss'


interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const value: IFilterContext = useContext(FilterContext)

    const [inputPriceMax, setInputPriceMax] = useState<number>(value.price.limitMax)
    const [inputPriceMin, setInputPriceMin] = useState<number>(value.price.limitMin)

    // Валидация val
    const validAndSetPriceValue = val => {
        if (val >= value.price.limitMax) val = value.price.limitMax
        if (val <= value.price.limitMin) val = value.price.limitMin
        return val
    }

    const onChangePriceValueMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPriceMin(Number(e.target.value))
    }

    const onChangePriceValueMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPriceMax(Number(e.target.value))
    }

    // После нажатия Enter
    const onKeyDownPriceValueMin = (e) => {
        if (e.key === 'Enter') {
            const val = validAndSetPriceValue(inputPriceMin)
            value.setFilterPrice({...value.price, valueMin: val})
        }
    }

    // После нажатия Enter
    const onKeyDownPriceValueMax = (e) => {
        console.log('1');        
        if (e.key === 'Enter') {
            const val = validAndSetPriceValue(inputPriceMax)
            value.setFilterPrice({...value.price, valueMax: val})
        }
    }

    const handleChangeValueMin = v => {
        value.setFilterPrice({...value.price, valueMin: v})
        setInputPriceMin(v)
    }

    const handleChangeValueMax = v => {
        value.setFilterPrice({...value.price, valueMax: v})
        setInputPriceMax(v)
    }

    // Нажата кнопка 'Очистить фильтры'
    useEffect(() => {
        setInputPriceMin(value.price.limitMin)
        setInputPriceMax(value.price.limitMax)
    }, [value.clearBtn])


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
                    minValueTrack={value.price.limitMin}
                    maxValueTrack={value.price.limitMax}
                    valueMin={value.price.valueMin}
                    valueMax={value.price.valueMax}
                    changeValueMin={handleChangeValueMin}
                    changeValueMax={handleChangeValueMax}
                />
            </div>
            <div className={s.label}>
                <div className={s.labelItem}>от <span>{value.price.limitMin} ₽</span></div>
                <div className={s.labelItem}>от <span>{value.price.limitMax} ₽</span></div>
            </div>
            <FilterSeparateLine />

        </div>
    )
}

export default FilterPrice