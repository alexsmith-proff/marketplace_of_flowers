import { FC, useContext } from "react"

import st from './FilterShowBtn.module.scss'
import FilterContext from "../../../../context/filter-context"
import { IFilterContext } from "../../../Filter/Filter"

interface FilterShowBtnProps {
    visible?: boolean
    onClick: () => void
    children: React.ReactNode
}

const FilterShowBtn: FC<FilterShowBtnProps> = ({ visible = true, onClick, children }) => {
    const valueContext: IFilterContext = useContext(FilterContext)
    return (
        <div className={visible ? (st.btn + ' ' + st.visible) : st.btn} style={{top: valueContext.showBtn.top}} onClick={onClick}>
            {children}
        </div>
    )
}

export default FilterShowBtn