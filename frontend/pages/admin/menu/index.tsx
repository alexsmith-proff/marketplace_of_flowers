import React, { FC } from 'react'
import ContentAdminMenu from '../../../components/admin/ContentAdminMenu/ContentAdminMenu'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

import s from './AdminPanelMenu.module.scss'

interface AdminPanelMenuProps { }

const AdminPanelMenu: FC<AdminPanelMenuProps> = () => {
  return (
    <AdminLayout sidebarItemNum={1}>
      <ContentAdminMenu />
    </AdminLayout>
  )
}

export default AdminPanelMenu