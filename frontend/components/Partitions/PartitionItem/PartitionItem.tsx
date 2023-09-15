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
        <li className={s.partitions__item}>
            <Image src={imgSrc} width={278} height={251} alt={imgAlt} />
            <div className={s.partitions__info}>
                <h3 className={s.partitions__title}>{title}</h3>
                <div className={s.partitions__price}>от <span>{price}</span> ₽</div>
            </div>
        </li>
    )
}

export default PartitionItem