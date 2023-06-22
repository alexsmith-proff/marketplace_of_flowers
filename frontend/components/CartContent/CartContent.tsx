import { FC } from "react";

import s from './CartContent.module.scss'
import CartList from "../CartList/CartList";
import CartTotal from "../CartTotal/CartTotal";

interface CartContentProps {}
const CartContent: FC<CartContentProps> = ({  }) => {
    return (
        <div>
            <h1 className={s.title}>Корзина</h1>
            <div className={s.wrap}>
                <CartList />
                <div>
                    <CartTotal />
                </div>
            </div>
        </div>
    )
}

export default CartContent