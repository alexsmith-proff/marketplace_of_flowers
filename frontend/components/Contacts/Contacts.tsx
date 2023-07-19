import { FC, useEffect, useState } from "react";

import s from './Contacts.module.scss'
import { IElement, ISection } from "../../interfaces/section.interface";
import { getElementBySlug, getFileNameInImgBlockFromElement, getTextInTextBlockFromElement, getTextInTextBlockFromSection } from "../../services/core/parse";
import Image from "next/image";
import MapYandex from "../MapYandex/MapYandex";
import Link from "next/link";

interface IShopObj {
    name: string
    address: string
    number: string
    GPS: string
    filenameImg: string
    lat: number
    long: number
}

interface ContactsProps {
    contactsSection: ISection
}

const Contacts: FC<ContactsProps> = ({ contactsSection }) => {
    const [shops, setShops] = useState<IShopObj[]>([])

    const getShop = (element: IElement): IShopObj => {
        return {
            name: getTextInTextBlockFromElement(element, 'name'),
            address: getTextInTextBlockFromElement(element, 'address'),
            number: getTextInTextBlockFromElement(element, 'telefon'),
            GPS: getTextInTextBlockFromElement(element, 'gps'),
            filenameImg: getFileNameInImgBlockFromElement(element, 'image'),
            lat: getTextInTextBlockFromElement(element, 'lat'),
            long: getTextInTextBlockFromElement(element, 'long'),
        }
    }

    useEffect(() => {
        setShops([getShop(getElementBySlug(contactsSection, 'obekt-1')), getShop(getElementBySlug(contactsSection, 'obekt-2'))])
    }, [])

    console.log(getTextInTextBlockFromSection(contactsSection, 'telefon', 'nomer').replace(/[()-+-' ']/g, ''));

    return (
        <section className={s.contacts}>
            <div className="container">
                <div className={s.title}>Контакты</div>
                <div className={s.telephoneTab}>
                    <div className={s.telephoneTabWrap}>
                        <div className={s.telephoneTabText}>Оформление заказа цветов по телефону:</div>
                        <Link href={`tel:${getTextInTextBlockFromSection(contactsSection, 'telefon', 'nomer').replace(/[()-+-' ']/g, '')}`}>
                            <a>
                                <div className={s.telephoneTabNumber}>
                                    {getTextInTextBlockFromSection(contactsSection, 'telefon', 'nomer')}
                                </div>
                            </a>
                        </Link>
                        {/* <div className={s.telephoneTabNumber}>{getTextInTextBlockFromSection(contactsSection, 'telefon', 'nomer')}</div> */}
                    </div>
                </div>
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
                <MapYandex
                    defaultState={{
                        center: [51.670554, 39.192204],
                        zoom: 12
                    }}
                    shops={shops.map(shop => {
                        return { lat: Number(shop.lat), long: Number(shop.long) }
                    })}
                    height={'500px'}

                />
            </div >
        </section >
    )
}

export default Contacts