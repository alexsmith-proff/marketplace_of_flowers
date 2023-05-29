import { FC, useState } from 'react'

import s from './RectButtons.module.scss'

type TRectButtons = {
    buttons: string[]
}

const RectButtons: FC<TRectButtons> = ({ buttons }) => {
    const [activeItem, setActiveItem] = useState<number>(0)
    const handleClickBtn = (index) => {
        setActiveItem(index)
    }
    return (
        <ul className={s.list}>
            {
                buttons.map((item, index) => <li className={s.key + ' ' + (activeItem === index ? s.active : '')} onClick={() => handleClickBtn(index)} key={index}>{item}</li>)
            }
        </ul>
    )
}

export default RectButtons