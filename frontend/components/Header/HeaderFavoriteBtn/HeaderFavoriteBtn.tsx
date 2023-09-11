import React, { FC } from 'react';
import FavoriteBtn from '../../Elements/Buttons/FavoriteBtn/FavoriteBtn';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import s from './HeaderFavoriteBtn.module.scss'

interface HeaderFavoriteBtnProps {
}

const HeaderFavoriteBtn: FC<HeaderFavoriteBtnProps> = ({ }) => {
    const favoriteProducts = useSelector((state: RootState) => state.favoriteProduct.products)

    return (
        <div className={s.btn}>
            <FavoriteBtn />
            {
                favoriteProducts.length !== 0 ? <span className={s.btnCount}>{favoriteProducts.length}</span> : <></>
            }
        </div>
    );
};

export default HeaderFavoriteBtn;