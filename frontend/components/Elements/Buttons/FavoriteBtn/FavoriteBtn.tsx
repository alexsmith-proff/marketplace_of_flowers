import { FC } from "react"

import s from './FavoriteBtn.module.scss'
import Image from "next/image"
import Link from "next/link"

interface FavoriteBtnProps {
    link: string
}
const FavoriteBtn: FC<FavoriteBtnProps> = ({ link }) => {
    return (
        <>
            <Link href={link}>
                <a className={s.header__favoriteBtnLink} href="#">
                    <div className={s.headerBtn}>
                        <div className={s.headerBtn__img}>
                            <Image className={s.headerBtn__img} src='/img/favorite-btn.png' width={18} height={18} alt='favorite-btn-ico' />
                        </div>
                    </div>
                </a>
            </Link >
        </>
    )

}
export default FavoriteBtn