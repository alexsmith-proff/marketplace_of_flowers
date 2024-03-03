import { FC } from "react"

import s from './InfoAboutText.module.scss'

interface InfoAboutTextProps {
    textOne: string
    textTwo: string
    textThree: string
    subTitleOne: string
    subTitleTwo: string
}

const InfoAboutText: FC<InfoAboutTextProps> = ({ textOne, textTwo, textThree, subTitleOne, subTitleTwo }) => {
    return (
        <div className={s.textSection}>
            <h1 className={s.title}>О нас</h1>
            <p className={s.text}>{textOne}</p>
            <h2 className={s.subTitle}>{subTitleOne}</h2>
            <p className={s.text}>{textTwo}</p>
            <h2 className={s.subTitle}>{subTitleTwo}</h2>
            <p className={s.text}>{textThree}</p>
        </div>
    )

}

export default InfoAboutText