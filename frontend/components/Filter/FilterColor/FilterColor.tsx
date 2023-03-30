import { FC, useContext } from "react"
import FilterContext from "../../../context/filter-context"
import RadioButton from "../../Elements/RangeSlider/RadioButton/RadioButton"
import FilterTitle from "../FilterTitle/FilterTitle"
import s from './FilterColor.module.scss'

interface FilterColorProps {}

const FilterColor: FC<FilterColorProps> = ({  }) => {
    const value = useContext(FilterContext)

    return (
        <div className={s.block}>
            <FilterTitle title="Цвета" />
            {
                value.filter.elements.map((item, ind) => <RadioButton color="#ffffff" key={ind}/>)
            }
            
        </div>
    )
}

export default FilterColor