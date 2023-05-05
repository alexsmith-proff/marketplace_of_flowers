import { FC } from 'react'

import s from './ProductCardImageSlider.module.scss'

type TProductCardImageSlider = {
}

const ProductCardImageSlider: FC<TProductCardImageSlider> = ({ }) => {
    return (
        <div className={s.product}>
            <div className='container'>
                <div>ProductCardImageSlider</div>
            </div>
        </div>
    )
}

export default ProductCardImageSlider