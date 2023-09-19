import React, { FC } from 'react';
import ArrowRightText from '../../UI/Arrows/ArrowRightText/ArrowRightText';
import NewsList from './components/NewsList/NewsList';
import { ISection } from '../../interfaces/section.interface';

import s from './News.module.scss'

interface NewsProps {
    newsSection: ISection
}

const News: FC<NewsProps> = ({ newsSection }) => {

    return (
        <>
            <section className={s.news}>
                <div className="container">
                    <div className={s.top}>
                        <div className={s.title}>Новости</div>
                        <ArrowRightText text='Все новости' />
                    </div>
                    <NewsList news={newsSection.elements} />
                </div>
            </section>
        </>
    );
};

export default News;



