import React, { FC } from 'react';
import Image from 'next/image';
import CardPrice from '../../UI/CardPrice/CardPrice';
import ToCartBtn from '../../UI/Buttons/ToCartBtn/ToCartBtn';
import FavoriteBtn from '../../UI/Buttons/FavoriteBtn/FavoriteBtn';

import s from './CardItem.module.scss'

interface CardItemProps {
    productID: number
    imgSrc: string
    alt: string
    title: string
    subtitle: string
    price: number
    crossPrice: number
    isBuyProduct: boolean
    isActive: boolean
    onClickProduct: (productID: number) => void
    onClickAddToCart: (e: any, isActiveBtn: boolean, productID: number) => void
    onClickAddToFavorite: (e: any, isActiveBtn: boolean, productID: number) => void
}

const CardItem: FC<CardItemProps> = ({
    productID,
    imgSrc,
    title,
    subtitle,
    alt,
    price,
    crossPrice,
    isBuyProduct,
    isActive,
    onClickProduct,
    onClickAddToCart,
    onClickAddToFavorite
}) => {
    const handleClickProduct = () => {
        onClickProduct(productID)
    }

    const handleAddToCart = (e: any, isActiveBtn: boolean) => {
        onClickAddToCart(e, isActiveBtn, productID)

    }
 
    const handleAddToFavorite = (e: any, isActiveBtn: boolean) => {
        onClickAddToFavorite(e, isActiveBtn, productID)
    }
    return (
        <div className={s.item} onClick={handleClickProduct} key={productID}>
            <Image className={s.img} src={imgSrc} width={278} height={250} alt={alt} objectFit="cover" />
            <div className={s.info}>
                <div className={s.text}>
                    <div className={s.title}>{title}</div>
                    <div className={s.subtitle}>{subtitle}</div>
                </div>
                <div className={s.priceCart}>
                    <CardPrice actualPrice={price} crossPrice={crossPrice} size={16} />
                    <ToCartBtn textAfterClick="В корзине" isBuyProduct={isBuyProduct} onClick={handleAddToCart} />
                    <FavoriteBtn backgroundLight={true} isActive={isActive} onClick={handleAddToFavorite} />
                </div>
            </div>
        </div>
    );
};

export default CardItem;