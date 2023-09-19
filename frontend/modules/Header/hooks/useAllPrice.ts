import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getAllPriceFormat } from '../../../util/helpers/price';

export const useAllPrice = () => {
    const buyProducts = useSelector((state:RootState) => state.cartProduct.products)
    const allPrice = getAllPriceFormat(buyProducts)

    return { allPrice }
}