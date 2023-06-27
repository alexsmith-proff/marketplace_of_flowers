import { FC, useEffect, useRef } from "react";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import s from './CartContent.module.scss'
import { updateDeliveryCartProduct, updateTotalPriceCartProduct } from "../../redux/product/cartProductSlice";
import { getAllPrice } from "../../services/core/util";
import FormData from "../FormData/FormData";
import { FormikProps } from "formik";

interface CartContentProps { }
const CartContent: FC<CartContentProps> = ({ }) => {
    const dispatch = useDispatch()
    const { products, totalPrice, deliveryPrice } = useSelector((state: RootState) => state.cartProduct)

    const formRef = useRef<FormikProps<any>>()

    const handleClick = () => {
        console.log('ccccclick');
        
    }

    useEffect(() => {
        const totalPr = getAllPrice(products)
        if (totalPr >= 5000) dispatch(updateDeliveryCartProduct(0))
        else dispatch(updateDeliveryCartProduct(300))

        dispatch(updateTotalPriceCartProduct(totalPr))

    }, [products])

    return (
        <div className="container">
            <h1 className={s.title}>Корзина</h1>
            {
                products.length ? <>
                    <div className={s.wrap}>
                        <div className={s.left}>
                            <CartList products={products} />
                        </div>
                        <div className={s.right}>
                            <CartTotal info={{ totalPrice, delivery: deliveryPrice === 0 ? 'бесплатно' : `${deliveryPrice} ₽` }} formRef={formRef} Click={handleClick} />
                            <PaymentMethod />
                        </div>
                    </div>
                    <div className={s.formData}>
                        <FormData formRef={formRef} />
                    </div>
                </>
                    : <div className={s.noProducts}>В корзине нет товаров</div>
            }

        </div>
    )
}

export default CartContent