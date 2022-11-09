import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { CREATE_CATALOG_NAME, GET_CATALOG_BY_PARENT_ID, UPDATE_CATALOG_NAME, DELETE_CATALOG_NAME, GET_ALL_CATALOG } from "../../../../graphql/catalog.graphql";
import WindowListAdmin from "../../WindowListAdmin/WindowListAdmin";
import { AdminListType } from "../../../../enums/AdminList.enum";
import { ICatalog } from "../../../../interfaces/catalog.interface";

import s from "./CreateCatalogSection.module.scss";
import { AdminActionWindowType } from "../../../../enums/AdminActions.enum";

interface CreateCatalogSectionProps { }

const CreateCatalogSection: FC<CreateCatalogSectionProps> = () => {
  // const [getCatalogByIdClick, { loading: loadingGetCatalogByID, error: errorGetCatalogByID, data: dataGetCatalogByID }] = useLazyQuery(GET_CATALOG_BY_PARENT_ID);
  const { loading: loadingGetCatalogByID, error: errorGetCatalogByID, data: dataGetCatalogByID, refetch } = useQuery(GET_CATALOG_BY_PARENT_ID, {
    notifyOnNetworkStatusChange: true
  }) 
  
  const [createCatalogName, dataCreateCatalogName] = useMutation(CREATE_CATALOG_NAME)
  const [updateCatalogName, dataUpdateCatalogName] = useMutation(UPDATE_CATALOG_NAME)
  const [deleteCatalogName, dataDeletCatalogName] = useMutation(DELETE_CATALOG_NAME)

  const [catalogArr, setCatalogArr] = useState<ICatalog[][]>(null);

  const [currentWindowNum, setCurrentWindowNum] = useState<number>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(null);
  const [titleWindows, setTitleWindows] = useState<string[]>(["Каталог"]);
  const [parentArr, setparentArr] = useState<ICatalog[]>([null])

  // const [actionWindow, setActionWindow] = useState<AdminActionWindowType>(null)
  const actionWindow = useRef<AdminActionWindowType>(null)





  useEffect(() => {
    console.log('useEffect')
    actionWindow.current = AdminActionWindowType.Initial

    // getCatalogByIdClick({
    //   variables: {
    //     findCatalogInput: {
    //       parent_id: 0
    //     },
    //   },
    // })

    refetch({
      findCatalogInput: {
        parent_id: 0
      }
    })

  }, []);


  useEffect(() => {
    console.log('---------------------------', dataGetCatalogByID);

    if (actionWindow.current === AdminActionWindowType.Initial) {
      let InitialCatalogArr = []
      if(dataGetCatalogByID){
        InitialCatalogArr[0] = dataGetCatalogByID.getCatalogByParent
        setCatalogArr([...InitialCatalogArr])
        console.log('dataGetCatalogByID.getCatalogByParent', dataGetCatalogByID.getCatalogByParent);
        
      }
    }
    if (actionWindow.current === AdminActionWindowType.ClickParent) {
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
    if(actionWindow.current == AdminActionWindowType.CreateItem){
      let newCatalogArr = [...catalogArr]
      newCatalogArr[currentWindowNum] = dataGetCatalogByID.getCatalogByParent


/////////////////////////////////////
      // Добавление массива дочерних категорий в children родителя
      if(currentWindowNum != 0){
        const itemsArr = [...catalogArr[currentWindowNum - 1]]
        itemsArr[currentItemIndex] = {...catalogArr[currentWindowNum - 1][currentItemIndex], children: dataGetCatalogByID.getCatalogByParent}
        newCatalogArr[currentWindowNum - 1] = itemsArr
      }
///////////////////////

      
      setCatalogArr([...newCatalogArr])
      
      console.log('dataGetCatalogByIDCreate', newCatalogArr);
    }
    
  }, [dataGetCatalogByID]);





  const handleClickToItem = (windowNum: number, itemIndex: number) => {
    actionWindow.current = AdminActionWindowType.ClickParent

    setCurrentWindowNum(windowNum);
    setCurrentItemIndex(itemIndex);

    let newParentArr = []
    newParentArr = [...parentArr]
    newParentArr[windowNum + 1] = catalogArr[windowNum][itemIndex]
    setparentArr([...newParentArr])

    let newTitleWindows = [...titleWindows];
    newTitleWindows[windowNum + 1] = catalogArr[windowNum][itemIndex].name;
    setTitleWindows(newTitleWindows);

    refetch({
      findCatalogInput: {
        parent_id: Number(catalogArr[windowNum][itemIndex].id)
      }
    })

  };



  const handleCreateItemName = async(nameCatalog: string, serial_number: number, parent_id: number, windowNum: number) => {
    actionWindow.current = AdminActionWindowType.CreateItem
    setCurrentWindowNum(windowNum)

     await createCatalogName({
      variables: {
        createCatalogInput: {
          name: nameCatalog,
          serial_number: 120,
          parent_id: parent_id
        }
      },      
    })

    await refetch({
      findCatalogInput: {
        parent_id: Number(parent_id == null ? 0 : parent_id)
      }
    })  
 
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



  console.log('catalogArrrrr', catalogArr);


  return (
    <div className={s.catalogSection}>
      {catalogArr &&
        catalogArr.map((item, index) => (
          <WindowListAdmin
            key={index}
            typeList={AdminListType.Catalog}
            title={titleWindows[index]}
            itemArr={item}
            visible={true}
            optionsBtnVisible={false}
            clickToItem={(itemIndex) => handleClickToItem(index, itemIndex)}
            createItemName={(name) => handleCreateItemName(name, index != 0 ? (parentArr[index].children.length + 1) * 100 : (catalogArr[0].length + 1) * 100, index != 0 ? Number(parentArr[index].id) : null, index)}
            updateItemName={(indexItem, name) => handleUpdateItemName(catalogArr[index][indexItem].id, name, index)}
            deleteItemName={(indexItem) => handleDeleteItemName(catalogArr[index][indexItem].id, index)}
          />
        ))}
    </div>
  );
};

export default CreateCatalogSection;