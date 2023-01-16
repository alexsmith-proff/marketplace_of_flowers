import React, { FC } from 'react';
import { ISection } from '../../interfaces/section.interface';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../services/core/parse';

import s from './Partitions.module.scss'

interface PartitionsProps {
    partitionSection: ISection
}

const Partitions: FC<PartitionsProps> = ({ partitionSection }) => {

    return (
        <>
            <section className={s.partitions}>
                <div className="container">
                    <h2 className={s.partitions__mainTitle}>Разделы</h2>
                    <ul className={s.partitions__list}>
                        {
                            partitionSection && partitionSection.elements.map(el => (
                                <li className={s.partitions__item} key={el.id}>
                                    <img className={s.partitions__img} src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(el, 'image')} alt={getTextInTextBlockFromElement(el, 'alt')} />
                                    <div className={s.partitions__info}>
                                        <h3 className={s.partitions__title}>{getTextInTextBlockFromElement(el, 'title')}</h3>
                                        <div className={s.partitions__price}>от <span>{getTextInTextBlockFromElement(el, 'cena')}</span> ₽</div>
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

export default Partitions;



