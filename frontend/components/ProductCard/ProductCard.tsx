import { FC } from 'react'
import { IProduct } from '../../interfaces/products.interface'

import s from './ProductCard.module.scss'

type TProductCard = {
    product: IProduct
}

const ProductCard: FC<TProductCard> = ({ }) => {
    return (
        <div className={s.product}>
            <div className='container'>
                <div>ProductCard</div>
            </div>
        </div>
    )
}

export default ProductCard