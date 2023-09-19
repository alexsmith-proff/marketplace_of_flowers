import React, { FC } from 'react'
import SeoOneContent from './components/SeoOneContent/SeoOneContent';
import { getTextInTextBlockFromSection } from '../../services/core/parse';
import { ISection } from '../../interfaces/section.interface';

import s from './SeoOne.module.scss'

interface SeoOneProps {
    seoSection: ISection
}

const SeoOne: FC<SeoOneProps> = ({ seoSection }) => {

    return (
        <section className={s.seoOne}>
            <div className="container">
                <SeoOneContent
                    title={getTextInTextBlockFromSection(seoSection, 'seo', 'title')}
                    text={[
                        getTextInTextBlockFromSection(seoSection, 'seo', 'text1'),
                        getTextInTextBlockFromSection(seoSection, 'seo', 'text2'),
                        getTextInTextBlockFromSection(seoSection, 'seo', 'text3'),
                        getTextInTextBlockFromSection(seoSection, 'seo', 'text4')
                    ]}
                />
            </div>
        </section>
    )
};

export default SeoOne;
