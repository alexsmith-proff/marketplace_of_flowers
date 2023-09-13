import { FC } from 'react'
import Slider, { Settings } from "react-slick";
import SmallSliderItem from '../SmallSliderItem/SmallSliderItem';
import { IElement } from '../../../interfaces/section.interface';

import s from './SmallSlider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SmallSliderProps {
    sliders: IElement[]
}

const SmallSlider: FC<SmallSliderProps> = ({ sliders }) => {
    const settingsSmallSlider: Settings = {
        // dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 1000, // Плавность перехода 3 сек
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="SmallSlider">
            <div className={s.slider}>
                <div className={s.title}>Букет недели</div>
                {
                    <Slider {...settingsSmallSlider}>
                        {
                            sliders.map(slider => <SmallSliderItem slider={slider} key={slider.id} />)
                        }
                    </Slider>
                }

            </div>
        </div>
    )
}

export default SmallSlider