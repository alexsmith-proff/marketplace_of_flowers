import { FC } from 'react'

import s from './ProductCardDescription.module.scss'

type TProductCardDescription = {
    description: string
}

const ProductCardDescription: FC<TProductCardDescription> = ({ description }) => {
    return (
        <div className={s.product}>
            <div className='container'>
                <div className={s.description}>{description}</div>
            </div>
        </div>
    )
}

export default ProductCardDescription