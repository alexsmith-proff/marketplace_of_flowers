import { FC } from 'react'
import Slider, { Settings } from 'react-slick'
import CardPrice from '../Elements/CardPrice/CardPrice'
import ToCartBtn from '../Elements/Buttons/ToCartBtn/ToCartBtn'
import Image from 'next/image'
import { IProduct } from '../../interfaces/products.interface'
import { RootState } from '../../redux/store'

import s from './ViewsProducts.module.scss'
import FavoriteBtn from '../Elements/Buttons/FavoriteBtn/FavoriteBtn'
import { useDispatch, useSelector } from 'react-redux'
import { addFavoriteProduct, deleteFavoriteProduct } from '../../redux/product/favoriteProductSlice'


interface ViewsProductsProps {
    products: IProduct[]
}

const ViewsProducts: FC<ViewsProductsProps> = ({ products }) => {
    const dispatch = useDispatch()
    const productFavorite = useSelector((state: RootState) => state.favoriteProduct.products)

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
    };

    const handleClickFavorite = (e, isActive: boolean, product: IProduct) => {
         // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
         e.stopPropagation()
         //Добавление товара в избранное
        !isActive ? dispatch(addFavoriteProduct(product)) : dispatch(deleteFavoriteProduct(product.id))
    }

    console.log('mmmmm');
    

    return (
        <>
            <section className={s.mainCards}>
                <div className="container">
                    <h2 className={s.mainCards__mainTitle}>Ранее вы смотрели</h2>
                    <div className={s.mainCards__list}>
                        <Slider className='mainCards' {...settings}>
                            {
                                products.map(product => (
                                    <div className={s.mainCards__item} key={product.id}>
                                        <Image src={`${process.env.API_URI_DOCKER}/${product.main_image}`} width={278} height={250} objectFit="cover" />
                                        {/* <img className={s.mainCards__imgHeart} src="img/heart.png" alt="heart-ico" /> */}
                                        <div className={s.mainCards__info}>
                                            <div className={s.mainCards__text}>
                                                <div className={s.mainCards__title}>{product.name}</div>
                                                <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                            </div>
                                            <div className={s.mainCards__priceCart}>
                                                <CardPrice actualPrice={product.price} crossPrice={product.price + 2000} size={16} />
                                                <ToCartBtn dark={false} />
                                            </div>
                                        </div>
                                        <div className={s.favorite}>
                                            <FavoriteBtn backgroundLight={true} isActive={productFavorite.some((pr) => pr.id === product.id)} onClick={(e, isActive) => handleClickFavorite(e, isActive, product)} />
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ViewsProducts