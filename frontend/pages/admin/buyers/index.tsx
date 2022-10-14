import React, { FC } from 'react'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

import s from './AdminPanelBuyers.module.scss'
import ContentAdminBuyers from '../../../components/admin/ContentAdminBuyers/ContentAdminBuyers'

interface AdminPanelBuyersProps {}

const AdminPanelBuyers: FC<AdminPanelBuyersProps> = ({  }) => {
  return (
    <AdminLayout sidebarItemNum={4}>
      <ContentAdminBuyers />
    </AdminLayout>
  )
}

export default AdminPanelBuyers