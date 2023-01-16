import React, { FC } from 'react'
import { ISection } from '../../interfaces/section.interface';
import { getTextInTextBlockFromSection } from '../../services/core/parse';

import s from './SeoTwo.module.scss'

interface SeoTwoProps {
    seoSection: ISection
}

const SeoTwo: FC<SeoTwoProps> = ({ seoSection }) => {

    return (
        <>
            {
                seoSection && (
                    <section className={s.seoTwo}>
                        <div className="container">
                            <div className={s.seoTwo__MainTitle}>{getTextInTextBlockFromSection(seoSection, 'seo', 'title')}</div>
                            <p className={s.seoTwo__text}>{getTextInTextBlockFromSection(seoSection, 'seo', 'text')}</p>
                            <ul className={s.seoTwo__list}>
                                <li className={s.seoTwo__item}>{getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph1')}</li>
                                <li className={s.seoTwo__item}>{getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph2')}</li>
                                <li className={s.seoTwo__item}>{getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph3')}</li>
                                <li className={s.seoTwo__item}>{getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph4')}</li>
                                <li className={s.seoTwo__item}>{getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph5')}</li>
                            </ul>
                            <img className={s.seoTwo__bg} src="../../../img/seo2.png" alt="seo2 " />
                            <img className={s.seoTwo__bgImg} src="../../../img/seo2_img.png" alt="seo2-img" />
                        </div>
                    </section>
                )
            }
        </>
    )
};

export default SeoTwo;
