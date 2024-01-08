import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { useState } from "react"
import { IProduct } from "../../../../interfaces/products.interface"
import { addFavoriteProduct, deleteFavoriteProduct } from "../../../../redux/product/favoriteProductSlice"
import { addCartProduct, deleteCartProduct } from "../../../../redux/product/cartProductSlice"

export const useProductCardContent = (product: IProduct) => {
    const productToCart = useSelector((state: RootState) => state.cartProduct.products)
    const productFavorite = useSelector((state: RootState) => state.favoriteProduct.products)
    const dispatch = useDispatch()
    const [countProductEnable, setCountProductEnable] = useState<boolean>(() => !productToCart.some((pr) => pr.id === product.id))
    const [countFlovers, setCountFlovers] = useState<number>(1)

    const handleDecrement = () => {
        if (countFlovers > 1) setCountFlovers(prev => prev - 1)
    }
    const handleIncrement = () => {
        if (countFlovers < product.count_in_stock) setCountFlovers(prev => prev + 1)
    }

    const handleAddToCart = (e: any, isEnable: boolean) => {
        //Добавление товара в корзину
        if (!isEnable) {
            setCountFlovers(1)
            setCountProductEnable(false)
            dispatch(addCartProduct({ ...product, count: countFlovers }))
        } else {
            dispatch(deleteCartProduct(product.id))
            setCountProductEnable(true)
        }
    }
    const handleClickFavorite = (e: any, isActive: boolean, product: IProduct) => {
        //Добавление товара в избранное
        !isActive ? dispatch(addFavoriteProduct(product)) : dispatch(deleteFavoriteProduct(product.id))
    }
    return { countFlovers, countProductEnable, productToCart, productFavorite, handleDecrement, handleIncrement, handleAddToCart, handleClickFavorite }
}