import { FC } from 'react'

import s from './ProductCardContent.module.scss'

type TProductCardContent = {
}

const ProductCardContent: FC<TProductCardContent> = ({ }) => {
    return (
        <div className={s.product}>
            <div className='container'>
                <div>ProductCardContent</div>
            </div>
        </div>
    )
}

export default ProductCardContent