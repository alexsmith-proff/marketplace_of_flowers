import { FC } from "react";

import s from './ArrowRightText.module.scss'
import Image from "next/image";

interface ArrowRightTextProps {
    text: string
}

const ArrowRightText: FC<ArrowRightTextProps> = ({ text}) => {
    return (
        <div className={s.wrap}>
            <div className={s.text}>{text}</div>
            <Image src={'/img/arrow-next.png'} width={24} height={24} alt="arrow-next" />
        </div>
    )
}

export default ArrowRightText