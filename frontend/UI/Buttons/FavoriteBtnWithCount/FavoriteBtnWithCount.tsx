import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import { RootState } from '../../../../redux/store';

import s from './FavoriteBtnWithCount.module.scss'

interface FavoriteBtnWithCountProps {
}

const FavoriteBtnWithCount: FC<FavoriteBtnWithCountProps> = ({ }) => {
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

export default FavoriteBtnWithCount;