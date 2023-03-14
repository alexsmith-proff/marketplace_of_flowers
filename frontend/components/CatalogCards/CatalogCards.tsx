import Image from "next/image"
import React from "react"
import { ICatalog } from '../../interfaces/catalog.interface'

import s from '/CatalogCards.module.scss'

interface CatalogCardsProps {
    title: string
    catalogCards: ICatalog[]
}

const CatalogCards: React.FC<CatalogCardsProps> = ({ title, catalogCards }) => {
    return (
        <section>
            <div className={s.title}>{title}</div>
            {
                catalogCards.map((catalogCard) => (
                    <div className={s.card}>
                        <Image src={catalogCard.filenames_images[0]} />
                        <h3 className={s.cartTitle}>{catalogCard.name}</h3>
                    </div>
                ))
            }
        </section>
    )
}

export default CatalogCards