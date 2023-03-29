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
    borderThumb?: string
    round?: boolean
    minValueTrack?: number
    maxValueTrack?: number
    dualThumb?: boolean
    valueMax?: number
    valueMin?: number
    changeValueMax?: (value: number) => void
    changeValueMin?: (value: number) => void
}

const RangeSlider: FC<RangeSliderProps> = ({
    // Ширина track
    widthTrack = 200,
    // Высота track
    heightTrack = 5,
    // Border track
    // borderTrack = '1px solid #000',
    borderTrack = 'none',
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
    // Border Thumb
    borderThumb = 'none',
    // Вид ручки: round=true - круглая ручка, round=false некруглая
    round = true,
    // Минимальное значение RangeSlider
    minValueTrack = 0,
    // Максимальное значение RangeSlider
    maxValueTrack = 1,
    // Режим двух thumb, dualThumb=true - отображаются два thumb
    dualThumb = false,
    // Начальное максимальное значение
    valueMax = maxValueTrack,
    // Начальное минимальное значение
    valueMin = minValueTrack,
    // Функция изменения максимального значения
    changeValueMax,
    // Функция изменения минимального значения
    changeValueMin,
}) => {
    const [posThumbMax, SetPosThumbMax] = useState(() => {
        if (valueMax >= maxValueTrack) return Math.round((maxValueTrack - minValueTrack) * (widthTrack / (maxValueTrack - minValueTrack)))
        if (valueMax <= minValueTrack) return Math.round((minValueTrack - minValueTrack) * (widthTrack / (maxValueTrack - minValueTrack)))
        return Math.round((valueMax - minValueTrack) * (widthTrack / (maxValueTrack - minValueTrack)))

    })
    const [posThumbMin, SetPosThumbMin] = useState(() => {
        if (valueMin >= maxValueTrack) return Math.round((maxValueTrack - minValueTrack) * (widthTrack / (maxValueTrack - minValueTrack)))
        if (valueMin <= minValueTrack) return Math.round((minValueTrack - minValueTrack) * (widthTrack / (maxValueTrack - minValueTrack)))
        return Math.round((valueMin - minValueTrack) * (widthTrack / (maxValueTrack - minValueTrack)))

    })
    const [isActiveThumbMax, setIsActiveThumbMax] = useState<boolean>(false)
    const [isActiveThumbMin, setIsActiveThumbMin] = useState<boolean>(false)

    const refTrack = useRef(null)
    const refThumb = useRef(null)

    useEffect(() => {
        const MouseMoveHandle = (e) => {
            e.preventDefault();
            if (isActiveThumbMax || isActiveThumbMin) {
                const rect: DOMRect = refTrack.current.getBoundingClientRect()
                const currentValue = e.screenX - Math.floor(rect.x)

                if ((currentValue <= rect.width) && (currentValue >= 0)) {

                    if (isActiveThumbMax && (((currentValue >= posThumbMin) && (dualThumb)) || !dualThumb )) {
                        if (changeValueMax) {
                            // Вычисленное значение
                            const computedValue = minValueTrack + Math.round(currentValue * ((maxValueTrack - minValueTrack) / rect.width))
                            changeValueMax(computedValue)
                            // Позиция в пикселях
                            SetPosThumbMax(currentValue)
                        }
                    }

                    if (isActiveThumbMin && currentValue <= posThumbMax && dualThumb) {
                        if (changeValueMax) {
                            // Вычисленное значение
                            const computedValue = minValueTrack + Math.round(currentValue * ((maxValueTrack - minValueTrack) / rect.width))
                            changeValueMin(computedValue)
                            // Позиция в пикселях
                            SetPosThumbMin(currentValue)
                        }
                    }
                    if (isActiveThumbMax && currentValue <= posThumbMin && dualThumb) {
                        if (currentValue != 0) {
                            setIsActiveThumbMax(false)
                            setIsActiveThumbMin(true)
                        }
                    }
                    if (isActiveThumbMin && currentValue >= posThumbMax && dualThumb) {
                        if (currentValue != 0) {
                            setIsActiveThumbMax(true)
                            setIsActiveThumbMin(false)
                        }
                    }
                }
            }
        }
        const MouseUpHandle = (e) => {
            e.preventDefault()
            setIsActiveThumbMax(false)
            setIsActiveThumbMin(false)
        }
        window.addEventListener('mousemove', MouseMoveHandle)
        window.addEventListener('mouseup', MouseUpHandle)

        return () => {
            window.removeEventListener('mousemove', MouseMoveHandle)
            window.removeEventListener('mouseup', MouseUpHandle)
        }

    }, [isActiveThumbMax, isActiveThumbMin])


    
    const MouseDownThumbMaxHandle = (e) => {
        e.preventDefault();
        setIsActiveThumbMax((a) => a = true)
    }
    const MouseDownThumbMinHandle = (e) => {
        e.preventDefault();
        setIsActiveThumbMin((a) => a = true)
    }

    console.log('SliderRange');
    

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
                    <div>
                        <div className={s.progress} style={{
                            top: 0,
                            bottom: 0,
                            left: dualThumb ? posThumbMin : 0,
                            right: widthTrack - posThumbMax,
                            borderRadius: borderRadiusTrack,
                            backgroundColor: colorProgressTrack,
                        }}>
                        </div>
                    </div>
                }
                <div ref={refThumb} className={s.thumb} style={{
                    width: widthThumb,
                    height: heightThumb,
                    backgroundColor: colorThumb,
                    border: borderThumb,
                    top: Math.round(heightTrack / 2) - Math.round(heightThumb / 2),
                    left: posThumbMax - Math.round(widthThumb / 2),
                    borderRadius: round ? '50%' : '0',
                }} onMouseDown={MouseDownThumbMaxHandle}>
                </div>
                {
                    dualThumb &&
                    <div ref={refThumb} className={s.thumb} style={{
                        width: widthThumb,
                        height: heightThumb,
                        backgroundColor: colorThumb,
                        border: borderThumb,
                        top: Math.round(heightTrack / 2) - Math.round(heightThumb / 2),
                        left: posThumbMin - widthThumb / 2,
                        borderRadius: round ? '50%' : '0',
                    }} onMouseDown={MouseDownThumbMinHandle}>
                    </div>
                }
            </div>
        </div>
    )
}

export default RangeSlider