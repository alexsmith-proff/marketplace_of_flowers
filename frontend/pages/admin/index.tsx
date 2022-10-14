import React, { FC } from 'react'
import ContentAdminMain from '../../components/admin/ContentAdminMain/ContentAdminMain'
import ContentAdminTitle from '../../components/admin/ContentAdminTitle/ContentAdminTitle'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import s from './AdminPanel.module.scss'

interface AdminPanelProps { }

const AdminPanel: FC<AdminPanelProps> = ({ }) => {
  return (
    <div className={s.wrap}>
      <AdminLayout sidebarItemNum={0}>
        <ContentAdminTitle title="Главная" />
        <div className={s.content}>
          <ContentAdminMain />
        </div>
      </AdminLayout>
    </div>
  )
}

export default AdminPanel