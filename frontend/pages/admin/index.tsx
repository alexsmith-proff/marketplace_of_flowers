import React, { FC } from 'react'
import ContentAdminMain from '../../components/admin/ContentAdminMain/ContentAdminMain'
import HeaderAdmin from '../../components/admin/HeaderAdmin/HeaderAdmin'
import SidebarAdmin from '../../components/admin/SidebarAdmin/SidebarAdmin'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import s from './AdminPanel.module.scss'

interface AdminPanelProps { }

const AdminPanel: FC<AdminPanelProps> = () => {
  return (
    <AdminLayout>
      <div className={s.wrap}>
        <SidebarAdmin />
        <div className={s.right}>
          <HeaderAdmin />
          <ContentAdminMain />
        </div>

      </div>
    </AdminLayout>
  )
}

export default AdminPanel