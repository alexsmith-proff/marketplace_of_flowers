import React from 'react';
import DateAndTime from '../../DateAndTime/DateAndTime';

import s from './ContentAdminTitle.module.scss'

interface ContentAdminTitleProps {
    title: string
}

const ContentAdminTitle = ({ title }: ContentAdminTitleProps) => {
    return (
        <div className={s.title}>
            {title}
            <DateAndTime />
        </div>
    );
};

export default ContentAdminTitle;