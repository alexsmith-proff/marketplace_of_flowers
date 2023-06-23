import { FC } from "react";

import s from './CartTotal.module.scss'

interface CartTotalProps {}
const CartTotal: FC<CartTotalProps> = ({  }) => {
    return (
        <div className={s.cartTotal}></div>
    )
}

export default CartTotal