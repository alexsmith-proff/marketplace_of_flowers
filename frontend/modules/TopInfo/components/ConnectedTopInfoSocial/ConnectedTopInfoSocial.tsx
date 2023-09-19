import { FC } from "react";
import TopInfoSocial from "../TopInfoSocial/TopInfoSocial";
import { ISocialBtn } from "../../../../interfaces/social.interface";

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