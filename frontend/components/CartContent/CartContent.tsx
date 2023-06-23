import { FC } from "react";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import s from './CartContent.module.scss'

interface CartContentProps { }
const CartContent: FC<CartContentProps> = ({ }) => {
    const products = useSelector((state: RootState) => state.cartProduct.products)
    return (
        <div className="container">
            <h1 className={s.title}>Корзина</h1>
            {
                products.length ? <div className={s.wrap}>

                    <div className={s.left}>
                        <CartList products={products} />
                    </div>
                    <div className={s.right}>
                        <CartTotal info={{ totalPrice: 17576, delivery: 'бесплатно' }} />
                        <PaymentMethod />
                    </div>
                </div>
                    : <div className={s.noProducts}>В корзине нет товаров</div>
            }

        </div>
    )
}

export default CartContent