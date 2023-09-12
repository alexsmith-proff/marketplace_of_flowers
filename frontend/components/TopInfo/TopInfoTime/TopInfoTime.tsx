import { FC } from "react"

import s from './TopInfoTime.module.scss'
import Image from "next/image"

interface TopInfoTimeProps {
    src: string
    text: string
}

const TopInfoTime: FC<TopInfoTimeProps> = ({ src, text }) => {
    return (
        <div className={s.topInfoTime}>
            {/* <Image src={'/img/clock.png'} width={16} height={16} alt='clock-ico' /> */}
            <Image src={src} width={16} height={16} alt='clock-ico' />
            {/* <div className={s.topInfoTime__text}>Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</div> */}
            <div className={s.text}>{text}</div>
        </div>
    )
}

export default TopInfoTime