import React from 'react';
import ContentAdminTitle from '../ContentAdminTitle/ContentAdminTitle';

import s from './ContentAdminBuyers.module.scss'

interface ContentAdminBuyersProps {
}

const ContentAdminBuyers = ({ }: ContentAdminBuyersProps) => {
    return (
        <ContentAdminTitle title="Покупатели" />
    );
};

export default ContentAdminBuyers;