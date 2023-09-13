import { FC } from "react";

import s from './FooterContactItem.module.scss'

interface FooterContactItemProps {
    name: string,
    text: string
}

const FooterContactItem: FC<FooterContactItemProps> = ({ name, text }) => {
    return (
        <div className={s.contacts}>
            <div className={s.name}>{name}</div>
            <div className={s.text}>{text}</div>
        </div>
    )
}

export default FooterContactItem