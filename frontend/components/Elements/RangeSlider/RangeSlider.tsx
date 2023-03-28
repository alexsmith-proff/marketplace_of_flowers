import { FC, useEffect, useRef, useState } from "react"
import s from './RangeSlider.module.scss'

interface RangeSliderProps {
    widthTrack?: number
    heightTrack?: number
    borderTrack?: string
    borderRadiusTrack?: number
    colorTrack?: string

    progressTrackEnabled?: boolean
    colorProgressTrack?: string

    widthThumb?: number
    heightThumb?: number
    colorThumb?: string
    round?: boolean
    minValueTrack?: number
    maxValueTrack?: number
    value: number
    changeValue?: (value: number) => void
}

const RangeSlider: FC<RangeSliderProps> = ({
    // Ширина track
    widthTrack = 200,
    // Высота track
    heightTrack = 5,
    // Border track
    borderTrack = '1px solid #000',
    // borderTrack = 'none',
    // Радиус border track. 0 - нет радиуса
    borderRadiusTrack = 0,
    // Цвет Track
    colorTrack = '#dddddd',
    // progressTrack включен/выключен
    progressTrackEnabled = true,
    // Цвет progress Track
    colorProgressTrack = '#94db4d',
    // Ширина ручки
    widthThumb = 15,
    // Высота ручки
    heightThumb = 15,
    // Цвет ручки
    colorThumb = '#f0f',
    // Вид ручки: round=true - круглая ручка, round=false некруглая
    round = true,
    // Минимальное значение RangeSlider
    minValueTrack = 500,
    // Максимальное значение RangeSlider
    maxValueTrack = 44500,
    // Текущее значение RangeSlider
    value,
    changeValue,
}) => {
    // const [posMouse, SetPosMouse] = useState({ x: 0, y: 0 })
    const [posThumb, SetPosThumb] = useState(() => {
        if(value >= maxValueTrack) return Math.round(maxValueTrack * (widthTrack/(maxValueTrack - minValueTrack))) 
        if(value <= minValueTrack) return Math.round(minValueTrack * (widthTrack/(maxValueTrack - minValueTrack))) 
        return Math.round(value * (widthTrack/(maxValueTrack - minValueTrack)))
        
    })
    const [isActiveThumb, setIsActiveThumb] = useState<boolean>(false)

    const refTrack = useRef(null)
    const refThumb = useRef(null)

    useEffect(() => {
        const MouseMoveHandle = (e) => {
            e.preventDefault();
            // SetPosMouse((a) => a = { x: e.screenX, y: e.screenY })
            if (isActiveThumb) {
                const rect: DOMRect = refTrack.current.getBoundingClientRect()
                const currentValue = e.screenX - Math.floor(rect.x)
                
                if ((currentValue <= rect.width) && (currentValue >= 0)) {
                    if (changeValue) {
                        // Вычисленное значение
                        const computedValue = minValueTrack + Math.round(currentValue * ((maxValueTrack - minValueTrack) / rect.width))
                        changeValue(computedValue)
                    }
                    // Позиция в пикселях
                    SetPosThumb(currentValue)
                }
            }
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
                border: borderTrack,
                borderRadius: borderRadiusTrack,
                backgroundColor: colorTrack,
            }}>
                {
                    progressTrackEnabled &&
                    <div className={s.progress} style={{
                        width: posThumb,
                        height: heightTrack,
                        borderRadius: borderRadiusTrack,
                        backgroundColor: colorProgressTrack,
                    }}></div>
                }
                <div ref={refThumb} className={s.thumb} style={{
                    width: widthThumb,
                    height: heightThumb,
                    backgroundColor: colorThumb,
                    top: heightTrack / 2 - heightThumb / 2,
                    left: posThumb - widthThumb / 2,
                    borderRadius: round ? '50%' : '0',
                }} onMouseDown={MouseDownHandle}></div>
            </div>
        </div>
    )
}

export default RangeSlider