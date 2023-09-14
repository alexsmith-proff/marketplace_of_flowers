import React, { FC } from 'react';
import { useCardList } from '../../../hooks/useCardList';
import CardItem from '../CardItem/CardItem';
import { ISection } from '../../../interfaces/section.interface';

import s from './CardList.module.scss'

interface CardListProps {
    cards: ISection
}

const CardList: FC<CardListProps> = ({ cards }) => {
    const { router, isBuyProduct, isFavorite, handleClick, handleAddToCart, handleAddToFavorite } = useCardList(cards)

    return (
        <>
            {
                cards?.elements?.map(card => (
                    <CardItem
                        productID={card.product_ref.id}
                        imgSrc={card.product_ref.main_image ? `${process.env.API_URI_DOCKER}/${card.product_ref.main_image}` : '/img/nophoto.png'}
                        alt={card.product_ref.slug}
                        title={card.product_ref.name}
                        subtitle={card.product_ref.description}
                        price={card.product_ref.price}
                        crossPrice={card.product_ref.price + 500}
                        isBuyProduct={isBuyProduct(card.product_ref.id)}
                        isActive={isFavorite(card.product_ref.id)}
                        onClickProduct={handleClick}
                        onClickAddToCart={handleAddToCart}
                        onClickAddToFavorite={handleAddToFavorite}
                        key={card.id}
                    />)
                )

        }
        </>
    );
};

export default CardList;