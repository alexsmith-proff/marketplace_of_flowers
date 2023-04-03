import { FC } from 'react'

import s from './CheckBox.module.scss'

interface CheckBoxProps { 
    id: number
    name: string
    checked?: boolean
    onChangeCheckBox: () => void
}

const CheckBox: FC <CheckBoxProps> = ({ id, name, checked, onChangeCheckBox }) => {
    return (
        <li className={s.checkBox}>
            <input className={s.box} type="checkbox" id={String(id)} checked={checked} onChange={onChangeCheckBox} />
            <label htmlFor={String(id)}>{name}</label>
        </li>
    )
}

export default CheckBox