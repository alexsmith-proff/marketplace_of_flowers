import React, { FC } from 'react';

import s from './Reviews.module.scss'

interface ReviewsProps {
    sliderOrListComponent: React.ReactNode
    sendReviewBtnComponent: React.ReactNode
    allReviewBtnComponent: React.ReactNode
}

const Reviews: FC<ReviewsProps> = ({ sliderOrListComponent, sendReviewBtnComponent, allReviewBtnComponent }) => {
    return (
        <>
            <section className={s.reviews}>
                <div className="container">
                    <div className={s.top}>
                        <h2 className={s.title}>Отзывы наших покупателей</h2>
                        {sliderOrListComponent}
                    </div>
                    {sendReviewBtnComponent}
                    <div className={s.btnWrap}>
                        {allReviewBtnComponent}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;



