import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ROOT_CATALOG } from "../../../graphql/catalog.graphql";
import WindowListAdmin from "../WindowListAdmin/WindowListAdmin";

import s from "./ContentAdminCatalog.module.scss";
import { AdminListType } from "../../../enums/AdminList.enum";
import { ICatalog } from "../../../interfaces/catalog.interface";

interface ContentAdminCatalogProps { }

const ContentAdminCatalog = ({ }: ContentAdminCatalogProps) => {
  const catalogRoot = useQuery(GET_ROOT_CATALOG, {
    variables: {
      findCatalogInput: {
        parent_id: 0,
      },
    },
  })

  const [getCatalogById, { loading, error, data }] = useLazyQuery(GET_ROOT_CATALOG);

  const [catalogArr, setCatalogArr] = useState<ICatalog[][]>(null)

  const [currentWindowNum, setCurrentWindowNum] = useState<number>(null)
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(null)

  useEffect(() => {
    if (catalogRoot.data) {

      setCatalogArr([[...catalogRoot.data.getCatalogByParent]])
    }
  }, [catalogRoot])

  useEffect(() => {
    if (data) {
      if((catalogArr.length - 1) > currentWindowNum) {
        const arrLength = catalogArr.length - 1
        console.log('arrLength', arrLength);
        
        setCatalogArr(catalogArr.filter((item, index) => index <= arrLength))
      }
      setCatalogArr([...catalogArr, data.getCatalogByParent])
    }
  }, [data])


  console.log("catalogArr", catalogArr);
  console.log('data', data);

  const handleClickToItem = (windowNum: number, itemIndex: number) => {
    console.log(`Окно = ${windowNum}; ItemIndex = ${itemIndex}`)
    setCurrentWindowNum(windowNum)
    setCurrentItemIndex(itemIndex)
    console.log('parent_id', catalogArr[windowNum][itemIndex].id)

    getCatalogById({
      variables: {
        findCatalogInput: {
          parent_id: +catalogArr[windowNum][itemIndex].id,
        }
      }
    })
  }



  return (
    <>
      {
        catalogArr &&
        catalogArr.map((item, windowNum) =>
          <WindowListAdmin
            key={windowNum}
            typeList={AdminListType.Catalog}
            title="Каталог"
            itemArr={item}
            visible={true}
            optionsBtnVisible={false}
            createItemName={null}
            updateItemName={null}
            deleteItemName={null}
            clickToItem={(itemIndex) => handleClickToItem(windowNum, itemIndex)}
          />)
      }
    </>
  );
};

export default ContentAdminCatalog;
