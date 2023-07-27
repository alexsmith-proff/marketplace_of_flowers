import Image from "next/image"
import { FC } from "react"

import s from './ProfileMenu.module.scss'

interface ProfileMenuProps {
    menuItem: number
    changeMenuItem: (item: number) => void
}

type TMenuItem = {
    name: string,
    filename: string
}

const menu: TMenuItem[] = [
    {
        name: 'Личный кабинет',
        filename: 'profile-ico1.png'
    },
    {
        name: 'Заказы',
        filename: 'profile-ico2.png'
    },
    {
        name: 'Настройки',
        filename: 'profile-ico3.png'
    },
    {
        name: 'О скидках',
        filename: 'profile-ico4.png'
    },
    {
        name: 'Выйти',
        filename: 'profile-ico5.png'
    },

]

const ProfileMenu: FC<ProfileMenuProps> = ({ menuItem, changeMenuItem }) => {
    return (
        <ul>
            {
                menu.map((item, ind) => (
                    <li className={menuItem == ind ? `${s.item} ${s.active}` : s.item} onClick={() => changeMenuItem(ind)} key={ind}>
                        <Image src={`/img/${item.filename}`} width={24} height={24} alt="menu-item-ico" />
                        <p className={s.item__text}>{item.name}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProfileMenu