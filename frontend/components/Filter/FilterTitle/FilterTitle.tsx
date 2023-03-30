import { FC } from "react"
import s from './FilterTitle.module.scss'

interface FilterTitleProps {
    title: string
 }

const FilterTitle: FC<FilterTitleProps> = ({ title }) => {
    return (
        <h3 className={s.title}>{title}</h3>
    )
}

export default FilterTitle