import React, { FC } from 'react';
import { ISection } from '../../interfaces/section.interface';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../services/core/parse';

import s from './News.module.scss'
import NewsList from './NewsList/NewsList';

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
                        <div className={s.news__allNews}>
                            <div className={s.allNews__text}>Все новости</div>
                            <img src="../../../img/arrow-next.png" alt="arrow-next" />
                        </div>
                    </div>
                    <NewsList news={newsSection.elements} />
                </div>
            </section>
        </>
    );
};

export default News;



