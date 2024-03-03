import { FC } from "react"
import Image from "next/image"

import s from './InfoAboutEmployeeItem.module.scss'

interface InfoAboutEmployeeItemProps {
    name: string
    fileNameImg: string
}

const InfoAboutEmployeeItem: FC<InfoAboutEmployeeItemProps> = ({ name, fileNameImg }) => {
    return (
        <li className={s.item}>
            <Image className={s.img} src={fileNameImg} width={180} height={180} alt="employeeImg" />
            <p className={s.name}>{name}</p>
        </li>
    )

}

export default InfoAboutEmployeeItem