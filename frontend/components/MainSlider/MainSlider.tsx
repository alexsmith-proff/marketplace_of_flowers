import React, { FC } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";

import s from './MainSlider.module.scss'

interface MainSliderProps {
}

const MainSlider: FC<MainSliderProps> = ({ }) => {
    const settingsBigSlider: Settings = {
        // dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 5000, // Плавность перехода 3 сек
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settingsSmallSlider: Settings = {
        // dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 1000, // Плавность перехода 3 сек
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={s.mainSlider}>
            <div className="container">
                <div className={s.mainSliderContainer}>
                    <div className="bigSlider">
                        <div className={s.bigSlider}>
                            <Slider {...settingsBigSlider}>
                                <div className={s.bigSlider__item}>
                                    <img src="img/big-slider1.png" alt="big-slider1" />
                                    <div className={s.bigSlider__info}>
                                        <div className={s.bigSlider__infoTopText}>НЕДЕЛЯ АКЦИЙ</div>
                                        <div className={s.bigSlider__infoMiddleText}>Бесплатная доставка от 5000 руб</div>
                                        <div className={s.bigSlider__infoUnderText}>Промокод:</div>
                                        <div className={s.bigSlider__infoPromo}>
                                            <div className={s.bigSlider__infoPromoText}>ЛАВКАРОЗ</div>
                                            <div className={s.bigSlider__infoPromoBtn}>
                                                <img src="img/promo-btn-copy.png" alt="promo-btn-copy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.bigSlider__item}>
                                    <img src="img/big-slider1.png" alt="big-slider1" />
                                    <div className={s.bigSlider__info}>
                                        <div className={s.bigSlider__infoTopText}>НИЗКИЕ ЦЕНЫ</div>
                                        <div className={s.bigSlider__infoMiddleText}>Красивый букет красных роз от 1500 руб</div>
                                        <div className={s.bigSlider__infoUnderText}>Промокод:</div>
                                        <div className={s.bigSlider__infoPromo}>
                                            <div className={s.bigSlider__infoPromoText}>БУКЕТ</div>
                                            <div className={s.bigSlider__infoPromoBtn}>
                                                <img src="img/promo-btn-copy.png" alt="promo-btn-copy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="smallSlider">
                        <div className={s.smallSlider}>
                            <div className={s.smallSlider__title}>Букет недели</div>
                            <Slider {...settingsSmallSlider}>
                                <div className={s.smallSlider__item}>
                                    <img src="img/small-slider1.png" alt="small-slider1" />
                                    <div className={s.smallSlider__info}>
                                        <div className={s.smallSlider__infoTitle}>Букет 25 роз Нежный микс</div>
                                        <div className={s.smallSlider__infoSubTitle}>Высота: 60 см, Ширина: 35 см</div>
                                        <div className={s.smallSlider__infoChart}>
                                            <div className={s.smallSlider__infoPriceWrap}>
                                                <div className={s.smallSlider__infoPrice}>13 499 ₽</div>
                                                <div className={s.smallSlider__infoCrossPrice}>15 499 ₽</div>
                                            </div>
                                            <div className={s.smallSlider__infoBtn}>
                                                <img src="img/cart-ico.png" alt="cart-ico" />
                                                <div className={s.smallSlider__infoBtnText}>В корзину</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.smallSlider__item}>
                                    <img src="img/small-slider1.png" alt="small-slider1" />
                                    <div className={s.smallSlider__info}>
                                        <div className={s.smallSlider__infoTitle}>Букет 25 роз Нежный микс</div>
                                        <div className={s.smallSlider__infoSubTitle}>Высота: 60 см, Ширина: 35 см</div>
                                        <div className={s.smallSlider__infoChart}>
                                            <div className={s.smallSlider__infoPriceWrap}>
                                                <div className={s.smallSlider__infoPrice}>13 499 ₽</div>
                                                <div className={s.smallSlider__infoCrossPrice}>15 499 ₽</div>
                                            </div>
                                            <div className={s.smallSlider__infoBtn}>
                                                <img src="img/cart-ico.png" alt="cart-ico" />
                                                <div className={s.smallSlider__infoBtnText}>В корзину</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>


                    {/* <div className={s.smallSlider}>
                        <div className={s.smallSlider__title}>Букет недели</div>
                        <div className={s.smallSlider__container}>
                            <div className={s.smallSlider__img}>
                                <img src="../../../img/small-slider1.png" alt="small-slider1-img" />
                                <div className={s.smallSlider__heart}>
                                    <img src="../../../img/heart.png" alt="heart-ico" />
                                </div>
                            </div>
                            <div className={s.smallSlider__info}>
                                <h3 className={s.smallSlider__infoTitle}>Букет 25 роз Нежный микс</h3>
                                <div className={s.smallSlider__infoSubtitle}>Высота: 60 см, Ширина: 35 см</div>
                                <div className={s.smallSlider__infoPriceCart}>
                                    <div className={s.smallSlider__infoPrice}>
                                        <div className={s.smallSlider__infoPriceActual}>13 499 ₽</div>
                                        <div className={s.smallSlider__infoPriceNoActual}>15 499 ₽</div>
                                    </div>
                                    <a href="#">
                                        <div className={s.smallSlider__infoCartBtn}>
                                            <div className={s.cartBtn__ico}>
                                                <img src="img/cart-ico.png" alt="" />
                                            </div>
                                            <div className={s.cartBtn__text}>В корзину</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={s.sliderArrows + ' ' + s.arrowLeft}>
                                <img src="../../../img/arrow-left.png" alt="arrow-left" />
                            </div>
                            <div className={s.sliderArrows + ' ' + s.arrowRight}>
                                <img src="../../../img/arrow-right.png" alt="arrow-right" />
                            </div>
                        </div >
                    </div> */}
                </div>
            </div >
        </div >

    );
};

export default MainSlider;



