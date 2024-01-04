import { FC } from 'react'
import Image from 'next/image';

import s from './CatalogCardsItem.module.scss'

interface CatalogCardsItemProps {
    text: string
    fileName: string
    slug: string
}

const CatalogCardsItem: FC<CatalogCardsItemProps> = ({ text, fileName, slug }) => {

    return (
        <li className={s.card}>
            <Image className={s.img} objectFit="cover" src={`${process.env.API_URI_DOCKER}/${fileName}`} width={218} height={160} alt={`${slug}-img`} />
            <h3 className={s.cartTitle}>{text}</h3>
        </li>

    )
};

export default CatalogCardsItem;
