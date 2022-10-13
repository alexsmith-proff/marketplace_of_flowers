import React from 'react';
import HeaderAdmin from '../../components/admin/HeaderAdmin/HeaderAdmin';

import s from './AdminLayout.module.scss'

interface AdminLayoutProps {
    children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <>
            {children}
        </>
    );
};

export default AdminLayout;