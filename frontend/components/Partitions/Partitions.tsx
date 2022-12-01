import React, { FC } from 'react';

import s from './Partitions.module.scss'

interface PartitionsProps {
}

const Partitions: FC<PartitionsProps> = ({ }) => {

    return (
        <>
            <section className={s.partitions}>
                <div className="container">
                    <h2 className={s.partitions__mainTitle}>Разделы</h2>
                    <ul className={s.partitions__list}>
                        <li className={s.partitions__item}>
                            <img className={s.partitions__img} src="../../../img/partitions1.png" alt="partitions1" />
                            <div className={s.partitions__info}>
                                <h3 className={s.partitions__title}>Цветы поштучно</h3>
                                <div className={s.partitions__price}>от <span>500</span> ₽</div>
                            </div>
                        </li>
                        <li className={s.partitions__item}>
                            <img className={s.partitions__img} src="../../../img/partitions2.png" alt="partitions2" />
                            <div className={s.partitions__info}>
                                <h3 className={s.partitions__title}>Букеты из роз</h3>
                                <div className={s.partitions__price}>от <span>900</span> ₽</div>
                            </div>
                        </li>
                        <li className={s.partitions__item}>
                            <img className={s.partitions__img} src="../../../img/partitions3.png" alt="partitions3" />
                            <div className={s.partitions__info}>
                                <h3 className={s.partitions__title}>Каталог букетов</h3>
                                <div className={s.partitions__price}>от <span>3 500</span> ₽</div>
                            </div>
                        </li>
                        <li className={s.partitions__item}>
                            <img className={s.partitions__img} src="../../../img/partitions4.png" alt="partitions4" />
                            <div className={s.partitions__info}>
                                <h3 className={s.partitions__title}>Композиции из цветов</h3>
                                <div className={s.partitions__price}>от <span>2 900</span> ₽</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Partitions;



