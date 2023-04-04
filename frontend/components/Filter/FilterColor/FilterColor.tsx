import { FC, useContext, useEffect, useState } from "react"
import FilterContext from "../../../context/filter-context"
import { IFilterElement, IFilterValue } from "../../../interfaces/filter.interface"
import { getFilterElementFromFilterBySlug } from "../../../services/core/parse"
import RadioButton from "../../Elements/RadioButton/RadioButton"
import { IActiveColor, IFilterContext } from "../Filter"
import FilterSeparateLine from "../FilterSeparateLine/FilterSeparateLine"
import FilterTitle from "../FilterTitle/FilterTitle"
import s from './FilterColor.module.scss'

interface FilterColorProps {}

const FilterColor: FC<FilterColorProps> = ({ }) => {
    const value: IFilterContext = useContext(FilterContext)
    // const [filterColor, setFilterColor] = useState<IFilterElement>()
    // const [activeColor, setActiveColor] = useState<IActiveColor>(null)

    // useEffect(() => {
    //     const filterItem = getFilterElementFromFilterBySlug(value.filter, 'cveta')
    //     setFilterColor(filterItem)

    // }, [])

    const HandleClickRadioButton = (item: IActiveColor) => {
        value.setFilterActiveColor(item)
        // setActiveColor(item)        
    }

    return (
        <div className={s.block}>
            <FilterTitle title="Цвета" />
            <ul className={s.list}>
                {
                    value.color?.values.map((item, index) => <RadioButton color={item.value} active={index === value.activeColor?.index ? true : false} key={item.id} onClickBut={() => HandleClickRadioButton({...item, index})} />)
                }
            </ul>

            <FilterSeparateLine />

        </div>
    )
}

export default FilterColor