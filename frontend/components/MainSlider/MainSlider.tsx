import React, { FC } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";

import s from './MainSlider.module.scss'
import { ISection } from '../../interfaces/section.interface';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../services/core/parse';

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

    // console.log('bigSliderSection', bigSliderSection);

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
                                                <img src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(item, 'background')} alt="big-slider1" />
                                                <div className={s.bigSlider__info}>
                                                    <div className={s.bigSlider__infoTopText}>{getTextInTextBlockFromElement(item, 'tekst-vverkhu')}</div>
                                                    <div className={s.bigSlider__infoMiddleText}>{getTextInTextBlockFromElement(item, 'tekst-v-seredine')}</div>
                                                    <div className={s.bigSlider__infoUnderText}>{getTextInTextBlockFromElement(item, 'promokod-tekst')}</div>

                                                    <div className={s.bigSlider__infoPromo}>
                                                        <div className={s.bigSlider__infoPromoText}>{getTextInTextBlockFromElement(item, 'tekst-vnizu')}</div>
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
                            {
                                smallSliderSection &&
                                <Slider {...settingsSmallSlider}>
                                    {
                                        smallSliderSection && smallSliderSection.elements.map(item => (
                                            <div className={s.smallSlider__item} key={item.id}>
                                                <img src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(item, 'background')} alt="small-slider1" />
                                                <div className={s.smallSlider__info}>
                                                    <div className={s.smallSlider__infoTitle}>{getTextInTextBlockFromElement(item, 'nazvanie')}</div>
                                                    <div className={s.smallSlider__infoSubTitle}>{getTextInTextBlockFromElement(item, 'opisanie')}</div>
                                                    <div className={s.smallSlider__infoChart}>
                                                        <div className={s.smallSlider__infoPriceWrap}>
                                                            <div className={s.smallSlider__infoPrice}>{getTextInTextBlockFromElement(item, 'cena') + ' ₽'}</div>
                                                            <div className={s.smallSlider__infoCrossPrice}>{getTextInTextBlockFromElement(item, 'staraya-cena') + ' ₽'}</div>
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
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div >

    );
};

export default MainSlider;



