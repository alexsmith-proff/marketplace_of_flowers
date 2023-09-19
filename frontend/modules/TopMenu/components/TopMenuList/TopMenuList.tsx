import { FC } from "react";
import TopMenuItem from "../TopMenuItem/TopMenuItem";
import { IMenu } from "../../../../interfaces/menu.interface";

import s from './TopMenuList.module.scss'

interface TopMenuListProps {
    menu: IMenu
}

const TopMenuList: FC<TopMenuListProps> = ({ menu }) => {
    return (
        <ul className={s.menu}>
            {
                menu?.items.map((item) => <TopMenuItem item={item} key={item.id} />)
            }
        </ul>
    )
}

export default TopMenuList