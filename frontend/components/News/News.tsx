import React, { FC } from 'react';
import { ISection } from '../../interfaces/section.interface';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../services/core/parse';

import s from './News.module.scss'

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
                    <ul className={s.news__list}>
                        {
                            newsSection && newsSection.elements.map(el => (
                                <li className={s.news__item} key={el.id}>
                                    <img src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(el, 'izobrazhenie')} alt={getTextInTextBlockFromElement(el, 'alt')} />
                                    <div className={s.news__info}>
                                        <h3 className={s.news__title}>{getTextInTextBlockFromElement(el, 'nazvanie')}</h3>
                                        <p className={s.news__text}>{getTextInTextBlockFromElement(el, 'opisanie')}</p>
                                        <div className={s.news__date}>{getTextInTextBlockFromElement(el, 'data')}</div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default News;



