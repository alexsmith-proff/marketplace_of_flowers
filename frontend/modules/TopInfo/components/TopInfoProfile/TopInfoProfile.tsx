import Image from 'next/image'
import { FC } from 'react'

import s from './TopInfoProfile.module.scss'

interface TopinfoProfileProps{
    imgSrc: string,
    onClick: () => void
}

const TopinfoProfile: FC<TopinfoProfileProps> = ({ imgSrc, onClick }) => {
    return (
        <div className={s.profile} onClick={onClick}>
            <div className={s.profileIco}>
                <Image src={imgSrc} width={20} height={20} alt='user-ico' />
            </div>
            <div className={s.text}>Мои заказы</div>
        </div>
    )
}

export default TopinfoProfile