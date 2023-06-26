import { FC } from "react";

import s from './ProductOut.module.scss'
import { IProductOutItem } from "../../interfaces/products.interface";

interface ProductOutProps {
    productOut: IProductOutItem[]
    Click: (number) => void
}

const ProductOut: FC<ProductOutProps> = ({ productOut, Click }) => {
    return (
        <div className={s.wrap}>
            {
                productOut?.map((item, index) => <div className={item.isActive ? (s.btn + ' ' + s.active) : s.btn} onClick={() => Click(index)} key={index}>{item.text}</div>)
            }
        </div>
    )
}

export default ProductOut