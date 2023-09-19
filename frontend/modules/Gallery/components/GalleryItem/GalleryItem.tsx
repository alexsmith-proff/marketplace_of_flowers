import React, { FC } from 'react';
import Image from 'next/image';

import s from './GalleryItem.module.scss'

interface GalleryItemProps {
    imgSrc: string
    imgAlt: string
}

const GalleryItem: FC<GalleryItemProps> = ({ imgSrc, imgAlt }) => {
    return (
        <div className={s.item}>
            <Image src={imgSrc} width={278} height={300} alt={imgAlt} />
        </div>
    );
};

export default GalleryItem;



