import { FC, useState, useEffect } from "react"
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement, getTextInTextBlockFromSection } from "../../services/core/parse"
import { ISection } from "../../interfaces/section.interface"

import s from './InfoAbout.module.scss'
import Image from "next/image"

interface InfoAboutProps {
    about: ISection
    employee: ISection
}

const InfoAbout: FC<InfoAboutProps> = ({ about, employee }) => {
    return (
        <section className={s.about}>
            <div className={s.textSection}>
                <h1 className={s.title}>О нас</h1>
                <p className={s.text}>{getTextInTextBlockFromSection(about, 'about-main', 'main')}</p>
                <h2 className={s.subTitle}>Основные причины сделать заказ в нашем цветочном салоне</h2>
                <p className={s.text}>{getTextInTextBlockFromSection(about, 'about-main', 'about-1')}</p>
                <h2 className={s.subTitle}>Как сделать заказ в нашем интернет магазине?</h2>
                <p className={s.text}>{getTextInTextBlockFromSection(about, 'about-main', 'about-1')}</p>
            </div>
            <div className={s.employee}>
                <h2 className={s.title}>Наши сотрудники:</h2>
                <ul className={s.list}>
                    {
                        employee.elements.map((item, ind) => (
                        <li className={s.item} key={ind}>
                            <Image className={s.img} src={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(item, 'img')}`} width={180} height={180} />
                            <p className={s.name}>{getTextInTextBlockFromElement(item, 'name')}</p>
                        </li>
                        ))
                    }
                </ul>
            </div>

        </section>
    )

}

export default InfoAbout