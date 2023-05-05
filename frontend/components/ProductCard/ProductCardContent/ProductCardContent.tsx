import { FC } from 'react'

import s from './ProductCardContent.module.scss'
import { IProduct } from '../../../interfaces/products.interface'
import ProductReviews from '../../ProductReviews/ProductReviews'

type TProductCardContent = {
    product: IProduct
}

const ProductCardContent: FC<TProductCardContent> = ({ product }) => {
    return (
        <div className={s.content}>
            <div className={s.wrap}>
                <h2 className={s.title}>{product.name}</h2>
                <ProductReviews stars={4.0} countReviews={15} />
            </div>
        </div>
    )
}

export default ProductCardContent