import { FC } from 'react'
import Image from 'next/image'
import { useViewsProducts } from './hooks/useViewsProducts'
import CardPrice from '../../UI/CardPrice/CardPrice'
import ToCartBtn from '../../UI/Buttons/ToCartBtn/ToCartBtn'
import FavoriteBtn from '../../UI/Buttons/FavoriteBtn/FavoriteBtn'
import { IProduct } from '../../interfaces/products.interface'

import s from './ViewsProducts.module.scss'

interface ViewsProductsProps {
    products: IProduct[]
}

const ViewsProducts: FC<ViewsProductsProps> = ({ products }) => {
    const { productToCart, productFavorite, handleClickToCart, handleClickFavorite } = useViewsProducts()
    
    return (
        <>
            <section className={s.mainCards}>
                <div className="container">
                    <h2 className={s.mainCards__mainTitle}>Ранее вы смотрели</h2>
                    <div className={s.mainCards__list}>
                        {
                            products.map(product => (
                                <div className={s.mainCards__item} key={product.id}>
                                    <Image src={`${process.env.API_URI_DOCKER}/${product.main_image}`} width={278} height={250} objectFit="cover" alt="product" />
                                    <div className={s.mainCards__info}>
                                        <div className={s.mainCards__text}>
                                            <div className={s.mainCards__title}>{product.name}</div>
                                            <div className={s.mainCards__subtitle}>Высота: 60 см, Ширина: 35 см</div>
                                        </div>
                                        <div className={s.mainCards__priceCart}>
                                            <CardPrice actualPrice={product.price} crossPrice={product.price + 2000} size={16} />
                                            <ToCartBtn textAfterClick="В корзине" isBuyProduct={productToCart.some((pr) => pr.id === product.id)} onClick={(e, isActiveBtn) => handleClickToCart(e, isActiveBtn, product)} />
                                        </div>
                                    </div>
                                    <div className={s.favorite}>
                                        <FavoriteBtn backgroundLight={true} isActive={productFavorite.some((pr) => pr.id === product.id)} onClick={(e, isActiveBtn) => handleClickFavorite(e, isActiveBtn, product)} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default ViewsProducts