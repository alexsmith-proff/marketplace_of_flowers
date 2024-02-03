import { FC, useEffect, useState } from "react";

import s from './Contacts.module.scss'
import { IElement, ISection } from "../../interfaces/section.interface";
import { getElementBySlug, getFileNameInImgBlockFromElement, getTextInTextBlockFromElement, getTextInTextBlockFromSection } from "../../services/core/parse";
// import MapYandex from "../MapYandex/MapYandex";
import Link from "next/link";
import ContactList from "./components/ContactList/ContactList";
import { IShopObj } from "../../interfaces/shop.interface";

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
                    </div>
                </div>
                <ContactList shops={shops} />
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