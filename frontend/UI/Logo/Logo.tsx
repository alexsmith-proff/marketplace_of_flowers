import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    src: string
}

const Logo: FC<LogoProps> = ({ src }) => {
    return (
        <Link href='/'>
            <a>
                <Image src={src} width={160} height={48} alt='logo' />
            </a>
        </Link>
    )
}

export default Logo