import { FC } from "react"
import PhoneBtn from "../../UI/Buttons/PhoneBtn/PhoneBtn"
import Image from "next/image"
import Link from "next/link"

import s from './ContactHint.module.scss'

interface ContactHintProps {
    phoneNumber: string,
    workDays: string,
    email: string
}

const ContactHint: FC<ContactHintProps> = ({ phoneNumber, workDays, email }) => {
    return (
        <div className={s.hint}>
            <div className={s.phone}>
                <div className={s.btn}>
                    <Link href={`tel:${phoneNumber}`}>
                        <a>
                            <PhoneBtn />
                        </a>
                    </Link>
                </div>
                <Link href={`tel:${phoneNumber}`}>
                    <a>
                        <p className={s.number}>
                            {phoneNumber}
                        </p>
                    </a>
                </Link>
            </div>
            <div className={s.time}>
                <div className={s.ico}>
                    <Image src={'/img/clock2.png'} width={24} height={24} alt="clock-ico" />
                </div>
                <p className={s.timeItem}>{workDays}</p>
            </div>
            <div className={s.email}>
                <div className={s.ico}>
                    <Image className={s.ico} src={'/img/email-ico.png'} width={24} height={24} alt="clock-ico" />
                </div>
                <Link href={`mailto:${email}`}>
                    <a>
                        <p className={s.emailLink}>
                            {email}
                        </p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ContactHint