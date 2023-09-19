import React, { FC } from 'react'
import Image from 'next/image';

import s from './SeoOneContent.module.scss'

interface SeoOneContentProps {
    title: string
    text: string[]
}

const SeoOneContent: FC<SeoOneContentProps> = ({ title, text }) => {

    return (
        <div>
            <div className={s.title}>{title}</div>
            <div className={s.block}>
                {
                    text.map((text, ind) => <p className={s.text} key={ind}>{text}<br /><br /></p>)
                }
            </div>
            <div className={s.bgLeft}>
                <Image src={'/img/seo1-left-bg.png'} width={280} height={190} alt="seo1-left-bg" />
            </div>
            <div className={s.bgRight}>
                <Image src={'/img/seo1-right-bg.png'} width={280} height={190} alt="seo1-right-bg" />
            </div>
        </div>
    )
};

export default SeoOneContent;
