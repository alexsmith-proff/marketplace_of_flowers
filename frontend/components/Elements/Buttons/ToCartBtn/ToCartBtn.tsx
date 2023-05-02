import { FC, useState } from "react";
import { BsFillBasket3Fill } from 'react-icons/bs';

import s from './ToCartBtn.module.scss'

interface ToCartBtnProps {
    dark?: boolean
    textAfterClick?: string
    onClick?: (e) => void | undefined
    // MouseEventHandler<T> | undefined;
}

const ToCartBtn: FC<ToCartBtnProps> = ({ dark = false, textAfterClick, onClick }) => {
    const [isEnable, setIsEnable] = useState<boolean>(false)

    const handleClickBtn = (e) => {
        setIsEnable(!isEnable)
        if (onClick) onClick(e)
    }

    return (
        <div>
            {/* <a href="#"> */}
            <div className={dark ? (isEnable ? s.btn + ' ' + s.dark + s.clicked : s.btn + ' ' + s.dark) : (isEnable ? s.btn + ' ' + s.clicked : s.btn)} onClick={handleClickBtn}>
                <BsFillBasket3Fill size={18} className={s.ico} />
                <div className={s.text}>{isEnable ? (textAfterClick ? textAfterClick : 'В корзину') : 'В корзину'}</div>
            </div>
            {/* </a> */}
        </div>
    )
}

export default ToCartBtn