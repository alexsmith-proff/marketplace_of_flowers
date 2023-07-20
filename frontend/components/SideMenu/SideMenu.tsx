import { FC, useState, useEffect } from "react"

import s from './SideMenu.module.scss'
import { useRouter } from "next/router"

interface ISideMenuItem {
    name: string,
    slug: string,
    active: boolean
}

interface SideMenuProps{
    sideMenuSlug: string
}

const SideMenu: FC<SideMenuProps> = ({ sideMenuSlug }) => {
    const [sideMenu, setSideMenu] = useState<ISideMenuItem[]>([])

    const router = useRouter()

    const handleClickItem = (index: number) => {
        router.push(sideMenu.find((__, ind) => ind === index).slug)        
    }

    useEffect(() => {
        setSideMenu([
            {
                name: 'О нас',
                slug: 'about',
                active: sideMenuSlug === 'about' ? true : false
            },
            {
                name: 'Оплата',
                slug: 'pay',
                active: sideMenuSlug === 'pay' ? true : false
            },
            {
                name: 'Доставка',
                slug: 'delivery',
                active: sideMenuSlug === 'delivery' ? true : false
            }
        ])
    },[sideMenuSlug]) 

    console.log('SideMenuSlug', sideMenuSlug);
    


    return (
        <div className={s.sideMenu}>
            <ul className={s.list}>
                {
                    sideMenu.map((item, ind) => <li className={item.active ? `${s.item} ${s.active}` : s.item} onClick={() => handleClickItem(ind)} key={ind}>{item.name}</li>)
                }
            </ul>
        </div>
    )
    
}

export default SideMenu