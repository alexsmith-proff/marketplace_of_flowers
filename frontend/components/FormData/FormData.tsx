import { FC, useState } from "react";
import ProductOut from "../ProductOut/ProductOut";
import { IProductOutItem } from "../../interfaces/products.interface";

import s from './FormData.module.scss'

interface FormDataProps {}

// const productOut: IProductOutItem[] = [
//     {
//         text: 'Самовывоз', 
//         isActive: false
//     },
//     {
//         text: 'Доставка', 
//         isActive: true
//     }
// ]

const FormData: FC<FormDataProps> = ({}) => {
    const [productOut, setProductOut] = useState<IProductOutItem[]>([
        {
            text: 'Самовывоз', 
            isActive: false
        },
        {
            text: 'Доставка', 
            isActive: true
        }
    ])
    const handleClick = (index: number) => {
        setProductOut(productOut.map((item, ind) => index === ind ? {...item, isActive: true} : {...item, isActive: false}))
    }

    return (
        <div>
            <ProductOut productOut={productOut} Click={handleClick} />
        </div>
    )
}

export default FormData