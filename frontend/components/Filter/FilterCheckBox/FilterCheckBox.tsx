import Image from 'next/image'
import { FC, useContext, useState, useEffect } from 'react'
import { URL } from 'url'
import FilterContext from '../../../context/filter-context'
import { IFilterElement, IFilterValue } from '../../../interfaces/filter.interface'
import { getFilterElementFromFilterBySlug } from '../../../services/core/parse'
import CheckBox from '../../Elements/CheckBox/CheckBox'
import FilterSeparateLine from '../FilterSeparateLine/FilterSeparateLine'
import FilterTitle from '../FilterTitle/FilterTitle'

import s from './FilterCheckBox.module.scss'

interface FilterCheckBoxProps {
    filterName: string
    filterSlug: string
}

const FilterCheckBox: FC<FilterCheckBoxProps> = ({ filterName, filterSlug }) => {
    const value = useContext(FilterContext)

    const [filterElement, setFilterElement] = useState<IFilterElement>()
    const [isExpand, setIsExpand] = useState<boolean>(false)

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

    const HandleExpand = () => {
        setIsExpand(!isExpand)
    }

    return (
        <div className={s.block}>
            <FilterTitle title={filterName} />
            <ul className={s.list}>
                {
                    filterElement?.values?.map((item, index) => (
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
                filterElement?.values.length > 6 &&
                <div className={!isExpand ? s.expand + ' ' + s.collapse : s.expand} onClick={HandleExpand} >
                    <Image src='/img/filter-expand.png' width={20} height={20} alt='expand-ico' />
                </div>
            }

            <FilterSeparateLine />
        </div>
    )
}
export default FilterCheckBox