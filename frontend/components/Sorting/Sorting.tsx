import { FC } from "react";
import ComboBoxSorting from "../Elements/ComboBoxs/ComboBoxSorting/ComboBoxSorting";

import s from './Sorting.module.scss'

type SortingProps = {
    sortItem: string
    setSortItem: (sort: string) => void
}
const Sorting: FC<SortingProps> = ({ sortItem, setSortItem }) => {
    return (
        <div className={s.wrap}>
            <span className={s.text}>Сортировать: </span>
            <ComboBoxSorting sortItem={sortItem} setSortItem={setSortItem} />
        </div>
    )
}

export default Sorting