import React, { FC } from 'react';

import s from './MainSlider.module.scss'

interface MainSliderProps {
}

const MainSlider: FC<MainSliderProps> = ({ }) => {

    return (
        <div className={s.mainSlider}>
            <div className="container">
                <div className={s.mainSliderContainer}>
                    <div className={s.bigSlider} style={{ backgroundImage: "url('img/big-slider1.png')", backgroundRepeat: "no-repeat" }}>
                        <div className={s.bigSlider__info}>
                            <div className={s.bigSlider__infoContainer}>
                                <div className={s.bigSlider__infoStock}>НЕДЕЛЯ АКЦИЙ</div>
                                <h2 className={s.bigSlider__infoText}>Бесплатная доставка от 5000 руб</h2>
                                <div className={s.bigSlider__infoSubtitle}>Промокод:</div>
                                <div className={s.bigSlider__infoPromo}>
                                    <div className={s.promo__text}>ЛАВКАРОЗ</div>
                                    <div className={s.promo__btn}>
                                        <img src="img/promo-btn-copy.png" alt="promo-btn-copy" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.sliderArrows + ' ' + s.arrowLeft}>
                                <img src="../../../img/arrow-left.png" alt="arrow-left" />
                            </div>
                            <div className={s.sliderArrows + ' ' + s.arrowRight}>
                                <img src="../../../img/arrow-right.png" alt="arrow-right" />
                            </div>
                        </div>
                    </div>
                    <div className={s.smallSlider}>
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
                    </div >
                </div >
            </div >
        </div >
    );
};

export default MainSlider;



