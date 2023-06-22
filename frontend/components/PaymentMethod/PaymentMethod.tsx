import { FC } from "react";

import s from './PaymentMethod.module.scss'
import Image from "next/image";

interface PaymentMethodProps {}

const paymentImgs = ['/img/payment1.png', '/img/payment2.png', '/img/payment3.png', '/img/payment4.png', '/img/payment5.png', '/img/payment6.png', '/img/payment7.png', '/img/payment8.png']

const PaymentMethod: FC<PaymentMethodProps> = ({  }) => {
    return (
        <div>
            <p className={s.title}>Способы оплаты</p>
                    <p>Вы можете оплатить наличными или картой:</p>
                    <ul className={s.paymentList}>
                        {
                            paymentImgs.map((img, ind) => <li key={ind}><Image src={img} width={50} height={30} /></li>)
                        }
                    </ul>
        </div>
    )
}

export default PaymentMethod