import React, { FC } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";

import s from './MainCards.module.scss'
import { ISection } from '../../interfaces/section.interface';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../services/core/parse';

interface MainCardsProps {
    mainCardSection: ISection
}

const MainCards: FC<MainCardsProps> = ({ mainCardSection }) => {

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
    };

    return (
        <>
            <section className={s.mainCards}>
                <div className="container">
                    <h2 className={s.mainCards__mainTitle}>Букеты цветов с доставкой</h2>
                    <div className={s.mainCards__list}>
                        <Slider className='mainCards' {...settings}>
                            {
                                mainCardSection && mainCardSection.elements.map(el => (
                                    <div className={s.mainCards__item} key={el.id}>
                                        <img className={s.mainCards__img} src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(el, 'background')} alt={getTextInTextBlockFromElement(el, 'alt')} />
                                        <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                                        <div className={s.mainCards__info}>
                                            <div className={s.mainCards__text}>
                                                <div className={s.mainCards__title}>{getTextInTextBlockFromElement(el, 'name')}</div>
                                                <div className={s.mainCards__subtitle}>{getTextInTextBlockFromElement(el, 'desc')}</div>
                                            </div>
                                            <div className={s.mainCards__priceCart}>
                                                <div className={s.mainCards__price}>
                                                    <div className={s.mainCards__actualPrice}>{getTextInTextBlockFromElement(el, 'cena')}</div>
                                                    <div className={s.mainCards__crossPrice}>{getTextInTextBlockFromElement(el, 'staraya-cena')}</div>
                                                </div>
                                                <a href="#">
                                                    <div className={s.mainCards__cartBtn}>
                                                        <img className={s.cartBtn__ico} src="img/cart-ico.png" alt="cart-ico" />
                                                        <div className={s.cartBtn__text}>В корзину</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainCards;



