import { FC } from "react"
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox"
import { useFilterPurpose } from "./hooks/useFilterPurpose"

interface FilterPurposeProps {}

const FilterPurpose: FC<FilterPurposeProps> = ({  }) => {
    const { valueContext, handleChangeFilterPurpose } = useFilterPurpose()
    
    return (
        <div>
            <FilterCheckBox filterName="Кому" filter={valueContext.purpose} separateLine={false} changeCheckBox={handleChangeFilterPurpose} />
        </div>
    )
}

export default FilterPurpose