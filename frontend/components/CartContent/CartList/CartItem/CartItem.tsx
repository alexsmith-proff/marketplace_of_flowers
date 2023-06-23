import { FC, useState } from "react";

import s from './CartItem.module.scss'
import { IProductCart } from "../../../../interfaces/products.interface";
import Image from "next/image";
import CountProduct from "../../../Elements/CountProduct/CountProduct";
import CardPrice from "../../../Elements/CardPrice/CardPrice";
import DeleteBtn from "../../../Elements/Buttons/DeleteBtn/DeleteBtn";

interface CartItemProps {
    product: IProductCart
}
const CartItem: FC<CartItemProps> = ({ product }) => {
    const [countFlovers, setCountFlovers] = useState<number>(product.count)
    return (
        <div className={s.product}>
            <Image src={`${process.env.API_URI_DOCKER}/${product.main_image}`} width={90} height={90} objectFit="cover" />
            <div className={s.content}>
                <h2 className={s.title}>{product.name}</h2>
                <p className={s.vendorCode}>{product.vendor_code}</p>
            </div>
            <CountProduct enable={true} value={countFlovers} increment={null} decrement={null} />
            <div className={s.cardPrice}>
                <CardPrice actualPrice={product.price} crossPriceEnable={false} size={20} />
            </div>
            <DeleteBtn click={null} />
        </div>
    )
}

export default CartItem