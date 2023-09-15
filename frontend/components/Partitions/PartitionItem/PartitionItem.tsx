import { FC } from "react"
import Image from "next/image"

import s from './PartitionItem.module.scss'

interface PartitionItemProps {
    imgSrc: string,
    imgAlt: string
    title: string,
    price: number
}

const PartitionItem: FC<PartitionItemProps> = ({ imgSrc, imgAlt, title, price }) => {
    return (
        <li className={s.item}>
            <Image src={imgSrc} width={278} height={251} alt={imgAlt} />
            <div className={s.info}>
                <h3 className={s.title}>{title}</h3>
                <div className={s.price}>от <span>{price}</span> ₽</div>
            </div>
        </li>
    )
}

export default PartitionItem