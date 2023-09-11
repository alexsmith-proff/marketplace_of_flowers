import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
    src: string
}

const Logo: FC<LogoProps> = ({ src }) => {
    return (
        <Link href='/'>
            <a>
                {/* <Image src='/img/logo.png' width={160} height={48} alt='logo' /> */}
                <Image src={src} width={160} height={48} alt='logo' />
            </a>
        </Link>
    )
}

export default Logo