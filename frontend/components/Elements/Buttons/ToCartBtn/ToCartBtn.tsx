import { FC, useState } from "react";
import { BsFillBasket3Fill } from 'react-icons/bs';

import s from './ToCartBtn.module.scss'

interface ToCartBtnProps {
    dark?: boolean
    enableText?: string
}

const ToCartBtn: FC<ToCartBtnProps> = ({ dark = false, enableText }) => {
    const [isEnable, setIsEnable] = useState<boolean>(false)

    // const handleClickBtn = () => {

    // }

    return (
        <div>
            {/* <a href="#"> */}
                <div className={dark ? s.btn + ' ' + s.dark : s.btn} onClick={() => setIsEnable(!isEnable)}>
                    <BsFillBasket3Fill size={18} className={s.ico} />
                    <div className={s.text}>{isEnable ? (enableText ? enableText : 'В корзину') : 'В корзину'}</div>
                </div>
            {/* </a> */}
        </div>
    )
}

export default ToCartBtn