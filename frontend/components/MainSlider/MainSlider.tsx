import React, { FC } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";

import s from './MainSlider.module.scss'
import { ISection } from '../../interfaces/section.interface';

interface MainSliderProps {
    bigSliderSection: ISection
    smallSliderSection: ISection
}

const MainSlider: FC<MainSliderProps> = ({ bigSliderSection, smallSliderSection }) => {
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
                            {                                
                                bigSliderSection &&
                                <Slider {...settingsBigSlider}>
                                    {
                                        bigSliderSection && bigSliderSection.elements.map(item => (
                                            <div className={s.bigSlider__item} key={item.id}>
                                                <img src={process.env.SERVER_URL + '/' + item.img_elements[0].filename} alt="big-slider1" />
                                                <div className={s.bigSlider__info}>
                                                    <div className={s.bigSlider__infoTopText}>{item.text_elements[0].text}</div>
                                                    <div className={s.bigSlider__infoMiddleText}>{item.text_elements[1].text}</div>
                                                    <div className={s.bigSlider__infoUnderText}>{item.text_elements[2].text}:</div>

                                                    <div className={s.bigSlider__infoPromo}>
                                                        <div className={s.bigSlider__infoPromoText}>{item.text_elements[3].text}</div>
                                                        <div className={s.bigSlider__infoPromoBtn}>
                                                            <img src="img/promo-btn-copy.png" alt="promo-btn-copy" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        )
                                    }
                                </Slider>
                            }


                        </div>
                    </div>
                    <div className="smallSlider">
                        <div className={s.smallSlider}>
                            <div className={s.smallSlider__title}>Букет недели</div>
                            <Slider {...settingsSmallSlider}>
                                {
                                    smallSliderSection && smallSliderSection.elements.map(item => (
                                        <div className={s.smallSlider__item} key={item.id}>
                                            <img src={process.env.SERVER_URL + '/' + item.img_elements[0].filename} alt="small-slider1" />
                                            <div className={s.smallSlider__info}>
                                                <div className={s.smallSlider__infoTitle}>{item.text_elements[0].text}</div>
                                                <div className={s.smallSlider__infoSubTitle}>{item.text_elements[1].text}</div>
                                                <div className={s.smallSlider__infoChart}>
                                                    <div className={s.smallSlider__infoPriceWrap}>
                                                        <div className={s.smallSlider__infoPrice}>{item.text_elements[2].text}</div>
                                                        <div className={s.smallSlider__infoCrossPrice}>{item.text_elements[3].text}</div>
                                                    </div>
                                                    <div className={s.smallSlider__infoBtn}>
                                                        <img src="img/cart-ico.png" alt="cart-ico" />
                                                        <div className={s.smallSlider__infoBtnText}>В корзину</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    );
};

export default MainSlider;



