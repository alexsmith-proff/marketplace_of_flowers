import { FC } from 'react'
import CatalogCardsItem from '../CatalogCardsItem/CatalogCardsItem';
import { ICatalog } from '../../../../interfaces/catalog.interface';

import s from './CatalogCardsList.module.scss'

interface CatalogCardsListProps {
    cards: ICatalog[]
}

const CatalogCardsList: FC<CatalogCardsListProps> = ({ cards }) => {

    return (
        <ul className={s.list}>
            {
                cards.map((catalogCard) => <CatalogCardsItem text={catalogCard.name} fileName={catalogCard.filenames_images[0]} slug={catalogCard.slug} key={catalogCard.id} />)
            }
        </ul>
    )
};

export default CatalogCardsList;
