import { FC, useState } from 'react'

import s from './RectButtons.module.scss'
import { IRectButton } from '../../../interfaces/elements'

type TRectButtons = {
    buttons?: IRectButton[],
}

const RectButtons: FC<TRectButtons> = ({ buttons }) => {
    const [activeItem, setActiveItem] = useState<number>(0)
    const handleClickBtn = (index) => {
        setActiveItem(index)
    }
    return (
        <ul className={s.list}>
            {
                buttons && buttons.map((item, index) => <li className={s.key + ' ' + (activeItem === index ? s.active : '')} onClick={() => handleClickBtn(index)} key={index}>{item.name}</li>)
            }
        </ul>
    )
}

export default RectButtons