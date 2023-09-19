import React, { FC } from 'react'
import SeoTwoContent from './SeoTwoContent/SeoTwoContent';
import { getTextInTextBlockFromSection } from '../../services/core/parse';
import { ISection } from '../../interfaces/section.interface';

import s from './SeoTwo.module.scss'

interface SeoTwoProps {
    seoSection: ISection
}

const SeoTwo: FC<SeoTwoProps> = ({ seoSection }) => {

    return (
        <section className={s.seoTwo}>
            <div className="container">
                <SeoTwoContent
                title={getTextInTextBlockFromSection(seoSection, 'seo', 'title')}
                text={[
                    getTextInTextBlockFromSection(seoSection, 'seo', 'title'),
                    getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph1'),
                    getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph2'),
                    getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph3'),
                    getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph4'),
                    getTextInTextBlockFromSection(seoSection, 'seo', 'paragraph5')
                ]}
                 />
            </div>
        </section>
    )
};

export default SeoTwo;
