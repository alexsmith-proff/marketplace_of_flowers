import { FC } from "react"
import InfoAboutText from "./components/InfoAboutText/InfoAboutText"
import InfoAboutEmployee from "./components/InfoAboutEmployee/InfoAboutEmployee"
import { getTextInTextBlockFromSection } from "../../services/core/parse"
import { ISection } from "../../interfaces/section.interface"

import s from './InfoAbout.module.scss'

interface InfoAboutProps {
    about: ISection
    employee: ISection
}

const InfoAbout: FC<InfoAboutProps> = ({ about, employee }) => {
    return (
        <section className={s.about}>
            <InfoAboutText
                textOne={getTextInTextBlockFromSection(about, 'about-main', 'main')}
                textTwo={getTextInTextBlockFromSection(about, 'about-main', 'about-1')}
                textThree={getTextInTextBlockFromSection(about, 'about-main', 'about-1')}
                subTitleOne="Основные причины сделать заказ в нашем цветочном салоне"
                subTitleTwo="Как сделать заказ в нашем интернет магазине?"
            />
            <InfoAboutEmployee employee={employee} />
        </section>
    )

}

export default InfoAbout