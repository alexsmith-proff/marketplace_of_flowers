import React, { FC, useState, Ref } from "react";

import s from './CartTotal.module.scss'
import { IProductTotalInfo } from "../../../interfaces/products.interface";
import CardPrice from "../../Elements/CardPrice/CardPrice";
import SimpleBtn from "../../Elements/Buttons/SimpleBtn/SimpleBtn";
import { FormikProps } from "formik";

interface CartTotalProps {
    info: IProductTotalInfo,
    // formRef: React.Ref<FormikProps<any>>
    formRef: React.RefObject<FormikProps<any>>
    Click: () => void
}
const CartTotal: FC<CartTotalProps> = ({ info, formRef, Click }) => {
    const [discount, setDiscount] = useState<number>(0)
    const handleClick = () => {
        // console.log('formRef', formRef.current);
        formRef.current.handleSubmit()
        
        
    }
    return (
        <div className={s.cartTotal}>
            <div className={s.text}>
                <div className={s.total}>Итого:</div>
                <CardPrice actualPrice={info.totalPrice} crossPriceEnable={false} size={18} />
            </div>
            <div className={s.text}>
                <div className={s.name}>Скидка</div>
                <p className={s.value}>{discount} ₽</p>
            </div>
            <div className={s.text}>
                <div className={s.name}>Доставка</div>
                <p className={s.value}>{info.delivery}</p>
            </div>
            <div className={s.btn}>
                <SimpleBtn text="Оформить заказ" paddingTop={13} paddingBottom={13} click={handleClick} />
            </div>
        </div>
    )
}

export default CartTotal