import { FC } from "react";
import Image from "next/image";

import s from './CardImgText.module.scss'

interface CardImgTextProps {
    isHorizontal?: boolean,
    isWidthMax?: boolean,
    padding?: string,
    isBorder?: boolean,
    borderSize?: number,
    borderColor?: string,
    borderRadius?: number,
    imgUrl: string
    imgWidth: number
    imgHeight: number
    imgAlignItems?: string
    text?: string
    textFontSize?: number
    textIsBold?: boolean
    textGap?: number
    children?: React.ReactNode
}

const CardImgText: FC<CardImgTextProps> = ({
    isHorizontal = true,
    isWidthMax = false,
    padding = '0px',
    isBorder = false,
    borderSize = 1,
    borderColor = '000',
    borderRadius = 0,
    imgUrl,
    imgWidth,
    imgHeight,
    imgAlignItems = 'flex-start',
    text,
    textFontSize = 16,
    textIsBold = false,
    textGap = 0,
    children
}) => {
    return (
        <div className={s.card} style={{
            display: !isWidthMax ? "inline-flex" : "flex",
            flexDirection: isHorizontal ? 'row' : 'column',
            alignItems: imgAlignItems,
            padding: padding,
            border: isBorder ? `${borderSize}px solid #${borderColor}` : 'none',
            borderRadius: `${borderRadius}px`,
            boxSizing: "border-box"
        }}>
            <Image src={imgUrl} width={imgWidth} height={imgHeight} />
            {
                text && (
                    <p style={{
                        marginLeft: isHorizontal ? `${textGap}px` : '0px',
                        marginTop: !isHorizontal ? `${textGap}px` : '0px',
                        fontSize: `${textFontSize}px`,
                        fontWeight: textIsBold ? "bold" : "normal"
                    }}>{text}</p>
                )
            }
            <div style={{
                marginLeft: isHorizontal ? `${textGap}px` : '0px',
                marginTop: !isHorizontal ? `${textGap}px` : '0px',
            }}>
                {children}
            </div>
        </div>
    )
}

export default CardImgText