import { useContext } from "react"
import FilterContext from "../../../../context/filter-context"
import { IFilterActiveColor, IFilterContext } from "../../../../interfaces/filter.interface"

export const useFilterColor = () => {
    const valueContext: IFilterContext = useContext(FilterContext)

    const HandleClickRadioButton = (item: IFilterActiveColor) => {
        valueContext.setFilterActiveColor(item)
        valueContext.setShowBtn({isVisible: true, top: 220})
    }
    return {
        valueContext,
        HandleClickRadioButton
    }
}