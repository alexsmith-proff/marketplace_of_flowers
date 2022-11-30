import React, { FC } from 'react';

import s from './Header.module.scss'

interface HeaderProps {
}

const Header: FC<HeaderProps> = ({ }) => {

    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.headerContainer}>
                    <a className={s.header__logo} href="#">
                        <img className={s.header__logoImg} src="img/logo.png" alt="" />
                    </a>
                    <div className={s.header__deliveryText}>Доставка цветов в Воронеже</div>
                    <div className={s.header__find}>
                        <input className={s.header__findInput} type="text" />
                            <a href="#">
                                <img className={s.header__findInput__findBtn} src="img/find-btn.png" alt="find-btn" />
                            </a>
                    </div>
                    <div className={s.header__call}>
                        <a href="#" className={s.call_phoneBtnLink}>
                            <div className={s.headerBtn}>
                                <img className={s.headerBtn__img} src="img/phone-btn.png" alt="phone-btn" />
                            </div>
                        </a>
                        <div className={s.call__number}>+7 (920) 211-49-03</div>
                    </div>

                    <a className={s.header__favoriteBtnLink} href="#">
                        <div className={s.headerBtn}>
                            <img className={s.headerBtn__img} src="img/favorite-btn.png" alt="favorite-btn" />
                        </div>
                    </a>
                    <div className={s.header__cart}>
                        <a className={s.header__cartBtnLink} href="#">
                            <div className={s.headerBtn}>
                                <img className={s.headerBtn__img} src="img/cart.png" alt="cart-ico" />
                            </div>
                        </a>
                        <div className={s.cart__price}>16 500 ₽</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;