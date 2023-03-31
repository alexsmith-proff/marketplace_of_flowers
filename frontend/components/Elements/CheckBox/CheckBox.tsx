import { FC } from 'react'

import s from './CheckBox.module.scss'

interface CheckBoxProps { 
    id: number
    name: string
}

const CheckBox: FC <CheckBoxProps> = ({ id, name }) => {
    return (
        <li className={s.checkBox}>
            <input className={s.box} type="checkbox" id={String(id)} />
            <label htmlFor={String(id)}>{name}</label>
        </li>
    )
}

export default CheckBox