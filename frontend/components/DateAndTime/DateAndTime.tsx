import React, { FC, useEffect, useState } from 'react';
import dateAndTime from 'date-and-time';
import ru from 'date-and-time/locale/ru'

import s from './DateAndTime.module.scss'

const DateAndTime: FC = () => {
    const [time, setTime] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const getTimeAndDate = () => {
        const now = new Date()
        dateAndTime.locale(ru)
        setTime(dateAndTime.format(now, 'HH:mm'))
        setDate(dateAndTime.format(now, 'dddd, DD MMMM YYYY г'))
    }

    useEffect(() => {
        getTimeAndDate()
        const timeInterval = setInterval(() => {
            getTimeAndDate()
        }, 60000)
        return () => clearInterval(timeInterval)
    }, [])

    return (
        <div className={s.wrap}>
            <div className={s.time}>{time}</div>
            <div className={s.date}>{date}</div>
        </div>
    );
};

export default DateAndTime;