import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useHeader } from '../../hooks/useHeader'

import s from './Header.module.scss'
import FavoriteBtn from '../Elements/Buttons/FavoriteBtn/FavoriteBtn';


interface HeaderProps {
    logoComponent: React.ReactNode,
    findComponent?: React.ReactNode
    callComponent?: React.ReactNode
    headerTextComponent?: React.ReactNode
    favoriteBtnComponent?: React.ReactNode
}

const Header: FC<HeaderProps> = ({ logoComponent, findComponent, callComponent, headerTextComponent, favoriteBtnComponent }) => {
    const { buyProducts, favoriteProducts, allPrice } = useHeader()

    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.headerContainer}>
                    {logoComponent}
                    {headerTextComponent}
                    {findComponent}
                    {callComponent}
                    {favoriteBtnComponent}
                   
                    <div className={s.header__cart}>
                        <Link href='/cart'>
                            <a className={s.header__cartBtnLink}>
                                {/* <Image src='/img/logo.png' width={160} height={48} alt='logo' /> */}
                                <div className={s.headerBtn}>
                                    <div className={s.headerBtn__img}>
                                        <Image src='/img/cart.png' width={22} height={22} alt='cart-ico' />
                                    </div>
                                    {
                                        buyProducts.length !== 0 ? <span className={s.headerBtn__count}>{buyProducts.length}</span> : <></>
                                    }

                                </div>
                            </a>
                        </Link>
                        <div className={s.cart__price}>{allPrice} ₽</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;