import React from 'react';
import DateAndTime from '../../DateAndTime/DateAndTime';
import CardViews from '../CardViews/CardViews';
import ContentAdminTitle from '../ContentAdminTitle/ContentAdminTitle';

import { AiOutlineEye } from "react-icons/ai";

import s from './ContentAdminMain.module.scss'

interface ContentAdminMainProps {
}

const ContentAdminMain = ({ }: ContentAdminMainProps) => {
    return (
        <>
            <div className={s.content}>
                <DateAndTime />
                <CardViews text="Всего просмотров" count={164}>
                    <AiOutlineEye size={30}/>
                </CardViews>
            </div>
        </>
    );
};

export default ContentAdminMain;