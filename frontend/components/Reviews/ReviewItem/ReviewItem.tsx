import React, { FC } from 'react';
import Image from 'next/image';
import ReviewsStar from '../../ReviewsStar/ReviewsStar';
import { getTextInTextBlockFromElement } from '../../../services/core/parse';
import { IElement } from '../../../interfaces/section.interface';

import s from './ReviewItem.module.scss'

interface ReviewItemProps {
    review: IElement
    imgSrc: string
    imgAlt: string
}

const ReviewItem: FC<ReviewItemProps> = ({ review, imgSrc, imgAlt }) => {
    return (
        <div className={s.review}>
            <div className={s.wrap}>
                <div className={s.left}>
                    <ReviewsStar stars={getTextInTextBlockFromElement(review, 'ocenka')} />
                    <div className={s.name}>{getTextInTextBlockFromElement(review, 'name')}</div>
                    <div className={s.text}>{getTextInTextBlockFromElement(review, 'otzyv')}</div>
                    <div className={s.bouquet}>Отзыв к букету: <span>{getTextInTextBlockFromElement(review, 'otzyv-k-buketu')}</span></div>
                </div>
                <div className={s.right}>
                    <Image src={imgSrc} alt={imgAlt} width={200} height={200} />
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;



