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
  const [getCatalogByIdClick, { loading: loadingGetCatalogByID, error: errorGetCatalogByID, data: dataGetCatalogByID }] = useLazyQuery(GET_CATALOG_BY_PARENT_ID);
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

    if (actionWindow.current === AdminActionWindowType.Initial) {
      let InitialCatalogArr = []
      if(dataGetCatalogByID){
        InitialCatalogArr[0] = dataGetCatalogByID.getCatalogByParent
        setCatalogArr([...InitialCatalogArr])
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
      setCatalogArr([...newCatalogArr])
      
      console.log('dataGetCatalogByIDCreate', newCatalogArr);      
    }
    if (dataGetCatalogByID) {
      console.log('data', dataGetCatalogByID); 
    }
  }, [dataGetCatalogByID]);





  const handleCreateItemName = (nameCatalog: string, serial_number: number, parent_id: number, windowNum: number) => {
    console.log(nameCatalog, serial_number, parent_id);
    // console.log('parentttt', windowNum != 0 ? +parentArr[windowNum].id : null);
    // console.log('parentArr[windowNum].id', parentArr ? parentArr[windowNum].id : null);
    // console.log('parentArr', parentArr);
    
    
    actionWindow.current = AdminActionWindowType.CreateItem
    setCurrentWindowNum(windowNum)

    createCatalogName({
      variables: {
        createCatalogInput: {
          // name: 'asaaaa',
          name: nameCatalog,
          // serial_number: +serial_number,
          serial_number: 120,
          // parent_id: 1
          parent_id: parent_id
        }
      },      
      refetchQueries: [
        {
          query: GET_CATALOG_BY_PARENT_ID,
          variables: {
            findCatalogInput: {
              parent_id: parent_id == null ? 0 : parent_id
              // parent_id: 1
            },
          },
          fetchPolicy: 'network-only'
        }
      ],
      // awaitRefetchQueries: true,
    })

    // setTimeout(() => getCatalogByIdClick({
    //   variables: {
    //     findCatalogInput: {
    //       parent_id: windowNum != 0 ? Number(parentArr[windowNum].id) : 0
    //     },
    //   },
    // }), 1000)


  
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
    console.log('Number(catalogArr[windowNum][itemIndex].id) = ', Number(catalogArr[windowNum][itemIndex].id));
    
    actionWindow.current = AdminActionWindowType.ClickParent

    setCurrentWindowNum(windowNum);
    setCurrentItemIndex(itemIndex);

    let newParentArr = []
    newParentArr = [...parentArr]
    newParentArr[windowNum + 1] = catalogArr[windowNum][itemIndex]
    setparentArr([...newParentArr])
    console.log('ParentArr', newParentArr);
    

    let newTitleWindows = [...titleWindows];
    newTitleWindows[windowNum + 1] = catalogArr[windowNum][itemIndex].name;
    setTitleWindows(newTitleWindows);
    console.log('TitleWindows', newTitleWindows);

    getCatalogByIdClick({
      variables: {
        findCatalogInput: {
          parent_id: Number(catalogArr[windowNum][itemIndex].id),
        },
      },
      nextFetchPolicy : 'network-only',
    });
  };

  // console.log('catalogArrrrr', catalogArr);


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
            createItemName={(name) => handleCreateItemName(name, index != 0 ? (parentArr[index].children.length + 1) * 100 : (catalogArr[0].length + 1) * 100, index != 0 ? Number(parentArr[index].id) : null, index)}
            updateItemName={(indexItem, name) => handleUpdateItemName(catalogArr[index][indexItem].id, name, index)}
            deleteItemName={(indexItem) => handleDeleteItemName(catalogArr[index][indexItem].id, index)}
            clickToItem={(itemIndex) => handleClickToItem(index, itemIndex)}
          />
        ))}
    </div>
  );
};

export default CreateCatalogSection;
