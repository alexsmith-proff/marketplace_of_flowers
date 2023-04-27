import { FC } from "react"
import s from './CardPrice.module.scss'

interface CardPriceProps {
    actualPrice: number
    crossPrice: number
}

const CardPrice: FC<CardPriceProps> = ({ actualPrice, crossPrice }) => {
    return (
        <div className={s.price}>
            <div className={s.actualPrice}>{actualPrice}</div>
            <div className={s.crossPrice}>{crossPrice}</div>
        </div>
    )
}

export default CardPrice