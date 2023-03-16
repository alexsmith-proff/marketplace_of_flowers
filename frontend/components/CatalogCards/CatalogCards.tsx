import Image from "next/image"
import React from "react"
import { ICatalog } from '../../interfaces/catalog.interface'

import s from './CatalogCards.module.scss'

interface CatalogCardsProps {
    title: string
    catalogCards: ICatalog[]
}

const CatalogCards: React.FC<CatalogCardsProps> = ({ title, catalogCards }) => {
    // console.log('catalogCardsssss', catalogCards);

    return (
        <section className={s.catalogCards}>
            <div className="container">
                <div className={s.title}>{title}</div>
                <ul className={s.list}>
                    {
                        catalogCards.map((catalogCard) => (
                            <li className={s.card} key={catalogCard.id}>
                                <Image className={s.img} src={process.env.API_URI_DOCKER + '/' + catalogCard.filenames_images[0]} width={218} height={160} />
                                <h3 className={s.cartTitle}>{catalogCard.name}</h3>
                            </li>
                        )
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default CatalogCards