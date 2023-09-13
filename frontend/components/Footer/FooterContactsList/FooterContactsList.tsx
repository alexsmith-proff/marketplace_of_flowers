import { FC } from "react";
import FooterContactItem from "../FooterContactItem/FooterContactItem";
import FooterContactItemBold from "../FooterContactItemBold/FooterContactItemBold";
import { getTextInTextBlockFromElement, getTextInTextBlockFromSection } from "../../../services/core/parse";
import { IElement, ISection } from "../../../interfaces/section.interface";

import s from './FooterContactsList.module.scss'

interface FooterContactsListProps {
    name: string,
    menuCoordinates: IElement[],
    menuEmail: ISection
}

const FooterContactsList: FC<FooterContactsListProps> = ({ name, menuCoordinates, menuEmail }) => {
    return (
        <div className={s.contacts}>
            <div className={s.title}>{name}</div>
            {
                menuCoordinates.map(item => (
                    <FooterContactItemBold name={getTextInTextBlockFromElement(item, 'title')} text={getTextInTextBlockFromElement(item, 'telefon')} key={item.id} />
                ))
            }
            <FooterContactItem name={getTextInTextBlockFromSection(menuEmail, 'e-mail', 'title')} text={getTextInTextBlockFromSection(menuEmail, 'e-mail', 'soderzhimoe')} />

        </div>
    )
}

export default FooterContactsList