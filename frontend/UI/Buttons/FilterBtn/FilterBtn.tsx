import { FC, useContext } from "react"
import FilterContext from "../../../context/filter-context"
import { IFilterContext } from "../../../interfaces/filter.interface"

import st from './FilterBtn.module.scss'

interface FilterBtnProps {
    visible?: boolean
    staticBtn?: boolean
    dark?: boolean
    onClick: () => void
    children: React.ReactNode
}

const FilterBtn: FC<FilterBtnProps> = ({ visible = true, staticBtn = true, dark = false, onClick, children }) => {
    const valueContext: IFilterContext = useContext(FilterContext)
    return (
        <div>
            {
                staticBtn === true ?
                    <div className={visible ? ((dark ? st.btnStatic + ' ' + st.dark : st.btnStatic) + ' ' + st.visible) : (dark ? st.btnStatic + ' ' + st.dark : st.btnStatic)} onClick={onClick}>
                        {children}
                    </div>
                    :
                    <div className={visible ? ((dark ? st.btn + ' ' + st.dark : st.btn) + ' ' + st.visible) : (dark ? st.btn + ' ' + st.dark : st.btn)} style={{ top: valueContext.showBtn.top }} onClick={onClick}>
                        {children}
                    </div>
            }
        </div>
    )
}

export default FilterBtn