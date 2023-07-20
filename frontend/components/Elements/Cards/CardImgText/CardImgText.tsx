import { FC } from "react";
import Image from "next/image";

import s from './CardImgText.module.scss'

interface CardImgTextProps{
    isHorizontal?: boolean,
    padding?: string,
    isBorder?: boolean,
    borderSize?: number,
    borderColor?: string,
    borderRadius?: number,
    imgUrl: string
    imgWidth: number
    imgHeight: number
    imgAlignItems?: string
    text: string
    textFontSize?: number
    textIsBold?: boolean
    textGap?: number
}

const CardImgText: FC<CardImgTextProps> =  ({
    isHorizontal = true,
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
    textGap = 0
 }) => {
    return(
        <div className={s.card} style={{
            display: "inline-flex",
            flexDirection: isHorizontal ? 'row' : 'column',
            alignItems: imgAlignItems,
            padding: padding,
            border: isBorder ? `${borderSize}px solid #${borderColor}` : 'none',
            borderRadius: `${borderRadius}px`
            }}>
            <Image src={imgUrl} width={imgWidth} height={imgHeight} />
            <p style={{
                marginLeft: isHorizontal ? `${textGap}px` : '0px',
                marginTop: !isHorizontal ? `${textGap}px` : '0px',
                fontSize: `${textFontSize}px`,
                fontWeight: textIsBold ? "bold" : "normal"
                }}>{text}</p>
        </div>
    )
}

export default CardImgText