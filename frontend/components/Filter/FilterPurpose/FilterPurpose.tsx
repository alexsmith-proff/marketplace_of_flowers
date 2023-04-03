import { FC, useContext } from "react"
import FilterContext from "../../../context/filter-context"
import { IFilterElement } from "../../../interfaces/filter.interface"
import { IFilterContext } from "../Filter"
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox"

interface FilterPurposeProps {}

const FilterPurpose: FC<FilterPurposeProps> = ({  }) => {
    const value: IFilterContext = useContext(FilterContext)
    const handleChangeFilterPurpose = (val: IFilterElement) => {
        value.setFilterPurpose(val)
    }
    return (
        <div>
            <FilterCheckBox filterName="Кому" filter={value.purpose} changeCheckBox={handleChangeFilterPurpose} />
        </div>
    )
}

export default FilterPurpose