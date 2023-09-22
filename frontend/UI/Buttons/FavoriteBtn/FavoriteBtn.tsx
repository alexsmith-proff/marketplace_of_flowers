import React, { memo, FC, useState } from "react"
import Image from "next/image"

import s from './FavoriteBtn.module.scss'

interface FavoriteBtnProps {
    backgroundLight?: boolean
    isActive?: boolean
    onClick?: (e: any, isFavorite: boolean) => void
}
const FavoriteBtn: FC<FavoriteBtnProps> = ({ backgroundLight = false, isActive = false, onClick }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(isActive)

    const handleOnClick = (e) => {
        setIsFavorite(!isFavorite)
        onClick(e, isFavorite)
    }

    return (
        <div className={s.favoriteBtn}>
            <div className={backgroundLight ? (`${s.headerBtn} ${s.light}`) : s.headerBtn} onClick={handleOnClick} >
                <div className={s.headerBtn__img}>
                    <Image className={s.headerBtn__img} src={isActive ? '/img/favorite-btn-active.png' : '/img/favorite-btn.png'}  width={18} height={18} alt='favorite-btn-ico' />
                </div>
            </div>
        </div>
    )
}

export default FavoriteBtn