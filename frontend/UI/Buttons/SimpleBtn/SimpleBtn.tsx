import { FC } from "react";

import s from './SimpleBtn.module.scss'

interface SimpleBtnProps {
    text: string
    maxWith?: number
    isMaxWidth?: boolean
    paddingTop?: number
    paddingBottom?: number
    paddingLeft?: number
    paddingRight?: number
    fontSize?: number,
    color?: string,
    backgroundColor?: string,
    border?: string
    borderRadius?: number,
    click: () => void
}

const SimpleBtn: FC<SimpleBtnProps> = ({
    text,
    maxWith = null,
    isMaxWidth,
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0,
    fontSize = 14,
    color = null,
    backgroundColor = null,
    border = null,
    borderRadius = null,
    click
}) => {
    return (
        <div
            data-testid="comp"
            className={isMaxWidth ? (s.btn + ' ' + s.max) : s.btn}
            style={
                {
                    width: `${maxWith}px`,
                    paddingTop: `${paddingTop}px`,
                    paddingBottom: `${paddingBottom}px`,
                    paddingLeft: `${paddingLeft}px`,
                    paddingRight: `${paddingRight}px`,
                    fontSize: `${fontSize}px`,
                    color: color,
                    backgroundColor: backgroundColor,
                    border: border,
                    borderRadius: `${borderRadius}px`,
                }
            }
            onClick={click}
        >{text}</div>
    )
}

export default SimpleBtn