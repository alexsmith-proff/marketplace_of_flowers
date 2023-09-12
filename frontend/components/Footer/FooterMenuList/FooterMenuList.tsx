import { FC } from "react";
import FooterMenuItem from "../FooterMenuItem/FooterMenuItem";
import { IMenuItem } from "../../../interfaces/menu.interface";

import s from './FooterMenuList.module.scss'

interface FooterMenuListProps{
    items: IMenuItem[]
}

const FooterMenuList: FC<FooterMenuListProps> = ({ items }) => {
    return(
        <ul className={s.list}>
            {
                items.map((item) => <FooterMenuItem name={item.name} items={item.submenuitems} key={item.id} />)
            }
        </ul>
    )
}

export default FooterMenuList