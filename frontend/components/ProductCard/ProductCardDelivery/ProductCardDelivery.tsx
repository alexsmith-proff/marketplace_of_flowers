import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import s from './ProductCardDelivery.module.scss'

type TProductCardDelivery = {}

const paymentImgs = ['/img/payment1.png', '/img/payment2.png', '/img/payment3.png', '/img/payment4.png', '/img/payment5.png', '/img/payment6.png', '/img/payment7.png', '/img/payment8.png']

const ProductCardDelivery: FC<TProductCardDelivery> = ({ }) => {
    return (
        <div className={s.product}>
            <div className='container'>
                <div className={s.block}>
                    <p className={s.title}>Доставка</p>
                    <ul>
                        <li>Самовывоз - бесплатно.</li>
                        <li>Доставка по Воронежу - от 300₽.</li>
                        <li>Доставка с 9:00 до 21:00.</li>
                        <li>При заказе от 5000₽ - доставка бесплатно.</li>
                    </ul>
                    <Link href={'#'}>
                        <a className={s.link}>Подробнее о доставке</a>
                    </Link>
                </div>
                <div className={s.block}>
                    <p className={s.title}>Способы оплаты</p>
                    <p>Вы можете оплатить наличными или картой:</p>
                    <ul className={s.paymentList}>
                        {
                            paymentImgs.map((img, ind) => <li key={ind}><Image src={img} width={50} height={30} /></li>)
                        }
                    </ul>
                </div>
                <div className={s.block}>
                    <p className={s.title}>Возврат товара</p>
                    <p className={s.text}>Если получателя не устроит качество цветов или работа флориста – напишите нам, в течение 24 часов! Мы решим данную проблему.</p>
                </div>

            </div>
        </div>
    )
}

export default ProductCardDelivery