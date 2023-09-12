import { FC } from 'react'
import Link from "next/link"
import TopMenuSubList from '../TopMenuSubList/TopMenuSubList'
import { IMenuItem } from '../../../interfaces/menu.interface'

import s from './TopMenuItem.module.scss'

interface TopMenuItemProps {
    item: IMenuItem
}
const TopMenuItem: FC<TopMenuItemProps> = ({ item }) => {
    return (
        <li>
            <Link href={`/category/${item.link}`} key={item.id}>
                <a>
                    <div className={s.menuItem} key={item.id}>
                        {item.name}
                        <TopMenuSubList items={item?.submenuitems} />
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default TopMenuItem