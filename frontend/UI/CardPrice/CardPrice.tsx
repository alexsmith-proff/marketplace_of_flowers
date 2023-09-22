import { FC } from "react"

import s from './CardPrice.module.scss'

interface CardPriceProps {
    actualPrice: number
    crossPrice?: number
    size: number
}

const CardPrice: FC<CardPriceProps> = ({ actualPrice, crossPrice, size }) => {
    return (
        <div className={s.price}>
            <div className={s.actualPrice} style={{fontSize: `${size}px`}}>{actualPrice} ₽</div>
            {
                crossPrice ? <div className={s.crossPrice} style={{fontSize: `${size}px`}}>{crossPrice} ₽</div> : <></>
            }
        </div>
    )
}

export default CardPrice