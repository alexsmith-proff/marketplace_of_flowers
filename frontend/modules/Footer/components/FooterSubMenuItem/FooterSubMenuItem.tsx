import { FC } from "react";
import { ISubMenu } from "../../../../interfaces/menu.interface";

import s from './FooterSubMenuItem.module.scss'

interface FooterSubMenuItemProps{
    item: ISubMenu
}

const FooterSubMenuItem: FC<FooterSubMenuItemProps> = ({ item }) => {
    return(
        <li className={s.item} key={item.id}>{item.name}</li>
    )
}

export default FooterSubMenuItem