import { FC } from 'react'
import Image from 'next/image';

import s from './NewsItem.module.scss'

interface NewsItemProps {
    imgSrc: string
    imgAlt: string
    title: string
    text: string
    date: string
}

const NewsItem: FC<NewsItemProps> = ({ imgSrc, imgAlt, title, text, date }) => {
    return (
        <li className={s.item}>
            <Image src={imgSrc} width={377} height={255} alt={imgAlt} />
            <div className={s.info}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.text}>{text}</p>
                <div className={s.date}>{date}</div>
            </div>
        </li>
    )
}

export default NewsItem;



