import { FC } from "react"
import InfoAboutEmployeeItem from "../InfoAboutEmployeeItem/InfoAboutEmployeeItem"
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../../../services/core/parse"
import { ISection } from "../../../../interfaces/section.interface"

import s from './InfoAboutEmployee.tsx.module.scss'

interface InfoAboutEmployeeProps {
    employee: ISection
}

const InfoAboutEmployee: FC<InfoAboutEmployeeProps> = ({ employee }) => {
    return (
        <div className={s.employee}>
            <h2 className={s.title}>Наши сотрудники:</h2>
            <ul className={s.list}>
                {
                    employee.elements.map((item, ind) => (
                        <InfoAboutEmployeeItem
                            name={getTextInTextBlockFromElement(item, 'name')}
                            fileNameImg={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(item, 'img')}`}
                            key={ind}
                        />
                    ))
                }
            </ul>
        </div>
    )

}

export default InfoAboutEmployee