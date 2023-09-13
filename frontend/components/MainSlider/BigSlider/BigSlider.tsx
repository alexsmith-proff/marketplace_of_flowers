import { FC } from 'react'
import Slider, { Settings } from "react-slick";
import { IElement } from '../../../interfaces/section.interface';

import s from './BigSlider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BigSliderItem from '../BigSliderItem/BigSliderItem';

interface BigSliderProps {
    sliders: IElement[]
}

const BigSlider: FC<BigSliderProps> = ({ sliders }) => {
    const settingsBigSlider: Settings = {
        // dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 5000, // Плавность перехода 3 сек
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="bigSlider">
            <div className={s.slider}>
                {
                    <Slider {...settingsBigSlider}>
                        {
                            sliders.map(slider => <BigSliderItem slider={slider} key={slider.id} />)
                        }
                    </Slider>
                }

            </div>
        </div>
    )
}

export default BigSlider