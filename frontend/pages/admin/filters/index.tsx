import React, { FC } from 'react'
import ContentAdminFilters from '../../../components/admin/ContentAdminFilters/ContentAdminFilters'
import ContentAdminMenu from '../../../components/admin/ContentAdminMenu/ContentAdminMenu'
import ContentAdminTitle from '../../../components/admin/ContentAdminTitle/ContentAdminTitle'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

import s from './AdminPanelFilters.module.scss'


interface AdminPanelFiltersProps {
}

const AdminPanelFilters: FC<AdminPanelFiltersProps> = ({  }) => {
  return (
    <div className={s.wrap}>
      <AdminLayout sidebarItemNum={3}>
        <ContentAdminTitle title="Фильтры" />
        <div className={s.content}>
          <ContentAdminFilters />
        </div>
      </AdminLayout>
    </div>
  )
}

export default AdminPanelFilters