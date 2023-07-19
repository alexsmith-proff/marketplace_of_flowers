import React, { FC } from 'react';
import ReviewsStar from '../../ReviewsStar/ReviewsStar';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../../services/core/parse';
import { ISection } from '../../../interfaces/section.interface';

import s from './Reviews.module.scss'

interface ReviewsProps {
    reviewSection: ISection
    sendReviewBtnVisible?: boolean
}

const Reviews: FC<ReviewsProps> = ({ reviewSection, sendReviewBtnVisible = false }) => {
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
                    {
                        reviewSection.elements.map(el => (
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
                </div>
            </section>
        </>
    );
};

export default Reviews;



