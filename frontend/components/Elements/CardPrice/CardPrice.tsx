import { FC } from "react"
import s from './CardPrice.module.scss'

interface CardPriceProps {
    actualPrice: number
    crossPrice?: number
    crossPriceEnable?: boolean
    size: number
}

const CardPrice: FC<CardPriceProps> = ({ actualPrice, crossPrice, crossPriceEnable = true, size }) => {
    return (
        <div className={s.price}>
            <div className={s.actualPrice} style={{fontSize: `${size}px`}}>{actualPrice} ₽</div>
            {
                crossPriceEnable ? <div className={s.crossPrice} style={{fontSize: `${size}px`}}>{crossPrice} ₽</div> : <></>
            }
        </div>
    )
}

export default CardPrice