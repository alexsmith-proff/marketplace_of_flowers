import { FC, useContext, useEffect, useState } from "react"
import FilterContext from "../../../context/filter-context"
import { IFilterElement, IFilterValue } from "../../../interfaces/filter.interface"
import { getFilterElementFromFilterBySlug } from "../../../services/core/parse"
import RadioButton from "../../Elements/RadioButton/RadioButton"
import FilterSeparateLine from "../FilterSeparateLine/FilterSeparateLine"
import FilterTitle from "../FilterTitle/FilterTitle"
import s from './FilterColor.module.scss'

export interface IActiveColor extends IFilterValue {
    index: number
 }

interface FilterColorProps {}

const FilterColor: FC<FilterColorProps> = ({ }) => {
    const value = useContext(FilterContext)
    const [filterColor, setFilterColor] = useState<IFilterElement>()
    const [activeColor, setActiveColor] = useState<IActiveColor>(null)

    useEffect(() => {
        const filterItem = getFilterElementFromFilterBySlug(value.filter, 'cveta')
        setFilterColor(filterItem)

    }, [])

    const HandleClickRadioButton = (item: IActiveColor) => {
        setActiveColor(item)        
    }

    return (
        <div className={s.block}>
            <FilterTitle title="Цвета" />
            <ul className={s.list}>
                {
                    filterColor?.values.map((item, index) => <RadioButton color={item.value} active={index === activeColor?.index ? true : false} key={item.id} onClickBut={() => HandleClickRadioButton({...item, index})} />)
                }
            </ul>

            <FilterSeparateLine />

        </div>
    )
}

export default FilterColor