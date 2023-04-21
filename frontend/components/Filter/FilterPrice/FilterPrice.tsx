import { FC, useContext, useState, useEffect } from "react"
import FilterContext from "../../../context/filter-context"
import FilterTitle from "../FilterTitle/FilterTitle"
import RangeSlider from "../../Elements/RangeSlider/RangeSlider"
import FilterSeparateLine from "../FilterSeparateLine/FilterSeparateLine"

import s from './FilterPrice.module.scss'
import { IFilterContext } from "../../../interfaces/filter.interface"


interface FilterPriceProps { }

const FilterPrice: FC<FilterPriceProps> = ({ }) => {
    const valueContext: IFilterContext = useContext(FilterContext)

    const [inputPriceMax, setInputPriceMax] = useState<number>(valueContext.price.limitMax)
    const [inputPriceMin, setInputPriceMin] = useState<number>(valueContext.price.limitMin)

    // Валидация val
    const validAndSetPriceValue = val => {
        if (val >= valueContext.price.limitMax) val = valueContext.price.limitMax
        if (val <= valueContext.price.limitMin) val = valueContext.price.limitMin
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
            valueContext.setFilterPrice({...valueContext.price, valueMin: val})
            valueContext.setShowBtn({isVisible: true, top: 80})
        }
    }

    // После нажатия Enter
    const onKeyDownPriceValueMax = (e) => {
        console.log('1');        
        if (e.key === 'Enter') {
            const val = validAndSetPriceValue(inputPriceMax)
            valueContext.setFilterPrice({...valueContext.price, valueMax: val})
            valueContext.setShowBtn({isVisible: true, top: 80})
        }
    }

    const handleChangeValueMin = v => {
        valueContext.setFilterPrice({...valueContext.price, valueMin: v})
        setInputPriceMin(v)
        valueContext.setShowBtn({isVisible: true, top: 80})
    }

    const handleChangeValueMax = v => {
        valueContext.setFilterPrice({...valueContext.price, valueMax: v})
        setInputPriceMax(v)
        valueContext.setShowBtn({isVisible: true, top: 80})
    }

    // Нажата кнопка 'Очистить фильтры'
    useEffect(() => {
        setInputPriceMin(valueContext.price.limitMin)
        setInputPriceMax(valueContext.price.limitMax)
    }, [valueContext.clearBtn])


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