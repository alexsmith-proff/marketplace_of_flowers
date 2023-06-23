import { FC, useEffect } from "react";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import s from './CartContent.module.scss'
import { updateTotalPriceCartProduct } from "../../redux/product/cartProductSlice";
import { getAllPrice } from "../../services/core/util";

interface CartContentProps { }
const CartContent: FC<CartContentProps> = ({ }) => {
    const dispatch = useDispatch()
    const {products, totalPrice } = useSelector((state: RootState) => state.cartProduct)
    // const getAllPrice = () => products.reduce((acc, item) => acc + item.price * item.count, 0)

    useEffect(() => {
        dispatch(updateTotalPriceCartProduct(getAllPrice(products)))
    }, [products])

    console.log('aaaaa', products);
    
    
    return (
        <div className="container">
            <h1 className={s.title}>Корзина</h1>
            {
                products.length ? <div className={s.wrap}>
                    <div className={s.left}>
                        <CartList products={products} />
                    </div>
                    <div className={s.right}>
                        <CartTotal info={{ totalPrice, delivery: totalPrice >= 5000 ? 'бесплатно' : '300 ₽' }} />
                        <PaymentMethod />
                    </div>
                </div>
                    : <div className={s.noProducts}>В корзине нет товаров</div>
            }

        </div>
    )
}

export default CartContent