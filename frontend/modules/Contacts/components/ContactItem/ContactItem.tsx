import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import s from './ContactItem.module.scss'

interface ContactItemProps {
    filenameImg: string
    name: string
    address: string
    imgUrl: string
    phoneNumber: string
    gps: string
}

const ContactItem: FC<ContactItemProps> = ({ filenameImg, name, address, imgUrl, phoneNumber, gps }) => {
    return (
        <li className={s.item}>
            <Image className={s.img} src={filenameImg} width={520} height={390} alt="phone-ico" />
            <div className={s.content}>
                <p className={s.name}>{name}</p>
                <p className={s.address}>{address}</p>
                <div className={s.info}>
                    <div className={s.infoItem}>
                        <Image src={'/img/phone-btn.png'} width={24} height={24} alt="phone-ico" />
                        <div className={s.infoContent}>
                            <p className={s.infoTitle}>Телефон:</p>
                            <Link href={imgUrl}>
                                <a>
                                    <p className={s.infoText}>{phoneNumber}</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={s.infoItem}>
                        <Image src={'/img/map-point.png'} width={32} height={32} alt="phone-ico" />
                        <div className={s.infoContent}>
                            <p className={s.infoTitle}>GPS:</p>
                            <p className={s.infoText}>{gps}</p>
                        </div>
                    </div>

                </div>
            </div>
        </li>
    )
}

export default ContactItem