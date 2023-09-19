import React, { FC } from 'react';
import SliderCardList from './components/SliderCardList/SliderCardList';
import { ISection } from '../../interfaces/section.interface';

import s from './MainCards.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MainCardsProps {
    cards: ISection
}

const MainCards: FC<MainCardsProps> = ({ cards }) => {
    return (
        <>
            <section className={s.cards}>
                <div className="container">
                    <h2 className={s.title}>Букеты цветов с доставкой</h2>
                    <SliderCardList cards={cards} />
                </div>
            </section>
        </>
    );
};

export default MainCards;



