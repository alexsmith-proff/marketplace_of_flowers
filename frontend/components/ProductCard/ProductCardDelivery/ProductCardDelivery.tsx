import { FC } from 'react'

import s from './ProductCardDelivery.module.scss'

type TProductCardDelivery = {
}

const ProductCardDelivery: FC<TProductCardDelivery> = ({ }) => {
    return (
        <div className={s.product}>
            <div className='container'>
                <div>ProductCardDelivery</div>
            </div>
        </div>
    )
}

export default ProductCardDelivery