import React, { FC } from 'react'
import ContentAdminSettings from '../../../components/admin/ContentAdminSettings/ContentAdminSettings'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

import s from './AdminPanelSettings.module.scss'

interface AdminPanelSettingsProps { }

const AdminPanelSettings: FC<AdminPanelSettingsProps> = () => {
  return (
    <AdminLayout sidebarItemNum={5}>
      <ContentAdminSettings />
    </AdminLayout>
  )
}

export default AdminPanelSettings