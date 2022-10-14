import React, { FC } from 'react'
import ContentAdminMain from '../../components/admin/ContentAdminMain/ContentAdminMain'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import s from './AdminPanel.module.scss'

interface AdminPanelProps { }

const AdminPanel: FC<AdminPanelProps> = ({  }) => {
  return (
    <AdminLayout sidebarItemNum={0}>
      <ContentAdminMain />
    </AdminLayout>
  )
}

export default AdminPanel