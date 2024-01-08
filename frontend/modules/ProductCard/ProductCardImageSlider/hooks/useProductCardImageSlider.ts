import { useRef, useState } from "react";

export const useProductCardImageSlider = (mainImage: string, images: string[]) => {
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
    return { mainimage, xy, imgRef, handleMouseMoveImg, handleMouseLeaveImg, handleClickThumbnail }
}