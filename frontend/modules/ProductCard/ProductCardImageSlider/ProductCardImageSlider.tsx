import { FC } from 'react'
import Image from 'next/image'

import s from './ProductCardImageSlider.module.scss'
import { useProductCardImageSlider } from './hooks/useProductCardImageSlider'

type TProductCardImageSlider = {
    mainImage: string
    images: string[]
}

const ProductCardImageSlider: FC<TProductCardImageSlider> = ({ mainImage, images }) => {
    const { mainimage, xy, imgRef, handleMouseMoveImg, handleMouseLeaveImg, handleClickThumbnail } = useProductCardImageSlider(mainImage, images)

    return (
        <div className={s.slider}>
            <div className={s.mainimage} style={{ width: '476px', overflow: 'hidden', height: '400px' }}
                onMouseMove={handleMouseMoveImg}
                onMouseLeave={handleMouseLeaveImg}
                ref={imgRef}
            >
                {/* <Image src={`${process.env.API_URI_DOCKER}/${mainimage}`}
                    width={476}
                    height={400}
                    objectFit='cover'
                    alt='product-main-img'
                    style={{
                        transform: 'scale(1.5)',
                        position: 'relative',
                        // top: '50px !important',
                    }} /> */}

                <img
                    src={`${process.env.API_URI}/${mainimage}`}
                    alt="A image to apply the ImageZoom plugin"
                    style={
                        {
                            left: `${xy.x}px`,
                            top: `${xy.y}px`,
                            transform: `scale(${xy.transform})`
                        }
                    }
                />

            </div>
            <ul className={s.thumbnails}>
                {
                    images.map((img, index) => (
                        <div className={s.thumbnailImg} onClick={() => handleClickThumbnail(index)} key={index}>
                            <Image className={s.thumbnailImg} src={`${process.env.API_URI_DOCKER}/${img}`} width={112} height={90} objectFit='cover' key={index} alt='product-thumbnail-img' />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductCardImageSlider