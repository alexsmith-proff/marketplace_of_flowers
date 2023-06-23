import { FC } from "react";

import s from './SimpleBtn.module.scss'

interface SimpleBtnProps {
    text: string
    isMaxWidth?: boolean
    paddingTop?: number
    paddingBottom?: number
    paddingLeft?: number
    paddingRight?: number
    click: () => void
}

const SimpleBtn: FC<SimpleBtnProps> = ({
    text,
    isMaxWidth,
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0,
    click
}) => {
    return (
        <div
            className={isMaxWidth ? (s.btn + ' ' + s.max) : s.btn}
            style={{ paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px`, paddingLeft: `${paddingLeft}px`, paddingRight: `${paddingRight}px` }}
            onClick={click}
        >{text}</div>
    )
}

export default SimpleBtn