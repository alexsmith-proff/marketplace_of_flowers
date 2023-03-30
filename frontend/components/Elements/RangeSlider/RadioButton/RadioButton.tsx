import { FC } from "react"
import s from './RadioButton.module.scss'

interface RadioButtonProps {
    color: string
}

const RadioButton: FC<RadioButtonProps> = ({ color }) => {
    return (
        <div className={s.wrap}>
            <div className={s.radioButton} style={{backgroundColor: color}}></div>
        </div>
    )
}

export default RadioButton