import { FC } from "react"
import FilterContext from "../../context/filter-context"
import FilterPrice from "./FilterPrice/FilterPrice"
import FilterColor from "./FilterColor/FilterColor"
import FilterSize from "./FilterSize/FilterSize"
import FilterComposition from "./FilterComposition/FilterComposition"
import FilterPurpose from "./FilterPurpose/FilterPurpose"
import FilterBtn from "../../UI/Buttons/FilterBtn/FilterBtn"
import { useFilter } from "./hooks/useFilter"
import { IProductMinMaxPrice } from "../../interfaces/products.interface"
import { IFilter, IFilterData } from "../../interfaces/filter.interface"

import s from './Filter.module.scss'

interface FilterProps {
    filterMinMaxPrice: IProductMinMaxPrice
    filter: IFilter
    getProductsByFilter: (FilterData: IFilterData[]) => void
}

const Filter: FC<FilterProps> = ({ filterMinMaxPrice, filter, getProductsByFilter }) => {
    const { value, handleClearFilter, handleShowBtn } = useFilter(filterMinMaxPrice, filter, getProductsByFilter)

    return (
        <div className={s.wrap}>
            <div className={s.filter}>
                <FilterContext.Provider value={value}>
                    <FilterPrice />
                    <FilterColor />
                    <FilterSize />
                    <FilterComposition />
                    <FilterPurpose />
                    {/* <FilterBtn staticBtn={false} dark={false} visible={showBtn.isVisible} onClick={handleShowBtn}>Показать</FilterBtn> */}
                </FilterContext.Provider>
            </div>
            <div className={s.clearBtn}>
                <FilterBtn staticBtn={true} dark={false} visible={true} onClick={handleClearFilter}>Очистить фильтры</FilterBtn>
            </div>
            <div className={s.showBtn}>
                <FilterBtn staticBtn={true} dark={true} visible={true} onClick={handleShowBtn}>Показать</FilterBtn>
            </div>
        </div>
    )
}

export default Filter