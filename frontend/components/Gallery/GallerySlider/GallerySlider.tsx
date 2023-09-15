import React, { FC } from 'react';
import Slider, { Settings } from "react-slick";
import GalleryItem from '../GalleryItem/GalleryItem';
import { getFileNameInImgBlockFromElement } from '../../../services/core/parse';
import { IElement } from '../../../interfaces/section.interface';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface GallerySliderProps {
    sliders: IElement[],
}

const GallerySlider: FC<GallerySliderProps> = ({ sliders }) => {
    const settings: Settings = {
        // dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 1000, // Плавность перехода 3 сек
        slidesToShow: 4,
        slidesToScroll: 1,

        // centerMode: true,
        // centerPadding: '50',
        // rows: 3,
    }
    return (
        <Slider className='gallery' {...settings}>
            {
                sliders.map(slider => (
                    <GalleryItem
                        imgSrc={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(slider, 'image')}`}
                        imgAlt={`${slider.slug}-img`}
                        key={slider.id}
                    />
                ))
            }
        </Slider>
    );
};

export default GallerySlider;



