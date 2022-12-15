import React, { FC } from 'react';
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
                    <ul className={s.privileges__list}>
                        {
                            privilegeSection && privilegeSection.elements.map(item => (
                                <li className={s.privileges__card} key={item.id}>
                                    <img className={s.privileges__cardImg} src={process.env.SERVER_URL + '/' + item.img_elements[0].filename} alt="delivery-ico" />
                                    <h4 className={s.privileges__cardText}>{item.text_elements[0].text}</h4>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Privileges;