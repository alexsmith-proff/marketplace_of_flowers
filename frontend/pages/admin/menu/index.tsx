import React, { FC } from 'react'
import ContentAdminMenu from '../../../components/admin/ContentAdminMenu/ContentAdminMenu'
import ContentAdminTitle from '../../../components/admin/ContentAdminTitle/ContentAdminTitle'
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout'

// import client from '../../../util/apollo-client'

import s from './AdminPanelMenu.module.scss'
import { useQuery } from '@apollo/client'

// export async function getServerSideProps({ query }) {
//   const data = await client.query({
    // query: GET_ALL_MENU
    // query: GET_MENU_BY_ID,
    // variables:{
      // id: 2
    // }
  // })
//   console.log(data);

//   return {
//     props: {
//       // menus: data.getAllMenus
//       menus: true
//     },
//   }  
// }

interface AdminPanelMenuProps {
}

const AdminPanelMenu: FC<AdminPanelMenuProps> = ({  }) => {
  return (
    <div className={s.wrap}>
      <AdminLayout sidebarItemNum={1}>
        <ContentAdminTitle title="Меню" />
        <div className={s.content}>
          <ContentAdminMenu />
        </div>
      </AdminLayout>
    </div>
  )
}

export default AdminPanelMenu