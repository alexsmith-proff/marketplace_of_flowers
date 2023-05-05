import { FC } from 'react'
import { IProduct } from '../../interfaces/products.interface'

import s from './ProductCard.module.scss'
import ProductCardDescription from './ProductCardDescription/ProductCardDescription'
import ProductCardImageSlider from './ProductCardImageSlider/ProductCardImageSlider'
import ProductCardContent from './ProductCardContent/ProductCardContent'
import ProductCardDelivery from './ProductCardDelivery/ProductCardDelivery'

type TProductCard = {
    product: IProduct
}

const ProductCard: FC<TProductCard> = ({ product }) => {
    return (
        <div className={s.product}>
            <div className='container'>
                <div className={s.wrap}>
                    <div>
                        <div className={s.top}>
                            <ProductCardImageSlider mainImage={product.main_image} images={product.filenames_images} />
                            <ProductCardContent />
                        </div>
                        <div className={s.description}>
                            <ProductCardDescription />
                        </div>
                    </div>
                    <ProductCardDelivery />
                </div>
            </div>
        </div>
    )
}

export default ProductCard