import React, { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";

import s from './ReviewsStar.module.scss'

interface ReviewsStarProps {
    stars: number
}

const ReviewsStar: FC<ReviewsStarProps> = ({ stars }) => {
    return (
        <ul className={s.starsList}>
            {
                stars && Array.from({ length: stars }).map((_, index) => (
                    <li className={s.star} key={index}>
                        <img src="../../img/star.png" alt="star" />
                    </li>
                )
                )
            }
        </ul>
    );
};

export default ReviewsStar;



