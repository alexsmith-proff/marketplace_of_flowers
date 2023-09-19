import { FC } from "react";
import FooterSubMenuList from "../FooterSubMenuList/FooterSubMenuList";
import { ISubMenu } from "../../../../interfaces/menu.interface";

import s from './FooterMenuItem.module.scss'

interface FooterMenuItemProps {
    name: string
    items: ISubMenu[]
 }

const FooterMenuItem: FC<FooterMenuItemProps> = ({ name, items }) => {
    return (
        <li className={s.item}>
            {name}
            <FooterSubMenuList subItems={items} />
        </li>
    )
}

export default FooterMenuItem