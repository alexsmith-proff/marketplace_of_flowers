import { useContext } from "react"
import FilterContext from "../../../../context/filter-context"
import { IFilterContext, IFilterElement } from "../../../../interfaces/filter.interface"

export const useFilterPurpose = () => {
    const valueContext: IFilterContext = useContext(FilterContext)
    const handleChangeFilterPurpose = (val: IFilterElement) => {
        valueContext.setFilterPurpose(val)
        valueContext.setShowBtn({isVisible: true, top: 960})
    }
    return { valueContext, handleChangeFilterPurpose }
}