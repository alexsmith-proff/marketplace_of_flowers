import { FC, useState } from 'react'

import s from './ProductCardImageSlider.module.scss'
import Image from 'next/image'

type TProductCardImageSlider = {
    mainImage: string
    images: string[]
}

const ProductCardImageSlider: FC<TProductCardImageSlider> = ({ mainImage, images }) => {
    const [mainimage, setMainImage] = useState<string>(mainImage)

    const handleClickThumbnail = (index) => {
        setMainImage(images[index])
    }

    return (
        <div className={s.slider}>
            <div className={s.mainimage}>
                <Image src={`${process.env.API_URI_DOCKER}/${mainimage}`} width={476} height={400} objectFit='cover' alt='product-main-img' />
            </div>
            <ul className={s.thumbnails}>
                {
                    images.map((img, index) => (
                        <div className={s.thumbnailImg} onClick={() => handleClickThumbnail(index)}>
                            <Image className={s.thumbnailImg} src={`${process.env.API_URI_DOCKER}/${img}`} width={112} height={90} objectFit='fill' key={index} alt='product-thumbnail-img' />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductCardImageSlider