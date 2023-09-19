import { FC } from 'react'
import { ISubMenu } from '../../../../interfaces/menu.interface'

import s from './TopMenuSubItem.module.scss'

interface TopMenuSubItemProps {
    item: ISubMenu
}
const TopMenuSubItem: FC<TopMenuSubItemProps> = ({ item }) => {
    return (
        <li className={s.item} key={item.id}>{item.name}</li>
    )
}

export default TopMenuSubItem