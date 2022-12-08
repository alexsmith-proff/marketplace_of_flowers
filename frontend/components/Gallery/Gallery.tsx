import React, { FC } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";

import s from './Gallery.module.scss'

interface GalleryProps {
}

const Gallery: FC<GalleryProps> = ({ }) => {

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
                            <div className={s.gallery__item}>
                                <img src="../../../img/gallery1.png" alt="gallery1" />
                            </div>
                            <div className={s.gallery__item}>
                                <img src="../../../img/gallery2.png" alt="gallery2" />
                            </div>
                            <div className={s.gallery__item}>
                                <img src="../../../img/gallery3.png" alt="gallery3" />
                            </div>
                            <div className={s.gallery__item}>
                                <img src="../../../img/gallery4.png" alt="gallery4" />
                            </div>

                            <div className={s.gallery__item}>
                                <img src="../../../img/gallery1.png" alt="gallery1" />
                            </div>
                            <div className={s.gallery__item}>
                                <img src="../../../img/gallery2.png" alt="gallery2" />
                            </div>
                            <div className={s.gallery__item}>
                                <img src="../../../img/gallery3.png" alt="gallery3" />
                            </div>
                            <div className={s.gallery__item}>
                                <img src="../../../img/gallery4.png" alt="gallery4" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;



