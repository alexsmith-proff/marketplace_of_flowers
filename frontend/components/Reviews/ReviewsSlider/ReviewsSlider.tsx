import React, { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";
import ReviewsStar from '../../ReviewsStar/ReviewsStar';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../../services/core/parse';
import { ISection } from '../../../interfaces/section.interface';

import s from './ReviewsSlider.module.scss'
import { useRouter } from 'next/router';

interface ReviewsSliderProps {
    reviewSection: ISection
    sendReviewBtnVisible?: boolean
    allReviewBtnVisible?: boolean
}

const ReviewsSlider: FC<ReviewsSliderProps> = ({ reviewSection, sendReviewBtnVisible = false, allReviewBtnVisible = false }) => {
    const router = useRouter()

    const settings: Settings = {
        // arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 1000, // Плавность перехода 3 сек
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const hanbleOnClickAllReviewsBtn = () => {
        router.push('/reviews')
    }

    return (
        <>
            <section className={s.reviews}>
                <div className="container">
                    <div className={s.reviews__top}>
                        <h2 className={s.reviews__mainTitle}>Отзывы наших покупателей</h2>
                        {
                            sendReviewBtnVisible && <button className={s.reviews__sendReviewBtn}>Оставить отзыв</button>
                        }
                    </div>
                    <Slider {...settings} >
                        {
                            reviewSection && reviewSection.elements.map(el => (
                                <div className={s.reviews__slider} key={el.id}>
                                    <div className={s.reviews__sliderContainer}>
                                        <div className={s.reviews__sliderLeft}>
                                            <ReviewsStar stars={getTextInTextBlockFromElement(el, 'ocenka')} />
                                            <div className={s.reviews__sliderName}>{getTextInTextBlockFromElement(el, 'name')}</div>
                                            <div className={s.reviews__sliderText}>{getTextInTextBlockFromElement(el, 'otzyv')}</div>
                                            <div className={s.reviews__sliderBouquet}>Отзыв к букету: <span>{getTextInTextBlockFromElement(el, 'otzyv-k-buketu')}</span></div>
                                        </div>
                                        <div className={s.reviews__sliderRight}>
                                            <img src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(el, 'izobrazhenie')} alt={getTextInTextBlockFromElement(el, 'alt')} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                    {
                        allReviewBtnVisible && (
                            <div className={s.reviews__BtnWrap}>
                                <button className={s.reviews__Btn} onClick={hanbleOnClickAllReviewsBtn}>Все отзывы</button>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default ReviewsSlider;



