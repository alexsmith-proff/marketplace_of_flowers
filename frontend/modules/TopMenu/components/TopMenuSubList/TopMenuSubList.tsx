import { FC } from 'react'
import TopMenuSubItem from '../TopMenuSubItem/TopMenuSubItem'
import { ISubMenu } from '../../../../interfaces/menu.interface'

import s from './TopMenuSubList.module.scss'

interface TopMenuSubListProps {
    items: ISubMenu[]
}
const TopMenuSubList: FC<TopMenuSubListProps> = ({ items }) => {
    return (
        <ul className={s.list}>
            {
                items.map((item) => <TopMenuSubItem item={item} key={item.id}/>)
            }
        </ul>
    )
}

export default TopMenuSubList