import React, { FC } from "react";
import ContentAdminCatalog from "../../../components/admin/ContentAdminCatalog/ContentAdminCatalog";
import ContentAdminTitle from "../../../components/admin/ContentAdminTitle/ContentAdminTitle";
import AdminLayout from "../../../layouts/AdminLayout/AdminLayout";

import s from "./AdminPanelCatalog.module.scss";

interface AdminPanelCatalogProps {}

const AdminPanelCatalog: FC<AdminPanelCatalogProps> = () => {
  return (
    <AdminLayout sidebarItemNum={2}>
      <ContentAdminTitle title="Каталог" />
      <div className={s.content}>
        <ContentAdminCatalog />
      </div>
    </AdminLayout>
  );
};

export default AdminPanelCatalog;
