import React, { FC } from 'react';

import s from './TopInfo.module.scss'

interface TopInfoProps {
    AuthFormComponent: React.ReactNode,
    TimeComponent: React.ReactNode,
    MenuComponent: React.ReactNode,
    SocialComponent: React.ReactNode,
    ProfileComponent: React.ReactNode,
}

const TopInfo: FC<TopInfoProps> = ({ AuthFormComponent, TimeComponent, MenuComponent, SocialComponent, ProfileComponent }) => {
    return (
        <div className="container">
            {AuthFormComponent}
            <div className={s.topInfo}>
                {TimeComponent}
                {MenuComponent}
                <div className={s.TopInfoSocialProfile}>
                    {SocialComponent}
                    {ProfileComponent}
                </div>
            </div>
        </div >
    );
};

export default TopInfo;