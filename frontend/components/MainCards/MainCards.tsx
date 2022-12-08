import React, { FC } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";

import s from './MainCards.module.scss'

interface MainCardsProps {
}

const MainCards: FC<MainCardsProps> = ({ }) => {

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
                        <div className={s.mainCards__item}>
                            <img className={s.mainCards__img} src="img/card-img1.png" alt="card-img1" />
                            <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                            <div className={s.mainCards__info}>
                                <div className={s.mainCards__text}>
                                    <div className={s.mainCards__title}>Букет 25 роз Нежный микс</div>
                                    <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                </div>
                                <div className={s.mainCards__priceCart}>
                                    <div className={s.mainCards__price}>
                                        <div className={s.mainCards__actualPrice}>13 499 ₽</div>
                                        <div className={s.mainCards__crossPrice}>15 499 ₽</div>
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
                        <div className={s.mainCards__item}>
                            <img className={s.mainCards__img} src="img/card-img2.png" alt="card-img2" />
                            <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                            <div className={s.mainCards__info}>
                                <div className={s.mainCards__text}>
                                    <div className={s.mainCards__title}>Букет роз Ред наоми 60 см</div>
                                    <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                </div>
                                <div className={s.mainCards__priceCart}>
                                    <div className={s.mainCards__price}>
                                        <div className={s.mainCards__actualPrice}>13 499 ₽</div>
                                        <div className={s.mainCards__crossPrice}>15 499 ₽</div>
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
                        <div className={s.mainCards__item}>
                            <img className={s.mainCards__img} src="img/card-img3.png" alt="card-img3" />
                            <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                            <div className={s.mainCards__info}>
                                <div className={s.mainCards__text}>
                                    <div className={s.mainCards__title}>Букет 5 пионовидных роз <br /> Мисти баблс</div>
                                    <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                </div>
                                <div className={s.mainCards__priceCart}>
                                    <div className={s.mainCards__price}>
                                        <div className={s.mainCards__actualPrice}>13 499 ₽</div>
                                        <div className={s.mainCards__crossPrice}>15 499 ₽</div>
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
                        <div className={s.mainCards__item}>
                            <img className={s.mainCards__img} src="img/card-img4.png" alt="card-img4" />
                            <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                            <div className={s.mainCards__info}>
                                <div className={s.mainCards__text}>
                                    <div className={s.mainCards__title}>Букет роз микс 40 см</div>
                                    <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                </div>
                                <div className={s.mainCards__priceCart}>
                                    <div className={s.mainCards__price}>
                                        <div className={s.mainCards__actualPrice}>13 499 ₽</div>
                                        <div className={s.mainCards__crossPrice}>15 499 ₽</div>
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
                        <div className={s.mainCards__item}>
                            <img className={s.mainCards__img} src="img/card-img1.png" alt="card-img1" />
                            <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                            <div className={s.mainCards__info}>
                                <div className={s.mainCards__text}>
                                    <div className={s.mainCards__title}>Букет 25 роз Нежный микс</div>
                                    <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                </div>
                                <div className={s.mainCards__priceCart}>
                                    <div className={s.mainCards__price}>
                                        <div className={s.mainCards__actualPrice}>13 499 ₽</div>
                                        <div className={s.mainCards__crossPrice}>15 499 ₽</div>
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
                        <div className={s.mainCards__item}>
                            <img className={s.mainCards__img} src="img/card-img2.png" alt="card-img2" />
                            <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                            <div className={s.mainCards__info}>
                                <div className={s.mainCards__text}>
                                    <div className={s.mainCards__title}>Букет роз Ред наоми 60 см</div>
                                    <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                </div>
                                <div className={s.mainCards__priceCart}>
                                    <div className={s.mainCards__price}>
                                        <div className={s.mainCards__actualPrice}>13 499 ₽</div>
                                        <div className={s.mainCards__crossPrice}>15 499 ₽</div>
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
                        <div className={s.mainCards__item}>
                            <img className={s.mainCards__img} src="img/card-img3.png" alt="card-img3" />
                            <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                            <div className={s.mainCards__info}>
                                <div className={s.mainCards__text}>
                                    <div className={s.mainCards__title}>Букет 5 пионовидных роз <br /> Мисти баблс</div>
                                    <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                </div>
                                <div className={s.mainCards__priceCart}>
                                    <div className={s.mainCards__price}>
                                        <div className={s.mainCards__actualPrice}>13 499 ₽</div>
                                        <div className={s.mainCards__crossPrice}>15 499 ₽</div>
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
                        <div className={s.mainCards__item}>
                            <img className={s.mainCards__img} src="img/card-img4.png" alt="card-img4" />
                            <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" />
                            <div className={s.mainCards__info}>
                                <div className={s.mainCards__text}>
                                    <div className={s.mainCards__title}>Букет роз микс 40 см</div>
                                    <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                </div>
                                <div className={s.mainCards__priceCart}>
                                    <div className={s.mainCards__price}>
                                        <div className={s.mainCards__actualPrice}>13 499 ₽</div>
                                        <div className={s.mainCards__crossPrice}>15 499 ₽</div>
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
                    </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainCards;



