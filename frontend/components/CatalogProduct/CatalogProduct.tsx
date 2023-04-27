import { FC } from "react";
import { ICatalogProduct } from "../../interfaces/catalog.interface";

import s from './CatalogProduct.module.scss'
import Image from "next/image";
import ProductReviews from "../ProductReviews/ProductReviews";
import DeliveryTime from "../DeliveryTime/DeliveryTime";

interface CatalogProductProps {
    product: ICatalogProduct
}

const CatalogProduct: FC<CatalogProductProps> = ({ product }) => {
    return (
        <li className={s.product}>
            <div className={s.imgWrap}>
                {
                    product.main_image ?
                        <Image className={s.img} src={process.env.API_URI_DOCKER + '/' + product.main_image} width={278} height={250} alt={`${product.slug}-img`} />
                        :
                        <Image className={s.img} src='/img/nophoto.png' width={278} height={250} alt={`${product.slug}-img`} />
                }
            </div>
            <h3 className={s.title}>{product.name}</h3>
            <div className={s.subtitle}>
                <ProductReviews stars={4.0} countReviews={15} />
                <DeliveryTime minutes={150} />
            </div>
        </li>
    )
}

export default CatalogProduct