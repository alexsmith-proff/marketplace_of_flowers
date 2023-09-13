import React, { FC } from 'react';
import Image from 'next/image';

import s from './PrivilegeItem.module.scss'

interface PrivilegeItemProps {
    fileName: string,
    text: string
}

const PrivilegeItem: FC<PrivilegeItemProps> = ({ fileName, text }) => {
    return (
        <li className={s.item}>
            <Image className={s.img} src={fileName} width={30} height={30} alt="ico" />
            <h4 className={s.privileges__cardText}>{text}</h4>
        </li>
    );
};

export default PrivilegeItem;