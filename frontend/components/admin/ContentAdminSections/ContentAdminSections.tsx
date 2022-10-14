import React from 'react';
import ContentAdminTitle from '../ContentAdminTitle/ContentAdminTitle';

import s from './ContentAdminSections.module.scss'

interface ContentAdminSectionsProps {
}

const ContentAdminSections = ({ }: ContentAdminSectionsProps) => {
    return (
        <ContentAdminTitle title="Секции" />
    );
};

export default ContentAdminSections;