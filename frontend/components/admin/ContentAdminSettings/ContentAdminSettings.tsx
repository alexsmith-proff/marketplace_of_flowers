import React from 'react';
import ContentAdminTitle from '../ContentAdminTitle/ContentAdminTitle';

import s from './ContentAdminSettings.module.scss'

interface ContentAdminSettingsProps {
}

const ContentAdminSettings = ({ }: ContentAdminSettingsProps) => {
    return (
        <ContentAdminTitle title="Настройки" />
    );
};

export default ContentAdminSettings;