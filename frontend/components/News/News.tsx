import React, { FC } from 'react';
import { ISection } from '../../interfaces/section.interface';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../services/core/parse';

import s from './News.module.scss'
import NewsList from './NewsList/NewsList';
import ArrowRightText from '../Elements/Arrows/ArrowRightText/ArrowRightText';

interface NewsProps {
    newsSection: ISection
}

const News: FC<NewsProps> = ({ newsSection }) => {

    return (
        <>
            <section className={s.news}>
                <div className="container">
                    <div className={s.news__top}>
                        <div className={s.news__mainTitle}>Новости</div>
                        <ArrowRightText text='Все новости' />
                    </div>
                    <NewsList news={newsSection.elements} />
                </div>
            </section>
        </>
    );
};

export default News;



