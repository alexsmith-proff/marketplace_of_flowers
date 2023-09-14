import React, { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import CardItem from '../CardItem/CardItem';
import { useCardList } from '../../../hooks/useCardList';
import { ISection } from '../../../interfaces/section.interface';

import s from './SliderCardList.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderCardListProps {
    cards: ISection
}

const SliderCardList: FC<SliderCardListProps> = ({ cards }) => {
    const { isBuyProduct, isFavorite, handleClick, handleAddToCart, handleAddToFavorite } = useCardList(cards)
    
    const settings: Settings = {
        // dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 1000, // Плавность перехода 3 сек
        slidesToShow: 4,
        slidesToScroll: 1,

        // centerMode: true,
        // centerPadding: '50',
        // rows: 3,
    }

    return (
        <div className={s.list}>
            <Slider className='mainCards' {...settings}>
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
            </Slider>
        </div>
    );
};

export default SliderCardList;