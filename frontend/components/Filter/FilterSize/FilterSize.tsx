import { FC } from 'react'
import FilterTitle from '../FilterTitle/FilterTitle'
import CheckBox from '../../../UI/CheckBoxs/CheckBox/CheckBox'
import SeparateLine from '../../../UI/SeparateLine/SeparateLine'
import { useFilterSize } from './hooks/useFilterSize'

import s from './FilterSize.module.scss'

const FilterSize: FC = ({ }) => {
    const { valueContext, handleChangeCheckBoxDiametrFlavor, handleChangeCheckBoxHeightFlavor } = useFilterSize()

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
            <SeparateLine />
        </div>
    )
}

export default FilterSize