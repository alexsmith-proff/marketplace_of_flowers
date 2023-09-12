import { FC } from "react";
import { ISocialBtn } from "../../../interfaces/social.interface";
import TopInfoSocialItem from "../TopInfoSocialItem/TopInfoSocialItem";

interface TopInfoSocialProps {
    socialItems: ISocialBtn[]
}

const TopInfoSocial: FC<TopInfoSocialProps> = ({ socialItems }) => {
    return (
        <ul>
            {
                socialItems.map(item => <TopInfoSocialItem link={item.link} imgSrc={item.imgSrc} altSrc={item.altSrc} />)
            }
        </ul>
    )
}

export default TopInfoSocial