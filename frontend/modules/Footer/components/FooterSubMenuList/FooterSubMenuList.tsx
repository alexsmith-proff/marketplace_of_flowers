import { FC } from "react";
import FooterSubMenuItem from "../FooterSubMenuItem/FooterSubMenuItem";
import { ISubMenu } from "../../../../interfaces/menu.interface";

import s from './FooterSubMenuList.module.scss'

interface FooterSubMenuListProps {
    subItems: ISubMenu[]
 }

const FooterSubMenuList: FC<FooterSubMenuListProps> = ({ subItems }) => {
    return (
        <ul className={s.list}>
            {
                subItems.map(subItem => <FooterSubMenuItem item={subItem} key={subItem.id} />)
            }
        </ul>
    )
}

export default FooterSubMenuList