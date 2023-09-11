import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getAllPriceFormat } from '../util/helpers/price';

export const useHeader = () => {
    const buyProducts = useSelector((state:RootState) => state.cartProduct.products)
    const favoriteProducts = useSelector((state: RootState) => state.favoriteProduct.products)
    const allPrice = getAllPriceFormat(buyProducts)

    return { buyProducts, favoriteProducts, allPrice }
}