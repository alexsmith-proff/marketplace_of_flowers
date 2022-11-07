import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { CREATE_CATALOG_NAME, GET_CATALOG_BY_PARENT_ID, UPDATE_CATALOG_NAME, DELETE_CATALOG_NAME, GET_ALL_CATALOG } from "../../../../graphql/catalog.graphql";
import WindowListAdmin from "../../WindowListAdmin/WindowListAdmin";
import { AdminListType } from "../../../../enums/AdminList.enum";
import { ICatalog } from "../../../../interfaces/catalog.interface";

import s from "./CreateCatalogSection.module.scss";
import { AdminActionWindowType } from "../../../../enums/AdminActions.enum";

interface CreateCatalogSectionProps { }

const CreateCatalogSection: FC<CreateCatalogSectionProps> = () => {
  // const catalogRoot = useQuery(GET_CATALOG_BY_PARENT_ID, {
  //   variables: {
  //     findCatalogInput: {
  //       parent_id: 0,
  //     },
  //   },
  // });

  const [getCatalogByIdClick, { loading: loadingGetCatalogByID, error: errorGetCatalogByID, data: dataGetCatalogByID }] = useLazyQuery(GET_CATALOG_BY_PARENT_ID);
  const [createCatalogName, dataCreateCatalogName] = useMutation(CREATE_CATALOG_NAME)
  const [updateCatalogName, dataUpdateCatalogName] = useMutation(UPDATE_CATALOG_NAME)
  const [deleteCatalogName, dataDeletCatalogName] = useMutation(DELETE_CATALOG_NAME)

  const [catalogArr, setCatalogArr] = useState<ICatalog[][]>(null);

  const [currentWindowNum, setCurrentWindowNum] = useState<number>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(null);
  const [titleWindows, setTitleWindows] = useState<string[]>(["Каталог"]);
  const [parentArr, setparentArr] = useState<ICatalog[]>([null])
  const [actionWindow, setActionWindow] = useState<AdminActionWindowType>(null)

  // useEffect(() => {
  //   console.log('catalogRoottttttt');
    
  //   if (catalogRoot.data) {
  //     setCatalogArr([[...catalogRoot.data.getCatalogByParent]]);
  //   }
  // }, [catalogRoot]);

  useEffect(() => {
    console.log('useEffect')
    setActionWindow(AdminActionWindowType.Initial)

    getCatalogByIdClick({
      variables: {
        findCatalogInput: {
          parent_id: 0
        },
      },
    })

  }, []);


  useEffect(() => {
    console.log('---------------------------', dataGetCatalogByID);

    if (actionWindow === AdminActionWindowType.Initial) {
      let InitialCatalogArr = []
      if(dataGetCatalogByID){
        InitialCatalogArr[0] = dataGetCatalogByID.getCatalogByParent
        setCatalogArr([...InitialCatalogArr])
      }
    }
    if (actionWindow === AdminActionWindowType.ClickParent) {
      if (dataGetCatalogByID) {
        let newCatalogArr;
        if (catalogArr.length - 1 > currentWindowNum) {
          newCatalogArr = catalogArr.filter(
            (item, index) => index <= currentWindowNum
          );
        } else {
          newCatalogArr = catalogArr;
        }
        setCatalogArr([...newCatalogArr, dataGetCatalogByID.getCatalogByParent]);
      }
      console.log('dataGetCatalogByIDClick', dataGetCatalogByID);
    }
    if(actionWindow == AdminActionWindowType.CreateItem){
      // let newCatalogArr = [...catalogArr, catalogArr[currentWindowNum - 1] = dataGetCatalogByID.getCatalogByParent]
      let newCatalogArr = [...catalogArr]
      newCatalogArr[currentWindowNum] = dataGetCatalogByID.getCatalogByParent
      setCatalogArr([...newCatalogArr])
      
      console.log('dataGetCatalogByIDCreate', newCatalogArr);      
    }
  }, [dataGetCatalogByID]);





  const handleCreateItemName = (nameCatalog: string, serial_number: number, windowNum: number) => {
    console.log(nameCatalog, serial_number, windowNum);
    console.log('parentttt', windowNum != 0 ? +parentArr[windowNum].id : null);
    
    
    setActionWindow(AdminActionWindowType.CreateItem)
    setCurrentWindowNum(windowNum)

    createCatalogName({
      variables: {
        createCatalogInput: {
          name: nameCatalog,
          serial_number: +serial_number,
          parent_id: windowNum != 0 ? Number(parentArr[windowNum].id) : null
        }
      },
      refetchQueries: [
        {
          query: GET_CATALOG_BY_PARENT_ID,
          variables: {
            findCatalogInput: {
              parent_id: windowNum != 0 ? Number(parentArr[windowNum].id) : null
            },
          }
        }
      ],
      awaitRefetchQueries: true,
    })

  
    console.log('zzzzzzzzzzzzzzzzzzzz');
  }

  const handleUpdateItemName = async (id: number, nameCatalog: string, windowNum: number) => {
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
        //       query: GET_CATALOG_BY_PARENT_ID,
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
  const handleDeleteItemName = async (id: number, windowNum: number) => {
    await deleteCatalogName({
      variables: {
        id: +id
      },
      //   refetchQueries: [
      //       {
      //         query: GET_CATALOG_BY_PARENT_ID,
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
    setActionWindow(AdminActionWindowType.ClickParent)
    setCurrentWindowNum(windowNum);
    setCurrentItemIndex(itemIndex);
    let newparentArr = []
    newparentArr = [...parentArr]
    newparentArr[windowNum + 1] = catalogArr[windowNum][itemIndex]
    setparentArr([...newparentArr])

    let newTitleWindows = [...titleWindows];
    newTitleWindows[windowNum + 1] = catalogArr[windowNum][itemIndex].name;
    setTitleWindows(newTitleWindows);

    getCatalogByIdClick({
      variables: {
        findCatalogInput: {
          parent_id: +catalogArr[windowNum][itemIndex].id,
        },
      },
    });
  };

  console.log('catalogArrrrr', catalogArr);


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
