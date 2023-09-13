import React, { FC } from 'react';
import BigSlider from './BigSlider/BigSlider';
import SmallSlider from './SmallSlider/SmallSlider';
import { ISection } from '../../interfaces/section.interface';

import s from './MainSlider.module.scss'

interface MainSliderProps {
    bigSliderSection: ISection
    smallSliderSection: ISection
}

const MainSlider: FC<MainSliderProps> = ({ bigSliderSection, smallSliderSection }) => {
    return (
        <div className={s.sliders}>
            <div className="container">
                <div className={s.wrap}>
                    <BigSlider sliders={bigSliderSection.elements} />
                    <SmallSlider sliders={smallSliderSection.elements} />
                </div>
            </div >
        </div >
    );
};

export default MainSlider;



