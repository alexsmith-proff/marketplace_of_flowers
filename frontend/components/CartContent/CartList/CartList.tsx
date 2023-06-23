import { FC } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import CartItem from "./CartItem/CartItem";
import { IProductCart } from "../../../interfaces/products.interface";

import s from './CartList.module.scss'

interface CartListProps { }
const CartList: FC<CartListProps> = ({ }) => {
    const products = useSelector((state: RootState) => state.cartProduct.products)
    return (
        <div className={s.cartList}>
            <div className={s.top}>
                <p>Товары в корзине</p>
                <div className={s.clear}>Очистить корзину</div>
            </div>
            <ul className={s.list}>
                {
                    products.map((product) => (
                        <div className={s.cartItem}>
                            <CartItem product={product} key={product.id} />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default CartList