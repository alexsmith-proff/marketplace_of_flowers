import React, { FC } from "react";
import { ICatalogProduct } from "../../interfaces/catalog.interface";

import s from './CatalogProduct.module.scss'
import Image from "next/image";
import ProductReviews from "../ProductReviews/ProductReviews";
import DeliveryTime from "../DeliveryTime/DeliveryTime";
import CardPrice from "../Elements/CardPrice/CardPrice";
import ToCartBtn from "../Elements/Buttons/ToCartBtn/ToCartBtn";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../redux/product/productSlice";
import { IProduct } from "../../interfaces/products.interface";

interface CatalogProductProps {
    // product: ICatalogProduct
    product: IProduct
}

const CatalogProduct: FC<CatalogProductProps> = React.memo( ({ product }) => {
    const dispatch = useDispatch()
    
    const router = useRouter()

    const handleClickProduct = (id: number) => {
        // Переход на страницу товара
        router.push(`/product/${id}`)
    }

    const handleAddToCart = (e, isEnable: boolean) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        e.stopPropagation()
        //Добавление товара в корзину
        console.log('prprprpr', isEnable);
        !isEnable ? dispatch(addProduct(product)) : dispatch(deleteProduct(product.id))
    }

    console.log('prprprpr');

    

    return (
        <li className={s.product} onClick={() => handleClickProduct(product.id)}>
            <div className={s.imgWrap}>
                {
                    product.main_image ?
                        <Image className={s.img} objectFit="cover" src={process.env.API_URI_DOCKER + '/' + product.main_image} width={278} height={250} alt={`${product.slug}-img`} />
                        :
                        <Image className={s.img} objectFit="cover" src='/img/nophoto.png' width={278} height={250} alt={`${product.slug}-img`} />
                }
            </div>
            <div className={s.content}>
                <h3 className={s.title}>{product.name}</h3>
                <div className={s.subtitle}>
                    <ProductReviews stars={4.0} countReviews={15} />
                    <DeliveryTime minutes={150} />
                </div>
                <div className={s.down}>
                    <CardPrice actualPrice={product.price} crossPrice={product.price + 500} size={16} />
                    <ToCartBtn textAfterClick="В корзине" onClick={handleAddToCart} />
                    <div></div>
                </div>
            </div>
        </li>
    )
}
)

export default CatalogProduct