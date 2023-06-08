import { FC, useState } from 'react'

import s from './ProductCardContent.module.scss'
import { IProduct } from '../../../interfaces/products.interface'
import ProductReviews from '../../ProductReviews/ProductReviews'
import RectButtons from '../../Elements/RectButtons/RectButtons'
import CardPrice from '../../Elements/CardPrice/CardPrice'
import CountProduct from '../../Elements/CountProduct/CountProduct'
import ToCartBtn from '../../Elements/Buttons/ToCartBtn/ToCartBtn'
import FavoriteBtn from '../../Elements/Buttons/FavoriteBtn/FavoriteBtn'
import { useDispatch, useSelector } from 'react-redux'
import { addCartProduct, deleteCartProduct } from '../../../redux/product/cartProductSlice'
import { RootState } from '../../../redux/store'

type TProductCardContent = {
    product: IProduct
}

const ProductCardContent: FC<TProductCardContent> = ({ product }) => {
    const productToCart = useSelector((state: RootState) => state.cartProduct.products)
    const dispatch = useDispatch()
    const [countFlovers, setCountFlovers] = useState<number>(1)

    const handleDecrement = () => {
        if(countFlovers > 1) setCountFlovers(prev => prev - 1)
    }
    const handleIncrement = () => {
        if(countFlovers < product.count_in_stock) setCountFlovers(prev => prev + 1)
    }

    const handleAddToCart = (e, isEnable: boolean) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в корзину

        !isEnable ? dispatch(addCartProduct({...product, count: countFlovers})) : dispatch(deleteCartProduct(product.id))
    }

    console.log('productproductproductproductproduct', productToCart);

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
                    <CountProduct value={countFlovers} decrement={handleDecrement} increment={handleIncrement} />
                    <ToCartBtn textAfterClick="Удалить" isBuyProduct={productToCart.some((pr) => pr.id === product.id)} onClick={handleAddToCart} />
                    <FavoriteBtn link={'#'} />
                </div>

            </div>
        </div>
    )
}

export default ProductCardContent