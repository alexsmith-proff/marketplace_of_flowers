import Image from 'next/image'
import { FC, useContext, useState, useEffect } from 'react'
import FilterContext from '../../../context/filter-context'
import { IFilterElement, IFilterValue } from '../../../interfaces/filter.interface'
import { getFilterElementFromFilterBySlug } from '../../../services/core/parse'
import CheckBox from '../../Elements/CheckBox/CheckBox'
import { IFilterContext } from '../Filter'
import FilterSeparateLine from '../FilterSeparateLine/FilterSeparateLine'
import FilterTitle from '../FilterTitle/FilterTitle'

import s from './FilterCheckBox.module.scss'

interface FilterCheckBoxProps {
    filterName: string
    filter: IFilterElement
    changeCheckBox: (val: IFilterElement) => void
    separateLine?: boolean
}

const FilterCheckBox: FC<FilterCheckBoxProps> = ({ filterName, filter, changeCheckBox, separateLine = true }) => {
    const [isExpand, setIsExpand] = useState<boolean>(false)

    const handleChangeCheckBoxFilterElement = (itemValue: IFilterValue) => {
        changeCheckBox({...filter, values: filter.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? { ...item, value: '1' } : { ...item, value: '0' }) : item
        ))
    })
    }

    const HandleExpand = () => {
        setIsExpand(!isExpand)
    }

    return (
        <div className={s.block}>
            <FilterTitle title={filterName} />
            <ul className={s.list}>
                {
                    filter?.values?.map((item, index) => (
                        <>
                            {
                                isExpand && (
                                    <div className={s.checkBox}>
                                        <CheckBox id={item.id} name={item.name} checked={item.value === '1' ? true : false} key={item.id} onChangeCheckBox={() => handleChangeCheckBoxFilterElement(item)} />
                                    </div>
                                )
                            }
                            {
                                !isExpand && index <= 5 && (
                                    <div className={s.checkBox}>
                                        <CheckBox id={item.id} name={item.name} checked={item.value === '1' ? true : false} key={item.id} onChangeCheckBox={() => handleChangeCheckBoxFilterElement(item)} />
                                    </div>
                                )
                            }
                        </>
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
                separateLine && <FilterSeparateLine />
            }
        </div>
    )
}
export default FilterCheckBox