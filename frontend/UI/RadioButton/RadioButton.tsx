import { FC } from "react"
import s from './RadioButton.module.scss'

interface RadioButtonProps {
    color: string
    active: boolean
    onClickBut: () => void
}

const RadioButton: FC<RadioButtonProps> = ({ color, active = false, onClickBut }) => {
    return (
        <li className={active ? s.wrap + ' ' + s.active : s.wrap} onClick={() => onClickBut()}>
            <div className={s.radioButton} style={{backgroundColor: color}}></div>
        </li>
    )
}

export default RadioButton