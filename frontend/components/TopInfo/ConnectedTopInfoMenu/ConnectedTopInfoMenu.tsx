import { FC } from "react"
import TopInfoMenu from "../TopInfoMenu/TopInfoMenu"
import { IMenu } from "../../../interfaces/menu.interface"

interface ConnectedTopInfoMenuProps {
    menu: IMenu
}

const ConnectedTopInfoMenu: FC<ConnectedTopInfoMenuProps> = ({ menu }) => {
    return (
        <TopInfoMenu menuItems={menu.items} />
    )
}

export default ConnectedTopInfoMenu