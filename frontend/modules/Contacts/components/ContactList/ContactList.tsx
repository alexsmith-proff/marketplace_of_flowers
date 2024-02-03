import { FC } from "react";
import ContactItem from "../ContactItem/ContactItem";
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
                    <ContactItem
                        filenameImg={`${process.env.API_URI_DOCKER}/${shop.filenameImg}`}
                        name={shop.name}
                        address={shop.address}
                        imgUrl={`tel:${shop?.number.replace(/[()-+-' ']/g, '')}`}
                        phoneNumber={shop.number}
                        gps={shop.GPS}
                        key={ind}
                    />
                ))
            }
        </ul>
    )
}

export default ContactList