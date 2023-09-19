import { FC } from "react";

import s from './FooterContactItemBold.module.scss'

interface FooterContactItemBoldProps {
    name: string,
    text: string
}

const FooterContactItemBold: FC<FooterContactItemBoldProps> = ({ name, text }) => {
    return (
        <div className={s.contacts}>
            <div className={s.name}>{name}</div>
            <div className={s.text}>{text}</div>
        </div>
    )
}

export default FooterContactItemBold