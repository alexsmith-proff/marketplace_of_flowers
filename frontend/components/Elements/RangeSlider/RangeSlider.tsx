import { FC, MouseEvent, useEffect, useRef, useState } from "react"
import s from './RangeSlider.module.scss'

interface RangeSliderProps {
    widthTrack?: number
    heightTrack?: number
    colorTrack?: string
    widthThumb?: number
    heightThumb?: number
    colorThumb?: string
    round?: boolean 
    value?: number
}

const RangeSlider: FC<RangeSliderProps> = ({
    widthTrack = 200,
    heightTrack = 5,
    colorTrack = '#41bb1c', 
    widthThumb = 15,
    heightThumb = 15,
    colorThumb = '#f0f',
    round = true,
    value = 0,
 }) => {
    // const [posMouse, SetPosMouse] = useState({ x: 0, y: 0 })
    const [posThumb, SetPosThumb] = useState(value)
    const [isActiveThumb, setIsActiveThumb] = useState<boolean>(false)

    const refTrack = useRef(null)
    const refThumb = useRef(null)

    useEffect(() => {
        const MouseMoveHandle = (e) => {
            e.preventDefault();
            // SetPosMouse((a) => a = { x: e.screenX, y: e.screenY })
            if (isActiveThumb) {
                const rect: DOMRect = refTrack.current.getBoundingClientRect()
                if (((e.screenX - rect.x) < rect.width) && ((e.screenX - rect.x) > 0)) {
                    SetPosThumb(e.screenX - rect.x)
                }
            }
            // console.log('moveeee');
        }
        const MouseUpHandle = (e) => {
            e.preventDefault()
            setIsActiveThumb(false)
        }
        window.addEventListener('mousemove', MouseMoveHandle)
        window.addEventListener('mouseup', MouseUpHandle)

        return () => {
            window.removeEventListener('mousemove', MouseMoveHandle)
            window.removeEventListener('mouseup', MouseUpHandle)
        }

    }, [isActiveThumb])

    const MouseDownHandle = (e) => {
        e.preventDefault();
        setIsActiveThumb((a) => a = true)
    }

    return (
        <div>
            <div ref={refTrack} className={s.track} style={{
                width: widthTrack,
                height: heightTrack,
                backgroundColor: colorTrack,
            }}>
                <div ref={refThumb} className={s.thumb} style={{
                    width: widthThumb,
                    height: heightThumb,
                    backgroundColor: colorThumb,
                    top: heightTrack/2 - heightThumb/2,
                    left: posThumb - widthThumb/2,
                    borderRadius: round ? '50%' : '0',
                }} onMouseDown={MouseDownHandle}></div>
            </div>
        </div>
    )
}

export default RangeSlider