import { FC } from 'react'
import CatalogCardsList from './components/CatalogCardsList/CatalogCardsList';
import { ICatalogCards } from '../../interfaces/catalog.interface';

import s from './CatalogCards.module.scss'

interface CatalogCardsProps {
    catalogCards: ICatalogCards
}

const CatalogCards: FC<CatalogCardsProps> = ({ catalogCards }) => {

    return (
        <section className={s.section}>
            <div className="container">
                <div className={s.title}>{catalogCards.title}</div>
                <CatalogCardsList cards={catalogCards.cards} />
            </div>
        </section>
    )
};

export default CatalogCards;
