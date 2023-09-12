import { FC } from "react";
import { ISocialBtn } from "../../../interfaces/social.interface";
import TopInfoSocial from "../TopInfoSocial/TopInfoSocial";

interface ConnectedTopInfoSocialProps { }

const socialItems: ISocialBtn[] = [
    {
        link: '#',
        imgSrc: '/img/vk.png',
        altSrc: 'vk-ico'
    },
    {
        link: '#',
        imgSrc: '/img/insta.png',
        altSrc: 'instagram-ico'
    },
]

const ConnectedTopInfoSocial: FC<ConnectedTopInfoSocialProps> = ({ }) => {
    return (
        <TopInfoSocial socialItems={socialItems} />
    )
}

export default ConnectedTopInfoSocial