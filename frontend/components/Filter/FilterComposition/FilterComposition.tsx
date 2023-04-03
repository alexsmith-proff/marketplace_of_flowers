import { FC, useContext } from "react"
import FilterContext from "../../../context/filter-context"
import { IFilterElement } from "../../../interfaces/filter.interface"
import { IFilterContext } from "../Filter"
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox"

interface FilterCompositionProps {}

const FilterComposition: FC<FilterCompositionProps> = ({  }) => {
    const value: IFilterContext = useContext(FilterContext)
    const handleChangeFilterComposition = (val: IFilterElement) => {
        value.setFilterComposition(val)
    }
    return (
        <div>
            <FilterCheckBox filterName="Состав" filter={value.composition} changeCheckBox={handleChangeFilterComposition} />
        </div>
    )
}

export default FilterComposition