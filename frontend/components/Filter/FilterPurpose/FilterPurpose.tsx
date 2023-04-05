import { FC, useContext } from "react"
import FilterContext from "../../../context/filter-context"
import { IFilterElement } from "../../../interfaces/filter.interface"
import { IFilterContext } from "../Filter"
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox"

interface FilterPurposeProps {}

const FilterPurpose: FC<FilterPurposeProps> = ({  }) => {
    const valueContext: IFilterContext = useContext(FilterContext)
    const handleChangeFilterPurpose = (val: IFilterElement) => {
        valueContext.setFilterPurpose(val)
        valueContext.setShowBtn({isVisible: true, top: 960})
    }
    return (
        <div>
            <FilterCheckBox filterName="Кому" filter={valueContext.purpose} separateLine={false} changeCheckBox={handleChangeFilterPurpose} />
        </div>
    )
}

export default FilterPurpose