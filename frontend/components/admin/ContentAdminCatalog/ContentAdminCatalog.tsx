import React from 'react';
import ContentAdminTitle from '../ContentAdminTitle/ContentAdminTitle';

import s from './ContentAdminCatalog.module.scss'

interface ContentAdminCatalogProps {
}

const ContentAdminCatalog = ({ }: ContentAdminCatalogProps) => {
    return (
        <ContentAdminTitle title="Каталог" />
    );
};

export default ContentAdminCatalog;