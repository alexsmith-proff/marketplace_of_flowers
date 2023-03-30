import { FC } from "react"
import s from './FilterSeparateLine.module.scss'

interface FilterSeparateLineProps {}

const FilterSeparateLine: FC<FilterSeparateLineProps> = ({  }) => {
    return (
        <div className={s.line}></div>
    )
}

export default FilterSeparateLine