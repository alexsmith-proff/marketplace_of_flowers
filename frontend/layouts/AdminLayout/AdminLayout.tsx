import React, { FC } from 'react';
import HeaderAdmin from '../../components/admin/HeaderAdmin/HeaderAdmin';
import SidebarAdmin from '../../components/admin/SidebarAdmin/SidebarAdmin';

import s from './AdminLayout.module.scss'

interface AdminLayoutProps {
    sidebarItemNum: number
    children: React.ReactNode
}

const AdminLayout: FC<AdminLayoutProps> = ({ children, sidebarItemNum }: AdminLayoutProps) => {
    return (
        <div className={s.wrap}>
            <SidebarAdmin itemNum={sidebarItemNum} />
            <div className={s.right}>
                <HeaderAdmin />    
                    {children}
            </div>
        </div>
    );
};

export default AdminLayout;