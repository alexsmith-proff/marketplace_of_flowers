import { FC } from "react";

import s from './HeaderText.module.scss'

interface HeaderTextProps {
    text: string
}

const HeaderText: FC<HeaderTextProps> = ({ text }) => {
    return (
        <div className={s.text}>{text}</div>
    )
}

export default HeaderText