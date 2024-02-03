import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IShopObj } from "../../../../interfaces/shop.interface";

import s from './ContactList.module.scss'

interface ContactListProps {
    shops: IShopObj[]
}

const ContactList: FC<ContactListProps> = ({ shops }) => {
    return (
        <ul className={s.list}>
            {
                shops?.map((shop, ind) => (
                    <li className={s.item} key={ind}>
                        <Image className={s.img} src={`${process.env.API_URI_DOCKER}/${shop.filenameImg}`} width={520} height={390} alt="phone-ico" />
                        <div className={s.content}>
                            <p className={s.name}>{shop.name}</p>
                            <p className={s.address}>{shop.address}</p>
                            <div className={s.info}>
                                <div className={s.infoItem}>
                                    <Image src={'/img/phone-btn.png'} width={24} height={24} alt="phone-ico" />
                                    <div className={s.infoContent}>
                                        <p className={s.infoTitle}>Телефон:</p>
                                        <Link href={`tel:${shop.number.replace(/[()-+-' ']/g, '')}`}>
                                            <a>
                                                <p className={s.infoText}>{shop.number}</p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className={s.infoItem}>
                                    <Image src={'/img/map-point.png'} width={32} height={32} alt="phone-ico" />
                                    <div className={s.infoContent}>
                                        <p className={s.infoTitle}>GPS:</p>
                                        <p className={s.infoText}>{shop.GPS}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default ContactList