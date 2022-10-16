import React, { FC } from 'react'
import ContentAdminMenu from '../../../components/admin/ContentAdminMenu/ContentAdminMenu'
import ContentAdminTitle from '../../../components/admin/ContentAdminTitle/ContentAdminTitle'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'
import s from './AdminPanelMenu.module.scss'

interface AdminPanelMenuProps { }

const AdminPanelMenu: FC<AdminPanelMenuProps> = ({ }) => {
  return (
    <div className={s.wrap}>
      <AdminLayout sidebarItemNum={0}>
        <ContentAdminTitle title="Меню" />
        <div className={s.content}>
          <ContentAdminMenu />
        </div>
      </AdminLayout>
    </div>
  )
}

export default AdminPanelMenu