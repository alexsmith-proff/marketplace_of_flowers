import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { CREATE_CATALOG_NAME, GET_ROOT_CATALOG, UPDATE_CATALOG_NAME, DELETE_CATALOG_NAME } from "../../../../graphql/catalog.graphql";
import WindowListAdmin from "../../WindowListAdmin/WindowListAdmin";
import { AdminListType } from "../../../../enums/AdminList.enum";
import { ICatalog } from "../../../../interfaces/catalog.interface";

import s from "./CreateCatalogSection.module.scss";

interface CreateCatalogSectionProps {}

const CreateCatalogSection: FC<CreateCatalogSectionProps> = () => {
  const catalogRoot = useQuery(GET_ROOT_CATALOG, {
    variables: {
      findCatalogInput: {
        parent_id: 0,
      },
    },
  });

  const [getCatalogById, { loading, error, data }] = useLazyQuery(GET_ROOT_CATALOG);
  const [createCatalogName, dataCreateCatalogName] = useMutation(CREATE_CATALOG_NAME)
  const [updateCatalogName, dataUpdateCatalogName] = useMutation(UPDATE_CATALOG_NAME)
  const [deleteCatalogName, dataDeletCatalogName] = useMutation(DELETE_CATALOG_NAME)

  const [catalogArr, setCatalogArr] = useState<ICatalog[][]>(null);

  const [currentWindowNum, setCurrentWindowNum] = useState<number>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(null);
  const [titleWindows, setTitleWindows] = useState<string[]>(["Каталог"]);
  const [parentArr, setparentArr] = useState<ICatalog[]>([null])

  useEffect(() => {
    if (catalogRoot.data) {
      setCatalogArr([[...catalogRoot.data.getCatalogByParent]]);
    }
  }, [catalogRoot]);

  useEffect(() => {
    if (data) {
      let newCatalogArr;
      if (catalogArr.length - 1 > currentWindowNum) {
        newCatalogArr = catalogArr.filter(
          (item, index) => index <= currentWindowNum
        );
      } else {
        newCatalogArr = catalogArr;
      }
      setCatalogArr([...newCatalogArr, data.getCatalogByParent]);
    }
    console.log('dataaaa', data);
    
  }, [data]);

  const handleCreateItemName = async(nameCatalog: string, serial_number: number, windowNum: number) => {
    await createCatalogName({
        variables: {
            createCatalogInput: {
            name: nameCatalog,
            serial_number: +serial_number,
            parent_id: windowNum != 0 ? +parentArr[windowNum].id : null
          }
        }, 
        // refetchQueries: [
        //     {
        //       query: GET_ROOT_CATALOG,
        //       variables: {
        //         findCatalogInput: {
        //           parent_id: windowNum != 0 ? +parentArr[windowNum].id : null
        //         },
        //       }
        //     }
        //   ]
    })
    
  }

  const handleUpdateItemName = async(id: number, nameCatalog: string, windowNum: number) => {
    console.log('windowNummmmmm', windowNum);
    console.log('parentArrrrrrr', parentArr);
    
    await updateCatalogName({
      variables: {
        updateCatalogInput: {
          id: +id,
          name: nameCatalog
        }, 
        // refetchQueries: [
        //     {
        //       query: GET_ROOT_CATALOG,
        //       variables: {
        //         findCatalogInput: {
        //           parent_id: windowNum != 0 ? +parentArr[windowNum].id : null
        //         },
        //       }
        //     }
        //   ]
      }
    })
    
  }
  const handleDeleteItemName = async(id: number, windowNum: number) => {
    await deleteCatalogName({
      variables: {
        id: +id
      }, 
    //   refetchQueries: [
    //       {
    //         query: GET_ROOT_CATALOG,
    //         variables: {
    //           findCatalogInput: {
    //             parent_id: windowNum != 0 ? +parentArr[windowNum].id : null
    //           },
    //         }
    //       }
    //     ]
    })
    
  }


  const handleClickToItem = (windowNum: number, itemIndex: number) => {
    // console.log(`Окно = ${windowNum}; ItemIndex = ${itemIndex}`)
    setCurrentWindowNum(windowNum);
    setCurrentItemIndex(itemIndex);
    let newparentArr = []
    newparentArr = [...parentArr]
    newparentArr[windowNum + 1] = catalogArr[windowNum][itemIndex]    
    setparentArr([...newparentArr])

    let newTitleWindows = [...titleWindows];
    newTitleWindows[windowNum + 1] = catalogArr[windowNum][itemIndex].name;
    setTitleWindows(newTitleWindows);

    getCatalogById({
      variables: {
        findCatalogInput: {
          parent_id: +catalogArr[windowNum][itemIndex].id,
        },
      },
    });
  };

  

  return (
    <div className={s.catalogSection}>
      {catalogArr &&
        catalogArr.map((item, windowNum) => (
          <WindowListAdmin
            key={windowNum}
            typeList={AdminListType.Catalog}
            title={titleWindows[windowNum]}
            itemArr={item}
            visible={true}
            optionsBtnVisible={false}
            createItemName={(name) => handleCreateItemName(name, windowNum != 0 ? (parentArr[windowNum].children.length + 1) * 100 : (catalogArr[0].length + 1) * 100, windowNum)}
            updateItemName={(indexItem, name) => handleUpdateItemName(catalogArr[windowNum][indexItem].id, name, windowNum)}
            deleteItemName={(indexItem) => handleDeleteItemName(catalogArr[windowNum][indexItem].id, windowNum)}
            clickToItem={(itemIndex) => handleClickToItem(windowNum, itemIndex)}
          />
        ))}
    </div>
  );
};

export default CreateCatalogSection;
