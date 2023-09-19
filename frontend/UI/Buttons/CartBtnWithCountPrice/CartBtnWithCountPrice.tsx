import { FC } from "react";
import CartBtnWithCount from "../CartBtnWithCount/CartBtnWithCount";
import { useAllPrice } from "../../../modules/Header/hooks/useAllPrice";

import s from './CartBtnWithCountPrice.module.scss'

const CartBtnWithCountPrice: FC = () => {
    const {allPrice} = useAllPrice()
    
    return (
        <div className={s.btn}>
            <CartBtnWithCount />
            <div className={s.price}>{allPrice} ₽</div>
        </div>
    )
}

export default CartBtnWithCountPrice