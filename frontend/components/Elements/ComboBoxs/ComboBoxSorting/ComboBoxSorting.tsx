import { FC, ReactEventHandler, useState } from "react";

import s from './ComboBoxSorting.module.scss'
import { SortingsList } from "../../../../constants/sorting.conts";

type ComboBoxSortingProps = {
    sortItem: string
    setSortItem: (sort: string) => void
}
const ComboBoxSorting: FC<ComboBoxSortingProps> = ({ sortItem, setSortItem }) => {
    // const [sortItem, setSortItem] = useState<string>(list[0])

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