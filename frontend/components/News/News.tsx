import React, { FC } from 'react';

import s from './News.module.scss'

interface NewsProps {
}

const News: FC<NewsProps> = ({ }) => {

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
                        <li className={s.news__item}>
                            <img src="../../../img/news1.png" alt="news1" />
                            <div className={s.news__info}>
                                <h3 className={s.news__title}>С чем сочетаются тюльпаны</h3>
                                <p className={s.news__text}>Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.</p>
                                <div className={s.news__date}>18 декабря 2021</div>
                            </div>
                        </li>
                        <li className={s.news__item}>
                            <img src="../../../img/news2.png" alt="news2" />
                            <div className={s.news__info}>
                                <h3 className={s.news__title}>С чем сочетаются тюльпаны</h3>
                                <p className={s.news__text}>Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.</p>
                                <div className={s.news__date}>18 декабря 2021</div>
                            </div>
                        </li>
                        <li className={s.news__item}>
                            <img src="../../../img/news3.png" alt="news3" />
                            <div className={s.news__info}>
                                <h3 className={s.news__title}>С чем сочетаются тюльпаны</h3>
                                <p className={s.news__text}>Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.</p>
                                <div className={s.news__date}>18 декабря 2021</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default News;



