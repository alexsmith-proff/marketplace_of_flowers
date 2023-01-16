import React, { FC } from 'react'
import { ISection } from '../../interfaces/section.interface';
import { getTextInTextBlockFromElement, getTextInTextBlockFromSection } from '../../services/core/parse';

import s from './SeoOne.module.scss'

interface SeoOneProps {
    seoSection: ISection
}

const SeoOne: FC<SeoOneProps> = ({ seoSection }) => {

    console.log('seoSection', seoSection);


    return (
        <>
            {/* { */}
                {/* seoSection && */}
                <section className={s.seoOne}>
                    <div className="container">
                        <div className={s.seoOne__mainTitle}>{getTextInTextBlockFromSection(seoSection, 'seo', 'title')}</div>
                        <div className={s.seoOne__block}>
                            <p className={s.seoOne__text}>{getTextInTextBlockFromSection(seoSection, 'seo', 'text1')}<br/><br/></p>
                            <p className={s.seoOne__text}>{getTextInTextBlockFromSection(seoSection, 'seo', 'text2')}<br/><br/></p>
                            <p className={s.seoOne__text}>{getTextInTextBlockFromSection(seoSection, 'seo', 'text3')}<br/><br/></p>
                            <p className={s.seoOne__text}>{getTextInTextBlockFromSection(seoSection, 'seo', 'text4')}<br/><br/></p>
                        </div>
                    </div>
                    <img className={s.seoOne__bgLeft} src="../../../img/seo1-left-bg.png" alt="seo1-left-bg" />
                    <img className={s.seoOne__bgRight} src="../../../img/seo1-right-bg.png" alt="seo1-right-bg" />
                </section>
            {/* } */}
        </>
    )
};

export default SeoOne;
