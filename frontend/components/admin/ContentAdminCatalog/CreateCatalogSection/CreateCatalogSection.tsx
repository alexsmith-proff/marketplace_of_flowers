import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { CREATE_CATALOG_NAME, GET_CATALOG_BY_PARENT_ID, UPDATE_CATALOG_NAME, DELETE_CATALOG_NAME, GET_ALL_CATALOG } from "../../../../graphql/catalog.graphql";
import WindowListAdmin from "../../WindowListAdmin/WindowListAdmin";
import { AdminListType } from "../../../../enums/AdminList.enum";
import { ICatalog } from "../../../../interfaces/catalog.interface";
import { AdminActionWindowType } from "../../../../enums/AdminActions.enum";

import ButtonAdmin from "../../Buttons/ButtonAdmin/ButtonAdmin";
import {
  AdminButtonFunctional, AdminButtonType
} from "../../../../enums/AdminButtons.enum";

import s from "./CreateCatalogSection.module.scss";

interface IParentCatalog extends ICatalog {
  position: number
}

interface CreateCatalogSectionProps { }

const CreateCatalogSection: FC<CreateCatalogSectionProps> = () => {

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
  const [parentArr, setparentArr] = useState<IParentCatalog[]>([null])
  const [catalogStructureVisible, setCatalogStructureVisible] = useState<boolean>(false)

  // const [actionWindow, setActionWindow] = useState<AdminActionWindowType>(null)
  const actionWindow = useRef<AdminActionWindowType>(null)




  useEffect(() => {
    actionWindow.current = AdminActionWindowType.Initial
    refetch({
      findCatalogInput: {
        parent_id: 0
      }
    })
  }, []);


  useEffect(() => {
    if (actionWindow.current === AdminActionWindowType.Initial) {
      let InitialCatalogArr = []
      if (dataGetCatalogByID) {
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
    if (actionWindow.current == AdminActionWindowType.CreateItem) {
      let newCatalogArr = [...catalogArr]
      newCatalogArr[currentWindowNum] = dataGetCatalogByID.getCatalogByParent


      /////////////////////////////////////
      if (currentWindowNum != 0) {
        // Добавление массива дочерних категорий в children родителя
        const itemsArr = [...catalogArr[currentWindowNum - 1]]
        itemsArr[currentItemIndex] = { ...catalogArr[currentWindowNum - 1][currentItemIndex], children: dataGetCatalogByID.getCatalogByParent }
        newCatalogArr[currentWindowNum - 1] = itemsArr

        // Обновляем массив parentArr
        let newParentArr = []
        newParentArr = [...parentArr]
        newParentArr[currentWindowNum] = { ...newParentArr[currentWindowNum], children: dataGetCatalogByID.getCatalogByParent }
        setparentArr([...newParentArr])
      }
      ///////////////////////


      setCatalogArr([...newCatalogArr])

      console.log('dataGetCatalogByIDCreate', newCatalogArr);
    }
    if (actionWindow.current == AdminActionWindowType.UpdateItem) {
      let newCatalogArr = [...catalogArr]
      newCatalogArr[currentWindowNum] = dataGetCatalogByID.getCatalogByParent
      setCatalogArr([...newCatalogArr])
    }
    if (actionWindow.current == AdminActionWindowType.DeleteItem) {
      let newCatalogArr = [...catalogArr]
      newCatalogArr[currentWindowNum] = dataGetCatalogByID.getCatalogByParent

      /////////////////////////////////////
      if (currentWindowNum != 0) {
        // Добавление массива дочерних категорий в children родителя
        const itemsArr = [...catalogArr[currentWindowNum - 1]]
        itemsArr[parentArr[currentWindowNum].position] = { ...catalogArr[currentWindowNum - 1][parentArr[currentWindowNum].position], children: dataGetCatalogByID.getCatalogByParent }
        newCatalogArr[currentWindowNum - 1] = itemsArr

        if (newCatalogArr[newCatalogArr.length - 1].length == 0) {
          newCatalogArr.pop()
        }

        // Обновляем массив parentArr
        let newParentArr = []
        newParentArr = [...parentArr]
        newParentArr[currentWindowNum] = { ...newParentArr[currentWindowNum], children: dataGetCatalogByID.getCatalogByParent }
        setparentArr([...newParentArr])
      }
      ///////////////////////

      setCatalogArr([...newCatalogArr])
    }

  }, [dataGetCatalogByID]);





  const handleClickToItem = (windowNum: number, itemIndex: number) => {
    actionWindow.current = AdminActionWindowType.ClickParent

    setCurrentWindowNum(windowNum);
    setCurrentItemIndex(itemIndex);

    let newParentArr = []
    newParentArr = [...parentArr]
    newParentArr[windowNum + 1] = { ...catalogArr[windowNum][itemIndex], position: itemIndex }
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



  const handleCreateItemName = async (nameCatalog: string, serial_number: number, parent_id: number, windowNum: number) => {
    actionWindow.current = AdminActionWindowType.CreateItem
    setCurrentWindowNum(windowNum)

    await createCatalogName({
      variables: {
        createCatalogInput: {
          name: nameCatalog,
          serial_number: serial_number,
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
    actionWindow.current = AdminActionWindowType.UpdateItem
    setCurrentWindowNum(windowNum)

    await updateCatalogName({
      variables: {
        updateCatalogInput: {
          id: +id,
          name: nameCatalog,
        }
      },
    })

    await refetch({
      findCatalogInput: {
        parent_id: Number(parentArr[windowNum] == null ? 0 : parentArr[windowNum].id)
      }
    })

  }
  const handleDeleteItemName = async (id: number, windowNum: number) => {
    actionWindow.current = AdminActionWindowType.DeleteItem
    setCurrentWindowNum(windowNum)

    await deleteCatalogName({
      variables: {
        id: Number(id)
      }
    })

    await refetch({
      findCatalogInput: {
        parent_id: Number(parentArr[windowNum] == null ? 0 : parentArr[windowNum].id)
      }
    })

  }



  const handleUpdateSerialNumberByIndexCatalogItem = async (id: number, serialNumber: number, parent_id: number, windowNum: number) => {
    actionWindow.current = AdminActionWindowType.UpdateItem
    setCurrentWindowNum(windowNum)


    await updateCatalogName({
      variables: {
        updateCatalogInput: {
          id: +id,
          serial_number: +serialNumber,
        }
      },
    })

    await refetch({
      findCatalogInput: {
        parent_id: +parent_id
      }
    })

  }

  console.log('catalogArrrr', catalogArr);
  

  return (
    <>
      <div className={s.catalogBtn}>
        <ButtonAdmin typeBtn={AdminButtonType.Toggle} functionalBtn={AdminButtonFunctional.Standard} border={false} clickBtn={() => setCatalogStructureVisible(!catalogStructureVisible)}>
          {
            !catalogStructureVisible ? 'Показать структуру каталога' : 'Скрыть структуру каталога'
          }
        </ButtonAdmin>
      </div>
      {
        catalogStructureVisible &&
        <div className={s.catalogStructure}>
          {catalogArr &&
            catalogArr.map((item, index) => (
              <WindowListAdmin
                key={index.toString()}
                typeList={AdminListType.Catalog}
                title={titleWindows[index]}
                itemArr={item}
                visible={true}
                optionsBtnVisible={true}
                clickToItem={(itemIndex) => handleClickToItem(index, itemIndex)}
                createItemName={(name) => handleCreateItemName(name, index != 0 ? (parentArr[index].children.length + 1) * 100 : (catalogArr[0].length + 1) * 100, index != 0 ? Number(parentArr[index].id) : null, index)}
                updateItemName={(indexItem, name) => handleUpdateItemName(catalogArr[index][indexItem].id, name, index)}
                deleteItemName={(indexItem) => handleDeleteItemName(catalogArr[index][indexItem].id, index)}
                updateSerialNumberById={(id, serial_number) => handleUpdateSerialNumberByIndexCatalogItem(id, serial_number, index != 0 ? Number(parentArr[index].id) : null, index)}
                updateSerialNumberByIndex={(indexItem, serial_number) => handleUpdateSerialNumberByIndexCatalogItem(catalogArr[index][indexItem].id, serial_number, index != 0 ? Number(parentArr[index].id) : null, index)}
              />
            ))}
        </div>
      }

    </>
  );
};

export default CreateCatalogSection;
