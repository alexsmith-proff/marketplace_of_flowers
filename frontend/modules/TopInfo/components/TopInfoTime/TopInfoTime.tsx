import { FC } from "react"
import Image from "next/image"

import s from './TopInfoTime.module.scss'

interface TopInfoTimeProps {
    src: string
    text: string
}

const TopInfoTime: FC<TopInfoTimeProps> = ({ src, text }) => {
    return (
        <div className={s.topInfoTime}>
            <Image src={src} width={16} height={16} alt='clock-ico' />
            <div className={s.text}>{text}</div>
        </div>
    )
}

export default TopInfoTime