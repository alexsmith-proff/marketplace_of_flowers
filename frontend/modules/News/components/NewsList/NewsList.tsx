import { FC } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../../../services/core/parse'
import { IElement } from '../../../../interfaces/section.interface'

import s from './NewsList.module.scss'

interface NewsListProps {
    news: IElement[]
}

const NewsList: FC<NewsListProps> = ({ news }) => {
    return (
        <ul className={s.list}>
            {
                news.map(item => (
                    <NewsItem
                        imgSrc={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(item, 'izobrazhenie')}`}
                        imgAlt={`${item.id}-img`}
                        title={getTextInTextBlockFromElement(item, 'nazvanie')}
                        text={getTextInTextBlockFromElement(item, 'opisanie')}
                        date={getTextInTextBlockFromElement(item, 'data')}
                        key={item.id}
                    />
                ))
            }
        </ul>
    )
}

export default NewsList;



