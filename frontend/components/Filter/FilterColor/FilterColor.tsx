import { FC, useContext, useEffect, useState } from "react"
import FilterContext from "../../../context/filter-context"
import RadioButton from "../../Elements/RadioButton/RadioButton"
import { IActiveColor, IFilterContext } from "../Filter"
import FilterSeparateLine from "../FilterSeparateLine/FilterSeparateLine"
import FilterTitle from "../FilterTitle/FilterTitle"
import s from './FilterColor.module.scss'

interface FilterColorProps {}

const FilterColor: FC<FilterColorProps> = ({ }) => {
    const valueContext: IFilterContext = useContext(FilterContext)

    const HandleClickRadioButton = (item: IActiveColor) => {
        valueContext.setFilterActiveColor(item)
        valueContext.setShowBtn({isVisible: true, top: 220})
    }

    return (
        <div className={s.block}>
            <FilterTitle title="Цвета" />
            <ul className={s.list}>
                {
                    valueContext.color?.values.map((item, index) => <RadioButton color={item.value} active={index === valueContext.activeColor?.index ? true : false} key={item.id} onClickBut={() => HandleClickRadioButton({...item, index})} />)
                }
            </ul>

            <FilterSeparateLine />

        </div>
    )
}

export default FilterColor