import React, { FC } from 'react'
import ContentAdminSections from '../../../components/admin/ContentAdminSections/ContentAdminSections'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

import s from './AdminPanelSections.module.scss'

interface AdminPanelSectionsProps { }

const AdminPanelSections: FC<AdminPanelSectionsProps> = () => {
  return (
    <AdminLayout sidebarItemNum={3}>
      <ContentAdminSections />
    </AdminLayout>
  )
}

export default AdminPanelSections