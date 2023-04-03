import { FC, useContext, useEffect, useState } from 'react'
import FilterContext from '../../../context/filter-context'
import { IFilterValue } from '../../../interfaces/filter.interface'
import CheckBox from '../../Elements/CheckBox/CheckBox'
import FilterSeparateLine from '../FilterSeparateLine/FilterSeparateLine'
import FilterTitle from '../FilterTitle/FilterTitle'

import s from './FilterSize.module.scss'
import { IFilterContext } from '../Filter'

interface FilterSizeProps { }

const FilterSize: FC<FilterSizeProps> = ({ }) => {
    const value: IFilterContext = useContext(FilterContext)

    const handleChangeCheckBoxDiametrFlavor = (itemValue: IFilterValue) => {
        const d = {...value.diametrFlavor, values: value.diametrFlavor.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? {...item, value: '1'} : {...item, value: '0'}) : item
        )
        )}
        
        value.setFilterDiametrFlavor(d)                 
    }
    const handleChangeCheckBoxHeightFlavor = (itemValue: IFilterValue) => {
        const h = {...value.heightFlavor, values: value.heightFlavor.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? {...item, value: '1'} : {...item, value: '0'}) : item
        )
        )}
        value.setFilterHeightFlavor(h)                             
    }


    return (
        <div className={s.block}>
            <FilterTitle title='Размер' />
            <h4 className={s.subTitle}>{value.diametrFlavor?.name}</h4>
            <ul className={s.list}>
                {
                    value.diametrFlavor?.values.map((item) => <CheckBox id={item.id} name={item.name} key={item.id} checked={item.value === '1' ? true : false} onChangeCheckBox={() => handleChangeCheckBoxDiametrFlavor(item)} />)
                }
            </ul>
            <h4 className={s.subTitle}>{value.heightFlavor?.name}</h4>
            <ul className={s.list}>
                {
                    value.heightFlavor?.values.map((item) => <CheckBox id={item.id} name={item.name} key={item.id} checked={item.value === '1' ? true : false} onChangeCheckBox={() => handleChangeCheckBoxHeightFlavor(item)} />)
                }
            </ul>
            <FilterSeparateLine />
        </div>
    )
}

export default FilterSize