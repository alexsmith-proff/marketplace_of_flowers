import React, { FC } from 'react';

import s from './Reviews.module.scss'

interface ReviewsProps {
}

const Reviews: FC<ReviewsProps> = ({ }) => {

    return (
        <>
            <section className={s.reviews}>
                <div className="container">
                    <div className={s.reviews__top}>
                        <h2 className={s.reviews__mainTitle}>Отзывы наших покупателей</h2>
                        <button className={s.reviews__sendReviewBtn}>Оставить отзыв</button>
                    </div>
                    <div className={s.reviews__slider}>
                        <div className={s.reviews__sliderContainer}>
                            <div className={s.reviews__sliderLeft}>
                                <ul className={s.reviews__sliderStarsList}>
                                    <li className={s.reviews__sliderStar}>
                                        <img src="../../img/star.png" alt="star" />
                                    </li>
                                    <li className={s.reviews__sliderStar}>
                                        <img src="../../img/star.png" alt="star" />
                                    </li>
                                    <li className={s.reviews__sliderStar}>
                                        <img src="../../img/star.png" alt="star" />
                                    </li>
                                    <li className={s.reviews__sliderStar}>
                                        <img src="../../img/star.png" alt="star" />
                                    </li>
                                    <li className={s.reviews__sliderStar}>
                                        <img src="../../img/star.png" alt="star" />
                                    </li>
                                </ul>
                                <div className={s.reviews__sliderName}>Мередова Елена Григорьевна</div>
                                <div className={s.reviews__sliderText}>Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.  </div>
                                <div className={s.reviews__sliderBouquet}>Отзыв к букету: <span>Розы 80 см</span></div>
                            </div>
                            <div className={s.reviews__sliderRight}>
                                <img src="../../img/review1.png" alt="review1" />
                            </div>
                        </div>
                    </div>
                    <div className={s.reviews__BtnWrap}>
                        <button className={s.reviews__Btn}>Все отзывы</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;



