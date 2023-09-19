import { FC } from "react"
import Link from "next/link"
import { IMenuItem } from "../../../../interfaces/menu.interface"

import s from './TopInfoMenuItem.module.scss'

interface TopInfoMenuItemProps{
    menuItem: IMenuItem
}

const TopInfoMenuItem: FC<TopInfoMenuItemProps> = ({ menuItem }) => {
    return (
        <li className={s.item} key={menuItem.id}>
            <Link href={`/${menuItem.link}`}>
                <a>{menuItem.name}</a>
            </Link>
        </li>
    )
}

export default TopInfoMenuItem