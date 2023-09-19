import React, { FC } from 'react';
import Image from "next/image"

import s from './Find.module.scss'

interface FindProps {
    src: string
}
const Find: FC<FindProps> = ({ src }) => {
    return (
        <div className={s.find}>
            <input className={s.input} type="text" />
            <a href="#">
                <div className={s.inputBtn}>
                    <Image src={src} width={16} height={16} alt='find-btn-ico' />
                </div>
            </a>
        </div>
    )
}

export default Find