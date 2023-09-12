import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import s from './TopInfoSocialItem.module.scss'

interface TopInfoSocialItemProps {
    link: string,
    imgSrc: string,
    altSrc: string
}

const TopInfoSocialItem: FC<TopInfoSocialItemProps> = ({ link, imgSrc, altSrc }) => {
    return (
        <li>
            <Link href={link}>
                <a className={s.TopInfoSocial__link} href={link}>
                    <div className={s.TopInfoSocial__ico}>
                        {/* <Image src={'/img/insta.png'} width={24} height={24} alt='instagram-ico' /> */}
                        <Image src={imgSrc} width={24} height={24} alt={altSrc} />
                    </div>
                </a>
            </Link>
        </li>


    )
}

export default TopInfoSocialItem