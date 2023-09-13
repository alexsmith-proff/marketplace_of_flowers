import React, { FC } from 'react';
import PrivilegeList from './PrivilegeList/PrivilegeList';
import { ISection } from '../../interfaces/section.interface';

import s from './Privileges.module.scss'

interface PrivilegesProps {
    privilegeSection: ISection
}

const Privileges: FC<PrivilegesProps> = ({ privilegeSection }) => {

    return (
        <>
            <section className={s.privileges}>
                <div className="container">
                    <PrivilegeList items={privilegeSection.elements} />
                </div>
            </section>
        </>
    );
};

export default Privileges;