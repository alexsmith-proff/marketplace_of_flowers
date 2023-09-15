import React, { FC } from 'react';
import GallerySlider from './GallerySlider/GallerySlider';
import { ISection } from '../../interfaces/section.interface';

import s from './Gallery.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface GalleryProps {
    gallerySection: ISection
}

const Gallery: FC<GalleryProps> = ({ gallerySection }) => {
    return (
        <>
            <section className={s.gallery}>
                <div className="container">
                    <h2 className={s.gallery__mainTitle}>Галерея</h2>
                    <div className={s.gallery__list}>
                        <GallerySlider sliders={gallerySection.elements} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;



