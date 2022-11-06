import React, { FC } from "react";
import CreateCatalogSection from "./CreateCatalogSection/CreateCatalogSection";

import s from "./ContentAdminCatalog.module.scss";

interface ContentAdminCatalogProps { }

const ContentAdminCatalog: FC<ContentAdminCatalogProps> = () => {
  
  return (
    <>
      <CreateCatalogSection />
    </>
  );
};

export default ContentAdminCatalog;
