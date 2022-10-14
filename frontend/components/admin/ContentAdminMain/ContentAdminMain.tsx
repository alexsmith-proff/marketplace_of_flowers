import React from 'react';
import ContentAdminTitle from '../ContentAdminTitle/ContentAdminTitle';

import s from './ContentAdminMain.module.scss'

interface ContentAdminMainProps {
}

const ContentAdminMain = ({ }: ContentAdminMainProps) => {
    return (
        <ContentAdminTitle title="Главная" />
    );
};

export default ContentAdminMain;