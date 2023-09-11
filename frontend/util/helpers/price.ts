import { IPriceCount } from "../../interfaces/products.interface"

// Находит общую стоимость товаров
export const getAllPrice = (products: IPriceCount[]) => products.reduce((acc, item) => acc + item.price * item.count, 0)

// Находит общую стоимость товаров и применяет форматирование,
// например, '7777' -> '7 777'
export const getAllPriceFormat = (priceCount: IPriceCount[]) => {
    let val = priceCount.reduce((acc, item) => acc + item.price * item.count, 0)
    let value = val.toString().split('')
    value.splice(value.length - 3, 0, ' ').join()
    return value
}