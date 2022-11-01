import { useQuery } from "@apollo/client";
import React from "react";
import MenuListAdmin from "../WindowListAdmin/WindowListAdmin";
import { GET_ROOT_CATALOG } from "../../../graphql/catalog.graphql";

import s from "./ContentAdminCatalog.module.scss";
import { AdminListType } from "../../../enums/AdminList.enum";

interface ContentAdminCatalogProps {}

const ContentAdminCatalog = ({}: ContentAdminCatalogProps) => {
  const catalog = useQuery(GET_ROOT_CATALOG, {
    variables: {
      findCatalogInput: {
        parent_id: 0,
      },
    },
  });
  console.log("catalog", catalog);

  return (
    <>
      <MenuListAdmin
        typeList={AdminListType.Catalog}
        title="Каталог"
        itemArr={catalog.data ? catalog.data.getCatalogByParent : null}
        visible={true}
        optionsBtnVisible={false}
        createItemName={null}
        updateItemName={null}
        deleteItemName={null}
        clickToItem={null}
      />
    </>
  );
};

export default ContentAdminCatalog;
