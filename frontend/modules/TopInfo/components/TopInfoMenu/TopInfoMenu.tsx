import { FC } from "react"
import TopInfoMenuItem from "../TopInfoMenuItem/TopInfoMenuItem"
import { IMenuItem } from "../../../../interfaces/menu.interface"

import s from './TopInfoMenu.module.scss'

interface TopInfoMenuProps {
    menuItems: IMenuItem[]
}

const TopInfoMenu: FC<TopInfoMenuProps> = ({ menuItems }) => {
    return (
        <ul className={s.menu}>
            {
                menuItems.map((menuItem) => <TopInfoMenuItem menuItem={menuItem} key={menuItem.id} />)
            }
        </ul>
    )
}

export default TopInfoMenu



