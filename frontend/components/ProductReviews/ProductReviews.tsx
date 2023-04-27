import { FC } from "react";

import s from './ProductReviews.module.scss'
import Image from "next/image";

interface ProductReviewsProps {
    stars: number
    countReviews: number
}

const ProductReviews: FC<ProductReviewsProps> = ({ stars, countReviews }) => {
    return (
        <div className={s.wrap}>
            <Image src='/img/product-star.png' width={12} height={12} alt="product-star-img" />
            <div className={s.text}><span>{stars.toFixed(1)}</span> ({countReviews} отзывов)</div>
        </div>
    )
}

export default ProductReviews