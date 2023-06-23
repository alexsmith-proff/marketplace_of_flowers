import { FC } from "react";

import s from './CartTotal.module.scss'
import { IProductTotalInfo } from "../../../interfaces/products.interface";
import CardPrice from "../../Elements/CardPrice/CardPrice";
import SimpleBtn from "../../Elements/Buttons/SimpleBtn/SimpleBtn";

interface CartTotalProps {
    info: IProductTotalInfo
}
const CartTotal: FC<CartTotalProps> = ({ info }) => {
    return (
        <div className={s.cartTotal}>
            <div className={s.text}>
                <div className={s.total}>Итого:</div>
                <CardPrice actualPrice={info.totalPrice} crossPriceEnable={false} size={18} />
            </div>
            <div className={s.text}>
                <div className={s.name}>Доставка</div>
                <p className={s.value}>{info.delivery}</p>
            </div>
            <div className={s.btn}>
                <SimpleBtn text="Оформить заказ" paddingTop={13} paddingBottom={13} click={null} />
            </div>
        </div>
    )
}

export default CartTotal