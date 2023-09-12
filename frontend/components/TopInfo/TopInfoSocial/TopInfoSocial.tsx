import { FC } from "react";
import { ISocialBtn } from "../../../interfaces/social.interface";
import TopInfoSocialItem from "../TopInfoSocialItem/TopInfoSocialItem";

import s from './TopInfoSocial.module.scss'

interface TopInfoSocialProps {
    socialItems: ISocialBtn[]
}

const TopInfoSocial: FC<TopInfoSocialProps> = ({ socialItems }) => {
    return (
        <ul className={s.list}>
            {
                socialItems.map(item => <TopInfoSocialItem link={item.link} imgSrc={item.imgSrc} altSrc={item.altSrc} />)
            }
        </ul>
    )
}

export default TopInfoSocial