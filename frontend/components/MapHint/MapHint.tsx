import { FC } from "react"
import ContactHint from "../ContactHint/ContactHint"

import s from './MapHint.module.scss'

interface MapHintProps {
    phoneNumber: string
    workDays: string
    email: string
}

const MapHint: FC<MapHintProps> = ({  phoneNumber, workDays, email }) => {
    return (
        <div className={s.hint}>
            <ContactHint phoneNumber={phoneNumber} workDays={workDays} email={email} />
        </div>
    )
}

export default MapHint