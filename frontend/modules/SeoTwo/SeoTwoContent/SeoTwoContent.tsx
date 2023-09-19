import React, { FC } from 'react'
import Image from 'next/image';

import s from './SeoTwoContent.module.scss'

interface SeoTwoContentProps {
    title: string
    text: string[]
}

const SeoTwoContent: FC<SeoTwoContentProps> = ({ title, text }) => {

    return (
        <div>
            <div className={s.title}>{title}</div>
            <ul className={s.list}>
                {
                    text.map((text, ind) => <li className={s.item} key={ind}>{text}</li>)
                }
            </ul>
            <div className={s.bg}>
                <Image src={'/img/seo2.png'} width={317} height={473} alt="bg-img" />
            </div>
            <div className={s.bgImg}>
                <Image src={'/img/seo2_img.png'} width={240} height={240} alt="seo2-img" />
            </div>
        </div>
    )
};

export default SeoTwoContent;
