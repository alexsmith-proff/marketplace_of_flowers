import { FC } from "react"
import PartitionItem from "../PartitionItem/PartitionItem"
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../../../services/core/parse"
import { IElement } from "../../../../interfaces/section.interface"

import s from './PartitionList.module.scss'

interface PartitionListProps {
    partitions: IElement[]
}

const PartitionList: FC<PartitionListProps> = ({ partitions }) => {
    return (
        <ul className={s.list}>
            {
                partitions.map(item => (
                    <PartitionItem
                        imgSrc={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(item, 'image')}`}
                        imgAlt='Partition-img'
                        title={getTextInTextBlockFromElement(item, 'title')}
                        price={getTextInTextBlockFromElement(item, 'cena')}
                        key={item.id}
                    />
                ))
            }
        </ul>
    )
}

export default PartitionList