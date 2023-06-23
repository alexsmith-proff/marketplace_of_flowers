import { FC, useEffect, useState } from "react";
import Image from "next/image";
import CountProduct from "../../../Elements/CountProduct/CountProduct";
import CardPrice from "../../../Elements/CardPrice/CardPrice";
import DeleteBtn from "../../../Elements/Buttons/DeleteBtn/DeleteBtn";
import { useDispatch } from "react-redux";
import { deleteCartProduct, updateCountCartProduct } from "../../../../redux/product/cartProductSlice";
import { IProductCart } from "../../../../interfaces/products.interface";

import s from './CartItem.module.scss'
import Link from "next/link";

interface CartItemProps {
    product: IProductCart
}
const CartItem: FC<CartItemProps> = ({ product }) => {
    const dispatch = useDispatch()
    const [countFlovers, setCountFlovers] = useState<number>(product.count)
    const handleIncrement = () => {
        if (countFlovers < product.count_in_stock) {
            setCountFlovers(prev => prev + 1)
        }
    }
    const handleDecrement = () => {
        if (countFlovers > 1) {
            setCountFlovers(prev => prev - 1)
            console.log('handleDecrement');
        }
    }

    const handleDelete = () => {
        dispatch(deleteCartProduct(product.id))
    }

    useEffect(() => {
        dispatch(updateCountCartProduct({ id: product.id, count: countFlovers }))
    }, [countFlovers])



    return (
        <div className={s.product}>
            <Link href={`/product/${product.id}`}>
                <a>
                    <Image src={`${process.env.API_URI_DOCKER}/${product.main_image}`} width={90} height={90} objectFit="cover" />
                </a>
            </Link>
            <div className={s.content}>
                <h2 className={s.title}>{product.name}</h2>
                <p className={s.vendorCode}>{product.vendor_code}</p>
            </div>
            <CountProduct enable={true} value={countFlovers} increment={handleIncrement} decrement={handleDecrement} />
            <div className={s.cardPrice}>
                <CardPrice actualPrice={product.price * product.count} crossPriceEnable={false} size={20} />
            </div>
            <DeleteBtn click={handleDelete} />
        </div>
    )
}

export default CartItem