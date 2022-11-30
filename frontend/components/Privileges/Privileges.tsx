import React, { FC } from 'react';

import s from './Privileges.module.scss'

interface PrivilegesProps {
}

const Privileges: FC<PrivilegesProps> = ({ }) => {

    return (
        <>
            <section className={s.privileges}>
                <div className="container">
                    <ul className={s.privileges__list}>
                        <li className={s.privileges__card}>
                            <img className={s.privileges__cardImg} src="img/delivery-ico.png" alt="delivery-ico" />
                                <h4 className={s.privileges__cardText}>Экспресс-доставка<br/> от 90 минут</h4>
                        </li>
                        <li className={s.privileges__card}>
                            <img className={s.privileges__cardImg} src="img/low-price.png" alt="delivery-ico" />
                                <h4 className={s.privileges__cardText}>Низкие цены</h4>
                        </li>
                        <li className={s.privileges__card}>
                            <img className={s.privileges__cardImg} src="img/arrivalflowers.png" alt="delivery-ico" />
                                <h4 className={s.privileges__cardText}>Каждый день поступление <br/> свежих цветов</h4>
                        </li>
                        <li className={s.privileges__card}>
                            <img className={s.privileges__cardImg} src="img/florists.png" alt="delivery-ico" />
                                <h4 className={s.privileges__cardText}>Опытные флористы</h4>
                        </li>
                        <li className={s.privileges__card}>
                            <img className={s.privileges__cardImg} src="img/no-weekends.png" alt="delivery-ico" />
                                <h4 className={s.privileges__cardText}>Работаем <br/> без выходных</h4>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Privileges;