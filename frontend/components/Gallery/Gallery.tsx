import React, { FC } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";

import s from './Gallery.module.scss'
import { ISection } from '../../interfaces/section.interface';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../services/core/parse';

interface GalleryProps {
    gallerySection: ISection
}

const Gallery: FC<GalleryProps> = ({ gallerySection }) => {

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
    };

    return (
        <>
            <section className={s.gallery}>
                <div className="container">
                    <h2 className={s.gallery__mainTitle}>Галерея</h2>
                    <div className={s.gallery__list}>
                        <Slider className='gallery' {...settings}>
                            {
                                gallerySection && gallerySection.elements.map(el => (
                                    <div className={s.gallery__item}>
                                        <img src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(el, 'image')} alt={getTextInTextBlockFromElement(el, 'alt')} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;



