import React from 'react';
import ContentAdminTitle from '../ContentAdminTitle/ContentAdminTitle';

import s from './ContentAdminMenu.module.scss'

interface ContentAdminMenuProps {
}

const ContentAdminMenu = ({ }: ContentAdminMenuProps) => {
    return (
        <ContentAdminTitle title="Меню" />
    );
};

export default ContentAdminMenu;