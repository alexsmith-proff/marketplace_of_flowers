import React, { FC } from 'react';
import { IconContext, IconType } from "react-icons";

import s from './CardViews.module.scss'

interface CardViewsProps {
    text: string,
    count: number,
    children: React.ReactNode
}

const CardViews: FC<CardViewsProps> = ({ text, count, children }) => {
    return (
        <div className={s.card}>
            <div className={s.topWrap}>
                <div className={s.text}>{text}</div>
                {children}
            </div>
            <div className={s.count}>{count}</div>
        </div>
    );
};

export default CardViews;