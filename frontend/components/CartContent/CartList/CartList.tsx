import { FC } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import CartItem from "./CartItem/CartItem";
import { IProductCart } from "../../../interfaces/products.interface";

import s from './CartList.module.scss'

interface CartListProps { 
    products: IProductCart[]
}
const CartList: FC<CartListProps> = ({ products }) => {
    
    return (
        <div className={s.cartList}>
            <div className={s.top}>
                <p>Товары в корзине</p>
                <div className={s.clear}>Очистить корзину</div>
            </div>
            <ul className={s.list}>
                {
                    products.map((product) => (
                        <div className={s.cartItem} key={product.id}>
                            <CartItem product={product} />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default CartList