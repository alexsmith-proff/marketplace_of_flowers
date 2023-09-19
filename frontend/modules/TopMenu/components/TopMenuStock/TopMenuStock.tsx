import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import s from './TopMenuStock.module.scss'

interface TopMenuStockProps {
    link: string,
    imgSrc: string
    imgAlt: string,
    text: string
}

const TopMenuStock: FC<TopMenuStockProps> = ({ link, imgSrc, imgAlt, text }) => {
    return (
        <Link href={link}>
            <a>
                <div className={s.stock}>
                    <div className={s.ico}>
                        <Image src={imgSrc} width={40} height={40} alt={imgAlt} />
                    </div>
                    <div className={s.text}>{text}</div>
                </div>
            </a>
        </Link>
    )
}

export default TopMenuStock