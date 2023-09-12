import { FC } from "react";

import s from './FooterSubMenuItem.module.scss'
import { ISubMenu } from "../../../interfaces/menu.interface";

interface FooterSubMenuItemProps{
    item: ISubMenu
}

const FooterSubMenuItem: FC<FooterSubMenuItemProps> = ({ item }) => {
    return(
        <li className={s.item} key={item.id}>{item.name}</li>
    )
}

export default FooterSubMenuItem