import React from 'react';
import DateAndTime from '../../DateAndTime/DateAndTime';
import ContentAdminTitle from '../ContentAdminTitle/ContentAdminTitle';

import s from './ContentAdminMain.module.scss'

interface ContentAdminMainProps {
}

const ContentAdminMain = ({ }: ContentAdminMainProps) => {
    return (
        <>
            <ContentAdminTitle title="Главная" />
            <div className={s.content}>
                <DateAndTime />
            </div>
        </>
    );
};

export default ContentAdminMain;