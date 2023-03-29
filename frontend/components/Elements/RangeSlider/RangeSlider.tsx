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
    dualThumb?: boolean
    valueMax: number
    valueMin: number
    changeValueMax?: (value: number) => void
    changeValueMin?: (value: number) => void
}

const RangeSlider: FC<RangeSliderProps> = ({
    // Ширина track
    widthTrack = 200,
    // Высота track
    heightTrack = 100,
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
    // Режим двух thumb, dualThumb=true - отображаются два thumb
    dualThumb = true,
    // Текущее значение RangeSlider
    valueMax,
    valueMin,
    // valueTwo,
    changeValueMax,
    changeValueMin,
}) => {
    // const [posMouse, SetPosMouse] = useState({ x: 0, y: 0 })
    const [posThumbMax, SetPosThumbMax] = useState(() => {
        if (valueMax >= maxValueTrack) return Math.round(maxValueTrack * (widthTrack / (maxValueTrack - minValueTrack)))
        if (valueMax <= minValueTrack) return Math.round(minValueTrack * (widthTrack / (maxValueTrack - minValueTrack)))
        return Math.round(valueMax * (widthTrack / (maxValueTrack - minValueTrack)))

    })
    const [posThumbMin, SetPosThumbMin] = useState(() => {
        if (valueMin >= maxValueTrack) return Math.round(maxValueTrack * (widthTrack / (maxValueTrack - minValueTrack)))
        if (valueMin <= minValueTrack) return Math.round(minValueTrack * (widthTrack / (maxValueTrack - minValueTrack)))
        return Math.round(valueMin * (widthTrack / (maxValueTrack - minValueTrack)))

    })
    const [isActiveThumbMax, setIsActiveThumbMax] = useState<boolean>(false)
    const [isActiveThumbMin, setIsActiveThumbMin] = useState<boolean>(false)

    const refTrack = useRef(null)
    const refThumb = useRef(null)

    useEffect(() => {
        const MouseMoveHandle = (e) => {
            e.preventDefault();
            // SetPosMouse((a) => a = { x: e.screenX, y: e.screenY })
            if (isActiveThumbMax || isActiveThumbMin) {
                const rect: DOMRect = refTrack.current.getBoundingClientRect()
                const currentValue = e.screenX - Math.floor(rect.x)

                if ((currentValue <= rect.width) && (currentValue >= 0)) {
                    if (changeValueMax || changeValueMin) {
                        // Вычисленное значение
                        const computedValue = minValueTrack + Math.round(currentValue * ((maxValueTrack - minValueTrack) / rect.width))
                        if (changeValueMax && isActiveThumbMax) {
                            changeValueMax(computedValue)
                            // Позиция в пикселях
                            SetPosThumbMax(currentValue)
                        }
                        if (changeValueMin && isActiveThumbMin) {
                            changeValueMin(computedValue)
                            // Позиция в пикселях
                            SetPosThumbMin(currentValue)
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
                            // width: posThumbMax,
                            top: 0,
                            bottom: 0,
                            left: posThumbMin,
                            right: widthTrack - posThumbMax,
                            // height: heightTrack,
                            borderRadius: borderRadiusTrack,
                            backgroundColor: colorProgressTrack,
                        }}>
                        </div>
                        {/* {
                            dualThumb &&
                            <div className={s.progress} style={{
                                // width: posThumbMax,
                                height: heightTrack,
                                borderRadius: borderRadiusTrack,
                                backgroundColor: colorProgressTrack,
                            }}>
                            </div>
                        } */}
                    </div>
                }
                <div ref={refThumb} className={s.thumb} style={{
                    width: widthThumb,
                    height: heightThumb,
                    backgroundColor: colorThumb,
                    top: heightTrack / 2 - heightThumb / 2,
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
                        top: heightTrack / 2 - heightThumb / 2,
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