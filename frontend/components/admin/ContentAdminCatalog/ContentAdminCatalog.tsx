import React, { FC } from "react";
import CreateCatalogSection from "./CreateCatalogSection/CreateCatalogSection";

import s from "./ContentAdminCatalog.module.scss";
import AdminProductSection from "./AdminProductSection/AdminProductSection";

interface ContentAdminCatalogProps { }

const ContentAdminCatalog: FC<ContentAdminCatalogProps> = () => {
  
  return (
    <div className={s.container}>
      <CreateCatalogSection />
      <AdminProductSection />
    </div>
  );
};

export default ContentAdminCatalog;
