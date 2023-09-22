import React, { FC } from 'react';
import Image from 'next/image';

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
                        <Image src='/img/star.png' width={16} height={16} alt='star-img' />
                    </li>
                ))
            }
        </ul>
    );
};

export default ReviewsStar;



