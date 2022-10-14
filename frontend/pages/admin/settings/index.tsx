import React, { FC } from 'react'
import ContentAdminSettings from '../../../components/admin/ContentAdminSettings/ContentAdminSettings'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

import s from './AdminPanelSettings.module.scss'

interface AdminPanelSettingsProps { }

const AdminPanelSettings: FC<AdminPanelSettingsProps> = () => {
  return (
    // <div className={s.wrap}>
      <AdminLayout sidebarItemNum={5}>
        <ContentAdminSettings />
      </AdminLayout>
    // </div>
  )
}

export default AdminPanelSettings