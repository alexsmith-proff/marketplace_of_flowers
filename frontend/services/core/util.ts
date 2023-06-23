import { IProductCart } from "../../interfaces/products.interface"

// Проверяет строку на JSON
export const isJSONString = (str: string): boolean => {
    try {
        JSON.parse(str)
    }
    catch (e) {
        return false
    }
    return true
}

// Находит общую стоимость товаров
export const getAllPrice = (products: IProductCart[]) => products.reduce((acc, item) => acc + item.price * item.count, 0)