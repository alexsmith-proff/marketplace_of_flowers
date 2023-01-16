import React, { FC } from 'react';
import { ISection } from '../../interfaces/section.interface';
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../services/core/parse';

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
                            privilegeSection && privilegeSection.elements.map(el => (
                                <li className={s.privileges__card} key={el.id}>
                                    <img className={s.privileges__cardImg} src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(el, 'img')} alt="delivery-ico" />
                                    <h4 className={s.privileges__cardText}>{getTextInTextBlockFromElement(el, 'tekst')}</h4>
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