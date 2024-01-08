import { FC } from 'react'
import Image from 'next/image'
import FilterTitle from '../FilterTitle/FilterTitle'
import CheckBox from '../../../UI/CheckBoxs/CheckBox/CheckBox'
import SeparateLine from '../../../UI/SeparateLine/SeparateLine'
import { IFilterElement } from '../../../interfaces/filter.interface'
import { useFilterCheckBox } from './hooks/useFilterCheckBox'

import s from './FilterCheckBox.module.scss'

interface FilterCheckBoxProps {
    filterName: string
    filter: IFilterElement
    changeCheckBox: (val: IFilterElement) => void
    separateLine?: boolean
}

const FilterCheckBox: FC<FilterCheckBoxProps> = ({ filterName, filter, changeCheckBox, separateLine = true }) => {
    const { isExpand, handleChangeCheckBoxFilterElement, HandleExpand } = useFilterCheckBox(filter, changeCheckBox)
   
    return (
        <div className={s.block}>
            <FilterTitle title={filterName} />
            <ul className={s.list}>
                {
                    filter?.values?.map((item, index) => (
                        <div key={item.id}>
                            {
                                isExpand && (
                                    <div className={s.checkBox}>
                                        <CheckBox id={item.id} name={item.name} checked={item.value === '1' ? true : false} onChangeCheckBox={() => handleChangeCheckBoxFilterElement(item)} />
                                    </div>
                                )
                            }
                            {
                                !isExpand && index <= 5 && (
                                    <div className={s.checkBox}>
                                        <CheckBox id={item.id} name={item.name} checked={item.value === '1' ? true : false} onChangeCheckBox={() => handleChangeCheckBoxFilterElement(item)} />
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </ul>
            {
                filter?.values.length > 6 &&
                <div className={!isExpand ? s.expand + ' ' + s.collapse : s.expand} onClick={HandleExpand} >
                    <Image src='/img/filter-expand.png' width={20} height={20} alt='expand-ico' />
                </div>
            }

            {
                separateLine && <SeparateLine />
            }
        </div>
    )
}
export default FilterCheckBox