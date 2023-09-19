import { FC, useState, useEffect } from "react";

import s from './CheckBoxTime.module.scss'
import Image from "next/image";

interface CheckBoxTimeProps {
    name: string,
    setFieldValue: (name: string, value: string) => void
}

const times = ['11:00 – 12:00', '12:00 – 13:00', '13:00 – 14:00', '14:00 – 15:00', '15:00 – 16:00', '16:00 – 17:00', '17:00 – 18:00', '18:00 – 19:00', '19:00 – 20:00']

const CheckBoxTime: FC<CheckBoxTimeProps> = ({ name, setFieldValue }) => {
    const [timeIndex, setTimeIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleClickItem = (ind: number) => {
        setTimeIndex(ind)
        setIsOpen(false)
    }

    useEffect(() => {
        setFieldValue(name, times[0])
    }, [])

    useEffect(() => {
        setFieldValue('time', times[timeIndex])
    }, [timeIndex])

    return (
        <div className={s.checkBox}>
            <div className={s.title}>Время</div>
            <div className={s.main} onClick={handleClickOpen}>
                <div className={s.text}>{times[timeIndex]}</div>
                <Image src={`/img/clock2.png`} width={24} height={24} />
            </div>
            {
                isOpen &&
                <ul className={s.open}>
                    {
                        times.map((item, index) => <li className={s.openItem} key={index} onClick={() => handleClickItem(index)}>{item}</li>)
                    }
                </ul>
            }
        </div>
    )
}

export default CheckBoxTime