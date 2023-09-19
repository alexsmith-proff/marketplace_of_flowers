import React, { FC } from 'react';
import ConnectedTopInfoAuthForm from './components/ConnectedTopInfoAuthForm/ConnectTopInfoAuthForm';
import ConnectedTopInfoTime from './components/ConnectedTopInfoTime/ConnectedTopInfoTime';
import ConnectedTopInfoMenu from './components/ConnectedTopInfoMenu/ConnectedTopInfoMenu';
import ConnectedTopInfoSocial from './components/ConnectedTopInfoSocial/ConnectedTopInfoSocial';
import ConnectedTopInfoProfile from './components/ConnectedTopInfoProfile/ConnectedTopInfoProfile';
import { IMenu } from '../../interfaces/menu.interface';

import s from './TopInfo.module.scss'

interface TopInfoProps {
    menu: IMenu,
}

const TopInfo: FC<TopInfoProps> = ({ menu }) => {
    return (
        <div className="container">
            <ConnectedTopInfoAuthForm />
            <div className={s.topInfo}>
                <ConnectedTopInfoTime />
                <ConnectedTopInfoMenu menu={menu} />
                <div className={s.TopInfoSocialProfile}>
                    <ConnectedTopInfoSocial />
                    <ConnectedTopInfoProfile />
                </div>
            </div>
        </div >
    );
};

export default TopInfo;
