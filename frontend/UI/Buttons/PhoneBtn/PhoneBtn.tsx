import { FC } from "react"

import s from './PhoneBtn.module.scss'
import Image from "next/image"

interface PhoneBtnProp { }

const PhoneBtn: FC<PhoneBtnProp> = ({ }) => {
    return (
        <div className={s.btn}>
            <Image src={'/img/phone-btn.png'} width={18} height={18} alt='phone-btn-ico' />
        </div>
    )
}

export default PhoneBtn