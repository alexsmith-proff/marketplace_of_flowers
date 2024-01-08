import { FC } from "react";
import { SortingsList } from "../../../constants/sorting.conts";

import s from './ComboBoxSorting.module.scss'

type ComboBoxSortingProps = {
    sortItem: string
    setSortItem: (sort: string) => void
}
const ComboBoxSorting: FC<ComboBoxSortingProps> = ({ sortItem, setSortItem }) => {
    const handleChangeComboBox = (e) => {
        setSortItem(e.target.value)
    }

    return (
        <select className={s.comboBox} onChange={handleChangeComboBox} value={sortItem}>
            {/* <option></option> */}
            {
                SortingsList.map((itemCheckBox, index) => <option key={index}>{itemCheckBox}</option>)
            }
        </select>
    )
}

export default ComboBoxSorting