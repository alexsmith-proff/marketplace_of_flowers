import React, { FC } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import { getFileNameInImgBlockFromElement } from '../../../services/core/parse';
import { IElement } from '../../../interfaces/section.interface';

import s from './ReviewList.module.scss'

interface ReviewListProps {
    slides: IElement[]
}

const ReviewList: FC<ReviewListProps> = ({ slides }) => {
    return (
        <>
            {
                slides.map(slide => (
                    <ReviewItem
                        review={slide}
                        imgSrc={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(slide, 'izobrazhenie')}`}
                        imgAlt={`${slide.slug}-image`}
                        key={slide.id}
                    />
                ))

            }
        </>
    )
}

export default ReviewList;



