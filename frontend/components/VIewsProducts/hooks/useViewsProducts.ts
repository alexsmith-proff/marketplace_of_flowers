import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { IProduct } from "../../../interfaces/products.interface"
import { addFavoriteProduct, deleteFavoriteProduct } from "../../../redux/product/favoriteProductSlice"
import { addCartProduct, deleteCartProduct } from "../../../redux/product/cartProductSlice"

export const useViewsProducts = () => {
    const dispatch = useDispatch()
    const productFavorite = useSelector((state: RootState) => state.favoriteProduct.products)
    const productToCart = useSelector((state: RootState) => state.cartProduct.products)

    const handleClickFavorite = (e, isActive: boolean, product: IProduct) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в избранное
        !isActive ? dispatch(addFavoriteProduct(product)) : dispatch(deleteFavoriteProduct(product.id))
    }

    const handleClickToCart = (e, isActiveBtn: boolean, product: IProduct) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в избранное
        !isActiveBtn ? dispatch(addCartProduct({ ...product, count: 1 })) : dispatch(deleteCartProduct(product.id))
    }

    return { productToCart, productFavorite, handleClickToCart, handleClickFavorite }
}