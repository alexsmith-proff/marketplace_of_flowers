import React from 'react';

import s from './ContentAdminTitle.module.scss'

interface ContentAdminTitleProps {
    title: string
}

const ContentAdminTitle = ({ title }: ContentAdminTitleProps) => {
    return (
        <div className={s.title}>
            {title}
        </div>
    );
};

export default ContentAdminTitle;