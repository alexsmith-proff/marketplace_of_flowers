import { FC } from 'react'

import s from './CheckBox.module.scss'

interface CheckBoxProps { 
    name: string
}

const CheckBox: FC <CheckBoxProps> = ({ name }) => {
    return (
        <li className={s.checkBox}>
            <input className={s.box} type="checkbox" />
            <label className={s.label}>{name}</label>
        </li>
    )
}

export default CheckBox