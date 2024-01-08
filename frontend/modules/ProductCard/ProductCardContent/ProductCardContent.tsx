import { FC } from 'react'
import ProductReviews from '../../../components/ProductReviews/ProductReviews'
import RectButtons from '../../../UI/RectButtons/RectButtons'
import CardPrice from '../../../UI/CardPrice/CardPrice'
import CountProduct from '../../../UI/CountProduct/CountProduct'
import ToCartBtn from '../../../UI/Buttons/ToCartBtn/ToCartBtn'
import FavoriteBtn from '../../../UI/Buttons/FavoriteBtn/FavoriteBtn'
import { useProductCardContent } from './hooks/useProductCardContent'
import { IProduct } from '../../../interfaces/products.interface'

import s from './ProductCardContent.module.scss'

type TProductCardContent = {
    product: IProduct
}

const ProductCardContent: FC<TProductCardContent> = ({ product }) => {
    const { countFlovers, countProductEnable, productToCart, productFavorite, handleDecrement, handleIncrement, handleAddToCart, handleClickFavorite } = useProductCardContent(product)    

    return (
        <div className={s.content}>
            <div className={s.wrap}>
                <h2 className={s.title}>{product.name}</h2>
                <ProductReviews stars={4.0} countReviews={15} />
                <div className={s.paramContainer}>
                    <div className={s.paramWrap}>
                        <div className={s.param}>Высота: <span>50см</span></div>
                        <div className={s.param}>Ширина: <span>35см</span></div>
                    </div>
                    <div className={s.paramWrap}>
                        <div className={s.param}>Размер: <span>Standart</span></div>
                        <div className={s.param}>Цвет: <span>Красный</span></div>
                    </div>
                </div>
                <div className={s.titleParam}>Длина</div>
                <RectButtons buttons={[
                    {
                        name: '40 см'
                    },
                    {
                        name: '50 см'
                    },
                    {
                        name: '60 см'
                    },
                    {
                        name: '70 см'
                    },
                ]} />
                <div className={s.titleParam}>Упаковка</div>
                <RectButtons buttons={[
                    {
                        name: 'Ленточка',
                        price: 0
                    },
                    {
                        name: 'Крафт (+290₽)',
                        price: 290
                    },
                    {
                        name: 'Корейская (+390₽)',
                        price: 390
                    },
                    {
                        name: 'Премиум (+490₽)',
                        price: 490
                    },
                    {
                        name: 'Корзинка (+1000₽)',
                        price: 1000
                    }
                ]} />
                <div className={s.titleParam}>Зелень</div>
                <RectButtons buttons={[
                    {
                        name: 'Нет',
                        price: 0
                    },
                    {
                        name: 'Немного (+150₽)',
                        price: 150
                    },
                    {
                        name: 'Побольше (+300₽)',
                        price: 300
                    },
                ]} />

                <div className={s.price}>
                    <CardPrice actualPrice={product.price} crossPrice={product.price + 500} size={20} />
                </div>
                <div className={s.buy}>
                    <CountProduct enable={countProductEnable} value={countFlovers} decrement={handleDecrement} increment={handleIncrement} />
                    <ToCartBtn textAfterClick="Удалить" isBuyProduct={productToCart.some((pr) => pr.id === product.id)} onClick={handleAddToCart} />
                    <FavoriteBtn backgroundLight={true} isActive={productFavorite.some((pr) => pr.id === product.id)} onClick={(e, isActiveBtn) => handleClickFavorite(e, isActiveBtn, product)} />
                </div>

            </div>
        </div>
    )
}

export default ProductCardContent