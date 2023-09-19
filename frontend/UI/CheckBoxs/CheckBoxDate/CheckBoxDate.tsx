import { FC, useState, useEffect } from 'react'
import dateAndTime from 'date-and-time';
import Calendar from 'react-calendar'

import s from './CheckBoxDate.module.scss'
import Image from 'next/image'

interface CheckBoxDateProps {
    name: string,
    setFieldValue: (name: string, value: string) => void
}

const CheckBoxDate: FC<CheckBoxDateProps> = ({ name, setFieldValue }) => {
    const [value, setValue] = useState(new Date())
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleOnChangeCalendar = (nextValue) => {
        const now = new Date()
        if (nextValue.valueOf() >= now.valueOf() - 86400000) {
            setValue(nextValue)
            setIsOpen(false)
        }

    }

    useEffect(() => {
        setFieldValue(name, dateAndTime.format(value, 'DD.MM.YYYY г.'))
    }, [])

    useEffect(() => {
        setFieldValue(name, dateAndTime.format(value, 'DD.MM.YYYY г.'))
    }, [value])

    return (
        <div className={s.checkBox}>
            <div className={s.title}>Дата</div>
            <div className={s.main} onClick={handleClickOpen}>
                <div className={s.text}>{dateAndTime.format(value, 'DD.MM.YYYY г.')}</div>
                <Image src={`/img/date-ico.png`} width={24} height={24} />
            </div>
            {
                isOpen &&
                <div className={s.calendar}>
                    <Calendar value={value} onChange={handleOnChangeCalendar} />
                </div>
            }
        </div>
    )
}

export default CheckBoxDate