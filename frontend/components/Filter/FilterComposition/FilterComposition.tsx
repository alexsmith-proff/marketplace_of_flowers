import { FC, useContext } from "react"
import FilterContext from "../../../context/filter-context"
import { IFilterElement } from "../../../interfaces/filter.interface"
import { IFilterContext } from "../Filter"
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox"

interface FilterCompositionProps {}

const FilterComposition: FC<FilterCompositionProps> = ({  }) => {
    const valueContext: IFilterContext = useContext(FilterContext)
    const handleChangeFilterComposition = (val: IFilterElement) => {
        valueContext.setFilterComposition(val)
        valueContext.setShowBtn({isVisible: true, top: 720})
    }
    return (
        <div>
            <FilterCheckBox filterName="Состав" filter={valueContext.composition} changeCheckBox={handleChangeFilterComposition} />
        </div>
    )
}

export default FilterComposition