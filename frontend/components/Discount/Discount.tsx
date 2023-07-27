import { FC } from "react"

import s from './Discount.module.scss'

interface DiscountProps{
    discount: number
}

const Discount: FC<DiscountProps> = ({ discount }) => {
    return(
        <div className={s.discount}>
            <p className={s.discount__title}>Ваша скидка <span>{discount}%</span></p>
            <p className={s.discount__text}>Цены на сайте отображаются с учётом вашей скидки</p>
        </div>
    )
}

export default Discount