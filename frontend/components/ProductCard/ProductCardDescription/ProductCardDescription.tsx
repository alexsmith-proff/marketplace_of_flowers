import { FC } from 'react'

import s from './ProductCardDescription.module.scss'

type TProductCardDescription = {
}

const ProductCardDescription: FC<TProductCardDescription> = ({ }) => {
    return (
        <div className={s.product}>
            <div className='container'>
                <div>ProductCardDescription</div>
            </div>
        </div>
    )
}

export default ProductCardDescription