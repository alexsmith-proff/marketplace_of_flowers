import { FC } from "react"
import RadioButton from "../../../UI/RadioButton/RadioButton"
import FilterTitle from "../FilterTitle/FilterTitle"
import SeparateLine from "../../../UI/SeparateLine/SeparateLine"
import { useFilterColor } from "./hooks/useFilterColor"

import s from './FilterColor.module.scss'

interface FilterColorProps {}

const FilterColor: FC<FilterColorProps> = ({ }) => {
    const {valueContext, HandleClickRadioButton} = useFilterColor()

    return (
        <div className={s.block}>
            <FilterTitle title="Цвета" />
            <ul className={s.list}>
                {
                    valueContext.color?.values.map((item, index) => <RadioButton color={item.value} active={index === valueContext.activeColor?.index ? true : false} key={item.id} onClickBut={() => HandleClickRadioButton({...item, index})} />)
                }
            </ul>
            <SeparateLine />
        </div>
    )
}

export default FilterColor