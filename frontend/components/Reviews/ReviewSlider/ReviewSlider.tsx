import React, { FC } from 'react';
import Slider, { Settings } from "react-slick";
import ReviewItem from '../ReviewItem/ReviewItem';
import { getFileNameInImgBlockFromElement } from '../../../services/core/parse';
import { IElement } from '../../../interfaces/section.interface';

import s from './ReviewSlider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ReviewSliderProps {
    slides: IElement[]
}

const ReviewSlider: FC<ReviewSliderProps> = ({ slides }) => {
    const settings: Settings = {
        // arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 1000, // Плавность перехода 3 сек
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <Slider {...settings} >
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
        </Slider>
    )
}

export default ReviewSlider;



