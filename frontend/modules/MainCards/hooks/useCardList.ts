import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { RootState } from "../../../redux/store"
import { addViewedProduct } from "../../../redux/product/viewedProductSlice"
import { addCartProduct, deleteCartProduct } from "../../../redux/product/cartProductSlice"
import { addFavoriteProduct, deleteFavoriteProduct } from "../../../redux/product/favoriteProductSlice"
import { ISection } from "../../../interfaces/section.interface"

export const useCardList = (cards: ISection) => {
    const productToCart = useSelector((state: RootState) => state.cartProduct.products)
    const productFavorite = useSelector((state: RootState) => state.favoriteProduct.products)
    const dispatch = useDispatch()
    const router = useRouter()

    const isBuyProduct = (productID) => productToCart.some(item => item.id === productID)
    const isFavorite = (productID) => productFavorite.some(item => item.id === productID)

    const handleClick = (productID: number) => {
        dispatch(addViewedProduct(cards.elements.find(item => item.id === productID).product_ref))
        // Переход на страницу товара
        router.push(`/product/${cards.elements.find(item => item.id === productID).product_ref.id}`)
    }

    const handleAddToCart = (e: any, isEnable: boolean, productID: number) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в корзину
        !isEnable ?
            dispatch(addCartProduct({ ...cards.elements.find(item => item.id === productID).product_ref, count: 1 }))
            : dispatch(deleteCartProduct(cards.elements.find(item => item.id === productID).product_ref.id))
    }

    const handleAddToFavorite = (e: any, isActiveBtn: boolean, productID: number) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в избранное
        !isActiveBtn ?
            dispatch(addFavoriteProduct(cards.elements.find(item => item.id === productID).product_ref))
            : dispatch(deleteFavoriteProduct(cards.elements.find(item => item.id === productID).product_ref.id))
    }

    return { isBuyProduct, isFavorite, handleClick, handleAddToCart, handleAddToFavorite }
}