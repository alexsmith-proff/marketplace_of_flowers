import { FC, useContext, useState, useEffect } from 'react'
import FilterContext from '../../../context/filter-context'
import { IFilterElement, IFilterValue } from '../../../interfaces/filter.interface'
import { getFilterElementFromFilterBySlug } from '../../../services/core/parse'
import CheckBox from '../../Elements/CheckBox/CheckBox'
import FilterTitle from '../FilterTitle/FilterTitle'

import s from './FilterCheckBox.module.scss'

interface FilterCheckBoxProps {
    filterName: string
    filterSlug: string
}

const FilterCheckBox: FC<FilterCheckBoxProps> = ({ filterName, filterSlug }) => {
    const value = useContext(FilterContext)

    const [filterElement, setFilterElement] = useState<IFilterElement>()

    useEffect(() => {
        const element = getFilterElementFromFilterBySlug(value.filter, filterSlug)
        setFilterElement({ ...element, values: element?.values.map((item) => ({ ...item, value: '0' })) })
    }, [])

    const handleChangeCheckBoxFilterElement = (itemValue: IFilterValue) => {
        setFilterElement({
            ...filterElement, values: filterElement.values.map((item) => (
                item.id === itemValue.id ? (item.value == '0' ? { ...item, value: '1' } : { ...item, value: '0' }) : item
            )
            )
        })
    }

    return (
        <div className={s.block}>
            <FilterTitle title={filterName} />
            <ul className={s.list}>
                {
                    filterElement?.values?.map((item) => (
                    <div className={s.checkBox}>
                        <CheckBox id={item.id} name={item.name} key={item.id} onChangeCheckBox={() => handleChangeCheckBoxFilterElement(item)} />
                    </div>
                    ))
                }
            </ul>
        </div>
    )
}
export default FilterCheckBox