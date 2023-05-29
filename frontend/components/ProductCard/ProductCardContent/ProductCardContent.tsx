import { FC } from 'react'

import s from './ProductCardContent.module.scss'
import { IProduct } from '../../../interfaces/products.interface'
import ProductReviews from '../../ProductReviews/ProductReviews'
import RectButtons from '../../Elements/RectButtons/RectButtons'

type TProductCardContent = {
    product: IProduct
}

const ProductCardContent: FC<TProductCardContent> = ({ product }) => {
    console.log(product);
    
    return (
        <div className={s.content}>
            <div className={s.wrap}>
                <h2 className={s.title}>{product.name}</h2>
                <ProductReviews stars={4.0} countReviews={15} />
                <div className={s.paramWrap}>
                    <div className={s.param}>Высота: 50см</div>
                    <div className={s.param}>Ширина: 35см</div>
                </div>
                <div className={s.paramWrap}>
                    <div className={s.param}>Размер: Standart</div>
                    <div className={s.param}>Цвет: Красный</div>
                </div>
                <div className={s.titleParam}>Длина </div>
                <RectButtons buttons={['40 см', '50 см', '60 см', '70 см']} />

            </div>
        </div>
    )
}

export default ProductCardContent