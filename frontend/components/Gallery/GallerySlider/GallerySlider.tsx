import React, { FC } from 'react';
import Slider, { Settings } from "react-slick";
import { IElement } from '../../../../interfaces/section.interface';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface GallerySliderProps {
    sliders: IElement[],
    settings: Settings,
    className: string,
    sliderItem: React.ReactNode
}

const GallerySlider: FC<GallerySliderProps> = ({ sliders, settings, className, sliderItem }) => {
    return (
        <Slider className={className} {...settings}>
            {
                sliders.map(() => {sliderItem})
            }
        </Slider>
    );
};

export default GallerySlider;



