import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import s from './Header.module.scss'
import FavoriteBtn from '../Elements/Buttons/FavoriteBtn/FavoriteBtn';
import { useSelector } from 'react-redux';
import { IProduct } from '../../interfaces/products.interface';

interface HeaderProps {
}

const Header: FC<HeaderProps> = ({ }) => {
    const products: IProduct[] = useSelector(state => state.product.products)

    const getAllPrice = () => {
        return products.reduce((acc, item) => acc + item.price, 0)
    }
     const allPrice = getAllPrice()
    

    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.headerContainer}>
                    <div className={s.header__logo}>
                        <Link href='/'>
                            <a>
                                <Image src='/img/logo.png' width={160} height={48} alt='logo' />
                            </a>
                        </Link>
                    </div>

                    <div className={s.header__deliveryText}>Доставка цветов в Воронеже</div>
                    <div className={s.header__find}>
                        <input className={s.header__findInput} type="text" />
                        <a href="#">
                            <div className={s.header__findInput__findBtn}>
                                <Image src='/img/find-btn.png' width={16} height={16} alt='find-btn-ico' />
                            </div>
                        </a>
                    </div>
                    <div className={s.header__call}>
                        <a href="#" className={s.call_phoneBtnLink}>
                            <div className={s.headerBtn}>
                                <div className={s.headerBtn__img}>
                                    <Image src='/img/phone-btn.png' width={18} height={18} alt='phone-btn-ico' />
                                </div>
                            </div>
                        </a>
                        <div className={s.call__number}>+7 (920) 211-49-03</div>
                    </div>

                    <FavoriteBtn link={'#'} />
                    <div className={s.header__cart}>
                        <a className={s.header__cartBtnLink} href="#">
                            <div className={s.headerBtn}>
                                <div className={s.headerBtn__img}>
                                    <Image src='/img/cart.png' width={18} height={18} alt='cart-ico' />
                                </div>
                                {
                                    products.length !==0 ? <span className={s.headerBtn__count}>{products.length}</span> : <></>
                                }
                                
                            </div>
                        </a>
                        {/* <div className={s.cart__price}>16 500 ₽</div> */}
                        <div className={s.cart__price}>{allPrice} ₽</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;