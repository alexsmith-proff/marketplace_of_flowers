import { FC } from "react";
import Image from "next/image";

import s from './Call.module.scss'

interface CallProps {
    src: string
}

const Call: FC<CallProps> = ({ src }) => {
    return (
        <div className={s.call}>
            <a href="#">
                <div className={s.btn}>
                    {/* <div className={s.headerBtn__img}> */}
                        {/* <Image src='/img/phone-btn.png' width={18} height={18} alt='phone-btn-ico' /> */}
                        <Image src={src} width={18} height={18} alt='phone-btn-ico' />
                    {/* </div> */}
                </div>
            </a>
            <div className={s.number}>+7 (920) 211-49-03</div>
        </div>
    )
}

export default Call