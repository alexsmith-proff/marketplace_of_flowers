import React, { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from "react-slick";
import CardPrice from '../Elements/CardPrice/CardPrice';
import ToCartBtn from '../Elements/Buttons/ToCartBtn/ToCartBtn';
import { IProduct } from '../../interfaces/products.interface';

import s from './MainCards.module.scss'
import Image from 'next/image';
import FavoriteBtn from '../Elements/Buttons/FavoriteBtn/FavoriteBtn';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addFavoriteProduct, deleteFavoriteProduct } from '../../redux/product/favoriteProductSlice';
import { addCartProduct, deleteCartProduct } from '../../redux/product/cartProductSlice';
import { addViewedProduct } from '../../redux/product/viewedProductSlice';
import { useRouter } from 'next/router';
import { ISection } from '../../interfaces/section.interface';

interface MainCardsProps {
    cards: ISection
}

const MainCards: FC<MainCardsProps> = ({ cards }) => {
    const productToCart = useSelector((state: RootState) => state.cartProduct.products)
    const productFavorite = useSelector((state: RootState) => state.favoriteProduct.products)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleClickProduct = (id: number, product: IProduct) => {
        dispatch(addViewedProduct(product))
        // Переход на страницу товара
        router.push(`/product/${id}`)
    }

    const handleAddToCart = (e, isEnable: boolean, product: IProduct) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в корзину
        !isEnable ? dispatch(addCartProduct({...product, count: 1})) : dispatch(deleteCartProduct(product.id))
    }

    const handleAddToFavorite = (e, isEnable: boolean, product: IProduct) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в избранное
        !isEnable ? dispatch(addFavoriteProduct(product)) : dispatch(deleteFavoriteProduct(product.id))
    }

    const settings: Settings = {
        // dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, // Время между кадрами 7 сек
        speed: 1000, // Плавность перехода 3 сек
        slidesToShow: 4,
        slidesToScroll: 1,

        // centerMode: true,
        // centerPadding: '50',
        // rows: 3,
    }

    return (
        <>
            <section className={s.mainCards}>
                <div className="container">
                    <h2 className={s.mainCards__mainTitle}>Букеты цветов с доставкой</h2>
                    <div className={s.mainCards__list}>
                        <Slider className='mainCards' {...settings}>
                            {
                                cards?.elements?.map(elem => (
                                    <div className={s.mainCards__item} onClick={() => handleClickProduct(elem.product_ref.id, elem.product_ref)} key={elem.product_ref.id}>
                                        {
                                            elem.product_ref.main_image ?
                                                <Image className={s.mainCards__img} objectFit="cover" src={process.env.API_URI_DOCKER + '/' + elem.product_ref.main_image} width={278} height={250} alt={`${elem.product_ref.slug}-img`} />
                                                :
                                                <Image className={s.img} objectFit="cover" src='/img/nophoto.png' width={278} height={250} alt={`${elem.product_ref.slug}-img`} />
                                        }
                                        <div className={s.mainCards__info}>
                                            <div className={s.mainCards__text}>
                                                <div className={s.mainCards__title}>{elem.product_ref.name}</div>
                                                <div className={s.mainCards__subtitle}>{elem.product_ref.description}</div>
                                            </div>
                                            <div className={s.mainCards__priceCart}>
                                                <CardPrice actualPrice={elem.product_ref.price} crossPrice={elem.product_ref.price + 500} size={16} />
                                                <ToCartBtn textAfterClick="В корзине" isBuyProduct={productToCart.some((pr) => pr.id === elem.product_ref.id)} onClick={(e, isEnable) => handleAddToCart(e, isEnable, elem.product_ref)} />
                                                <FavoriteBtn backgroundLight={true} isActive={productFavorite.some((pr) => pr.id === elem.product_ref.id)} onClick={(e, isActiveBtn) => handleAddToFavorite(e, isActiveBtn, elem.product_ref)} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainCards;



