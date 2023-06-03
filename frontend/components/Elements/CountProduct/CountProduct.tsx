import { FC } from 'react'

import s from './CountProduct.module.scss'

interface CountProductProps {
    value: number
    increment: () => void
    decrement: () => void
}
const CountProduct: FC<CountProductProps> = ({ value, increment, decrement }) => {
    return (
        <div className={s.counter}>
            <div onClick={decrement} className={s.incdec + ' ' + s.minus}>_</div>
            <div>{value}</div>
            <div onClick={increment} className={s.incdec}>+</div>
        </div>
    )
}

export default CountProduct