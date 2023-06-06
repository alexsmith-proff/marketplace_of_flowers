import { FC, useState } from "react";
import { BsFillBasket3Fill } from 'react-icons/bs';

import s from './ToCartBtn.module.scss'

interface ToCartBtnProps {
    dark?: boolean
    textAfterClick?: string
    isBuyProduct?: boolean
    onClick?: (any, boolean) => void | undefined
    paddingTopBottom?: number
}

const ToCartBtn: FC<ToCartBtnProps> = ({ dark = false, textAfterClick, isBuyProduct, onClick, paddingTopBottom }) => {
    const [isBuy, setIsBuy] = useState<boolean>(isBuyProduct)

    const handleClickBtn = (e) => {
        setIsBuy(!isBuy)
        if (onClick) onClick(e, isBuy)
    }
    // console.log('darkdarkdark');


    return (
        <div>
            <div
                className={dark ? (isBuy ? s.btn + ' ' + s.dark + s.clicked : s.btn + ' ' + s.dark) : (isBuy ? s.btn + ' ' + s.clicked : s.btn)}
                style={{ paddingTop: `${paddingTopBottom}px`, paddingBottom: `${paddingTopBottom}px` }}
                onClick={handleClickBtn}
            >
                <BsFillBasket3Fill size={18} className={s.ico} />
                <div className={s.text}>{isBuy ? (textAfterClick ? textAfterClick : 'В корзину') : 'В корзину'}</div>
            </div>
        </div>
    )
}

export default ToCartBtn