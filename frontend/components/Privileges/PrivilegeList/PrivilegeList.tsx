import React, { FC } from 'react';
import PrivilegeItem from '../PrivilegeItem/PrivilegeItem';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../../services/core/parse';
import { IElement } from '../../../interfaces/section.interface';

import s from './PrivilegeList.module.scss'

interface PrivilegeListProps {
    items: IElement[]
}

const PrivilegeList: FC<PrivilegeListProps> = ({ items }) => {
    return (
        <ul className={s.list}>
            {
                items.map(item => (
                    <PrivilegeItem
                        fileName={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(item, 'img')}`}
                        text={getTextInTextBlockFromElement(item, 'tekst')}
                        key={item.id}
                    />
                ))
            }
        </ul>
    );
};

export default PrivilegeList;