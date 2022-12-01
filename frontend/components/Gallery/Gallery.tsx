import React, { FC } from 'react';

import s from './Gallery.module.scss'

interface GalleryProps {
}

const Gallery: FC<GalleryProps> = ({ }) => {

    return (
        <>
            <section className={s.gallery}>
                <div className="container">
                    <h2 className={s.gallery__mainTitle}>Галерея</h2>
                    <div className={s.gallery__list}>
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
                        <div className={s.arrows + ' ' + s.arrowLeft}>
                            <img src="../../../img/arrow-left.png" alt="arrow-left" />
                        </div>
                        <div className={s.arrows + ' ' + s.arrowRight}>
                            <img src="../../../img/arrow-right.png" alt="arrow-right" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;



