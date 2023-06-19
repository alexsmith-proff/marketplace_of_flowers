import { FC, useRef, useState } from 'react'
import Image from 'next/image'

import s from './ProductCardImageSlider.module.scss'

type TProductCardImageSlider = {
    mainImage: string
    images: string[]
}

const ProductCardImageSlider: FC<TProductCardImageSlider> = ({ mainImage, images }) => {
    const [mainimage, setMainImage] = useState<string>(mainImage)
    const [xy, setXY] = useState({
        x: 0,
        y: 0,
        transform: 1
    })

    const imgRef = useRef<HTMLImageElement>();

    const handleMouseMoveImg = (e) => {
        const x = -Math.round((e.pageX - imgRef.current.offsetLeft)*1.0) + (476*2.0-476)/2
        const y = -Math.round((e.pageY - imgRef.current.offsetTop)*1.0) + (400*2.0-400)/2
        setXY({ ...xy, x: x, y: y, transform: 2.0 })
    }

    const handleMouseLeaveImg = (e) => {
        setXY({ ...xy, x: 0, y: 0, transform: 1 })
    }

    const handleClickThumbnail = (index) => {
        setMainImage(images[index])
    }

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