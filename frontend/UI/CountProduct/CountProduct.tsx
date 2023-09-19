import { FC } from 'react'

import s from './CountProduct.module.scss'

interface CountProductProps {
    enable?: boolean
    value: number
    increment: () => void
    decrement: () => void
}
const CountProduct: FC<CountProductProps> = ({ enable = true, value, increment, decrement }) => {
    return (
        <div className={enable ? s.counter : s.counter + ' ' + s.disable}>
            <div onClick={enable? decrement : null} className={enable? (s.incdec + ' ' + s.minus) : (s.incdec + ' ' + s.minus + ' ' + s.disable)}>_</div>
            <div>{value}</div>
            <div onClick={enable? increment: null} className={enable ? s.incdec : (s.incdec + ' ' + s.disable)}>+</div>
        </div>
    )
}

export default CountProduct