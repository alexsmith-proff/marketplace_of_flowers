import { FC } from "react"

import s from './FavoriteBtn.module.scss'
import Image from "next/image"
import Link from "next/link"

interface FavoriteBtnProps {
    link?: string
    backgroundLight?: boolean
    active?: boolean
    onClick?: () => void
}
const FavoriteBtn: FC<FavoriteBtnProps> = ({ link, backgroundLight = false, active = false, onClick }) => {
    return (
        <>
            <div className={backgroundLight ? (`${s.headerBtn} ${s.light}`) : s.headerBtn}>
                <div className={s.headerBtn__img}>
                    <Image className={s.headerBtn__img} src='/img/favorite-btn.png' width={18} height={18} alt='favorite-btn-ico' />
                </div>
            </div>
        </>
    )

}
export default FavoriteBtn