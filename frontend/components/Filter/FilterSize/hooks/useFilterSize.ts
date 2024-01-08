import { useContext } from "react"
import FilterContext from "../../../../context/filter-context"
import { IFilterContext, IFilterValue } from "../../../../interfaces/filter.interface"

export const useFilterSize = () => {
    const valueContext: IFilterContext = useContext(FilterContext)

    const handleChangeCheckBoxDiametrFlavor = (itemValue: IFilterValue) => {
        const d = {...valueContext.diametrFlavor, values: valueContext.diametrFlavor.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? {...item, value: '1'} : {...item, value: '0'}) : item
        )
        )}
        
        valueContext.setFilterDiametrFlavor(d)  
        valueContext.setShowBtn({isVisible: true, top: 470})               
    }
    const handleChangeCheckBoxHeightFlavor = (itemValue: IFilterValue) => {
        const h = {...valueContext.heightFlavor, values: valueContext.heightFlavor.values.map((item) => (
            item.id === itemValue.id ? (item.value == '0' ? {...item, value: '1'} : {...item, value: '0'}) : item
        )
        )}
        valueContext.setFilterHeightFlavor(h)    
        valueContext.setShowBtn({isVisible: true, top: 470})                         
    }
    return { valueContext, handleChangeCheckBoxDiametrFlavor, handleChangeCheckBoxHeightFlavor }
}