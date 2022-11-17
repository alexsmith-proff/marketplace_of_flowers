import React, { FC } from 'react'
import ContentAdminSections from '../../../components/admin/ContentAdminSections/ContentAdminSections'
import ContentAdminTitle from '../../../components/admin/ContentAdminTitle/ContentAdminTitle'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

import s from './AdminPanelSections.module.scss'

interface AdminPanelSectionsProps { }

const AdminPanelSections: FC<AdminPanelSectionsProps> = () => {
  return (
    <AdminLayout sidebarItemNum={3}>
      <ContentAdminTitle title="Секции" />
      <div className={s.content}>
      <ContentAdminSections />
      </div>
    </AdminLayout>
  )
}


export default AdminPanelSections