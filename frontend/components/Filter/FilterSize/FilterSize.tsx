import { FC, useContext, useEffect, useState } from 'react'
import FilterContext from '../../../context/filter-context'
import { IFilterElement, IFilterValue } from '../../../interfaces/filter.interface'
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
        const diametrFlavorValue = getFilterElementFromFilterBySlug(value.filter, 'diametr-buketa')
        const heightFlavorValue = getFilterElementFromFilterBySlug(value.filter, 'vysota-buketa')

        setDiametrFlavor({...diametrFlavorValue, values: diametrFlavorValue.values.map((item) => ( {...item, value: '0'} ))})
        setHeightFlavor({...heightFlavorValue, values: heightFlavorValue.values.map((item) => ( {...item, value: '0'} ))})
    }, [])

    const handleChangeCheckBoxDiametrFlavor = (itemValue: IFilterValue) => {
        console.log('diametrFlavor', diametrFlavor);
        
        setDiametrFlavor({...diametrFlavor, values: diametrFlavor.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? {...item, value: '1'} : {...item, value: '0'}) : item
        )
        )})                  
    }
    const handleChangeCheckBoxHeightFlavor = (itemValue: IFilterValue) => {
        console.log('heightFlavor', heightFlavor);
        setHeightFlavor({...heightFlavor, values: heightFlavor.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? {...item, value: '1'} : {...item, value: '0'}) : item
        )
        )})                  
    }


    return (
        <div className={s.block}>
            <FilterTitle title='Размер' />
            <h4 className={s.subTitle}>{diametrFlavor?.name}</h4>
            <ul className={s.list}>
                {
                    diametrFlavor?.values.map((item) => <CheckBox id={item.id} name={item.name} key={item.id} onChangeCheckBox={() => handleChangeCheckBoxDiametrFlavor(item)} />)
                }
            </ul>
            <h4 className={s.subTitle}>{heightFlavor?.name}</h4>
            <ul className={s.list}>
                {
                    heightFlavor?.values.map((item) => <CheckBox id={item.id} name={item.name} key={item.id} onChangeCheckBox={() => handleChangeCheckBoxHeightFlavor(item)} />)
                }
            </ul>

        </div>
    )
}

export default FilterSize