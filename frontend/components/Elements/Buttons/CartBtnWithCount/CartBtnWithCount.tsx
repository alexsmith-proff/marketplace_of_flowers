import { FC } from "react";
import CartBtn from "../CartBtn/CartBtn";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

import s from './CartBtnWithCount.module.scss'

const CartBtnWithCount: FC = () => {
    const buyProducts = useSelector((state: RootState) => state.cartProduct.products)
    
    return (
        <div className={s.btn}>
            <CartBtn />
            {
                buyProducts.length !== 0 ? <span className={s.count}>{buyProducts.length}</span> : <></>
            }
        </div>
    )
}

export default CartBtnWithCount