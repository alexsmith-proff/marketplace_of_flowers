import { FC } from "react";

import s from './CartBtn.module.scss'
import Link from "next/link";
import Image from "next/image";


const CartBtn: FC = () => {
    return (
        <div className={s.cartBtn}>
            <Link href='/cart'>
                <a>
                    <div className={s.btn}>
                        <div className={s.btnImg}>
                            <Image src='/img/cart.png' width={22} height={22} alt='cart-ico' />
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default CartBtn