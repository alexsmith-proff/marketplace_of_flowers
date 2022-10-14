import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineExport } from "react-icons/ai";

import s from './HeaderAdmin.module.scss'

interface HeaderAdminProps {
}

const HeaderAdmin = ({ }: HeaderAdminProps) => {
    return (
        <header className={s.header}>
            <div className={s.wrap}>
                <div className={s.img}>
                    <Image src="/img/logo.png" width={160} height={48} alt="logo" />
                </div>
                <Link href="/">
                    <a>
                        <AiOutlineExport size={30} />
                    </a>
                </Link>
            </div>
        </header>
    );
};

export default HeaderAdmin;