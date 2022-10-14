import React, { FC } from 'react'
import ContentAdminCatalog from '../../../components/admin/ContentAdminCatalog/ContentAdminCatalog'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

import s from './AdminPanelCatalog.module.scss'

interface AdminPanelCatalogProps { }

const AdminPanelCatalog: FC<AdminPanelCatalogProps> = () => {
  return (
    <AdminLayout sidebarItemNum={2}>
      <ContentAdminCatalog />
    </AdminLayout>
  )
}

export default AdminPanelCatalog