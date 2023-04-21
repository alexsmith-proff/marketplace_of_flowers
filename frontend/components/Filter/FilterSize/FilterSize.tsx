import { FC, useContext } from 'react'
import FilterContext from '../../../context/filter-context'
import { IFilterContext, IFilterValue } from '../../../interfaces/filter.interface'
import CheckBox from '../../Elements/CheckBox/CheckBox'
import FilterSeparateLine from '../FilterSeparateLine/FilterSeparateLine'
import FilterTitle from '../FilterTitle/FilterTitle'

import s from './FilterSize.module.scss'

interface FilterSizeProps { }

const FilterSize: FC<FilterSizeProps> = ({ }) => {
    const valueContext: IFilterContext = useContext(FilterContext)

    const handleChangeCheckBoxDiametrFlavor = (itemValue: IFilterValue) => {
        const d = {...valueContext.diametrFlavor, values: valueContext.diametrFlavor.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? {...item, value: '1'} : {...item, value: '0'}) : item
        )
        )}
        
        valueContext.setFilterDiametrFlavor(d)  
        valueContext.setShowBtn({isVisible: true, top: 470})               
    }
    const handleChangeCheckBoxHeightFlavor = (itemValue: IFilterValue) => {
        const h = {...valueContext.heightFlavor, values: valueContext.heightFlavor.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? {...item, value: '1'} : {...item, value: '0'}) : item
        )
        )}
        valueContext.setFilterHeightFlavor(h)    
        valueContext.setShowBtn({isVisible: true, top: 470})                         
    }


    return (
        <div className={s.block}>
            <FilterTitle title='Размер' />
            <h4 className={s.subTitle}>{valueContext.diametrFlavor?.name}</h4>
            <ul className={s.list}>
                {
                    valueContext.diametrFlavor?.values.map((item) => <CheckBox id={item.id} name={item.name} key={item.id} checked={item.value === '1' ? true : false} onChangeCheckBox={() => handleChangeCheckBoxDiametrFlavor(item)} />)
                }
            </ul>
            <h4 className={s.subTitle}>{valueContext.heightFlavor?.name}</h4>
            <ul className={s.list}>
                {
                    valueContext.heightFlavor?.values.map((item) => <CheckBox id={item.id} name={item.name} key={item.id} checked={item.value === '1' ? true : false} onChangeCheckBox={() => handleChangeCheckBoxHeightFlavor(item)} />)
                }
            </ul>
            <FilterSeparateLine />
        </div>
    )
}

export default FilterSize