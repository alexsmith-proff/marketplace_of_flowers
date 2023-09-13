import React, { FC } from "react";
import Image from "next/image";
import ProductReviews from "../ProductReviews/ProductReviews";
import DeliveryTime from "../DeliveryTime/DeliveryTime";
import CardPrice from "../Elements/CardPrice/CardPrice";
import ToCartBtn from "../Elements/Buttons/ToCartBtn/ToCartBtn";
import FavoriteBtn from "../Elements/Buttons/FavoriteBtn/FavoriteBtn";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addCartProduct, deleteCartProduct } from "../../redux/product/cartProductSlice";
import { addFavoriteProduct, deleteFavoriteProduct } from "../../redux/product/favoriteProductSlice";
import { IProduct, IProductCart } from "../../interfaces/products.interface";

import s from './CatalogProduct.module.scss'
import { addViewedProduct } from "../../redux/product/viewedProductSlice";

interface CatalogProductProps {
    // product: ICatalogProduct
    product: IProduct
    isBuyProduct: boolean
    isFavorite: boolean
}

const CatalogProduct: FC<CatalogProductProps> = ({ product, isBuyProduct = false, isFavorite = false }) => {
    const dispatch = useDispatch()

    const router = useRouter()

    const handleClickProduct = (id: number) => {
        dispatch(addViewedProduct(product))
        // Переход на страницу товара
        router.push(`/product/${id}`)
    }

    const handleAddToCart = (e, isEnable: boolean) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в корзину

        !isEnable ? dispatch(addCartProduct({...product, count: 1})) : dispatch(deleteCartProduct(product.id))
    }

    const handleAddToFavorite = (e, isEnable: boolean) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в избранное
        !isEnable ? dispatch(addFavoriteProduct(product)) : dispatch(deleteFavoriteProduct(product.id))
    }

    console.log('prprprpr', isBuyProduct);



    return (
        <li className={s.product} onClick={() => handleClickProduct(product.id)}>
            <div className={s.imgWrap}>
                {
                    product.main_image ?
                        <Image className={s.img} objectFit="cover" src={process.env.API_URI_DOCKER + '/' + product.main_image} width={278} height={250} alt={`${product.slug}-img`} />
                        :
                        <Image className={s.img} objectFit="cover" src='/img/nophoto.png' width={278} height={250} alt={`${product.slug}-img`} />
                }
            </div>
            <div className={s.content}>
                <h3 className={s.title}>{product.name}</h3>
                <div className={s.subtitle}>
                    <ProductReviews stars={4.0} countReviews={15} />
                    <DeliveryTime minutes={150} />
                </div>
                <div className={s.down}>
                    <CardPrice actualPrice={product.price} crossPrice={product.price + 500} size={16} />
                    <ToCartBtn textAfterClick="В корзине" isBuyProduct={isBuyProduct} onClick={handleAddToCart} />
                    <div></div>
                </div>
            </div>
            <div className={s.favorite}>
                <FavoriteBtn backgroundLight={true} isActive={isFavorite} onClick={handleAddToFavorite} />
            </div>
        </li>
    )
}


export default React.memo(CatalogProduct)