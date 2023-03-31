import { FC, useContext, useEffect, useState } from 'react'
import FilterContext from '../../../context/filter-context'
import { IFilterElement } from '../../../interfaces/filter.interface'
import { getFilterElementFromFilterBySlug } from '../../../services/core/parse'
import CheckBox from '../../Elements/CheckBox/CheckBox'
import FilterTitle from '../FilterTitle/FilterTitle'

import s from './FilterSize.module.scss'

interface FilterSizeProps { }

const FilterSize: FC<FilterSizeProps> = ({ }) => {
    const value = useContext(FilterContext)

    const [diametrFlavor, setDiametrFlavor] = useState<IFilterElement>()
    const [heightFlavor, setHeightFlavor] = useState<IFilterElement>()

    useEffect(() => {
        setDiametrFlavor(getFilterElementFromFilterBySlug(value.filter, 'diametr-buketa'))
        setHeightFlavor(getFilterElementFromFilterBySlug(value.filter, 'vysota-buketa'))
    }, [])

    return (
        <div className={s.block}>
            <FilterTitle title='Размер' />
            <h4 className={s.subTitle}>{diametrFlavor?.name}</h4>
            <ul className={s.list}>
                {
                    diametrFlavor?.values.map((item) => <CheckBox id={item.id} name={item.name} key={item.id} />)
                }
            </ul>
            <h4 className={s.subTitle}>{heightFlavor?.name}</h4>
            <ul className={s.list}>
                {
                    heightFlavor?.values.map((item) => <CheckBox id={item.id} name={item.name} key={item.id} />)
                }
            </ul>

        </div>
    )
}

export default FilterSize