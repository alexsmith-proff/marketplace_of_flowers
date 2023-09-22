import { FC } from "react";
import TopInfoSocialItem from "../TopInfoSocialItem/TopInfoSocialItem";
import { ISocialBtn } from "../../../../interfaces/social.interface";

import s from './TopInfoSocial.module.scss'

interface TopInfoSocialProps {
    socialItems: ISocialBtn[]
}

const TopInfoSocial: FC<TopInfoSocialProps> = ({ socialItems }) => {
    return (
        <ul className={s.list}>
            {
                socialItems.map((item, ind) => <TopInfoSocialItem link={item.link} imgSrc={item.imgSrc} altSrc={item.altSrc} key={ind} />)
            }
        </ul>
    )
}

export default TopInfoSocial