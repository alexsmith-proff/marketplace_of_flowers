import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Line } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import {
  GET_ALL_MENU,
  GET_MENU_BY_ID,
  CREATE_MENU_NAME,
  UPDATE_MENU_NAME,
  DELETE_MENU_NAME,
  CREATE_MENU_ITEM_NAME,
  UPDATE_MENU_ITEM_NAME,
  DELETE_MENU_ITEM_NAME,
  CREATE_SUBMENU_ITEM_NAME,
  UPDATE_SUBMENU_ITEM_NAME,
  DELETE_SUBMENU_ITEM_NAME,
  CREATE_SUBMENU_ITEM_TWO_NAME,
  UPDATE_SUBMENU_ITEM_TWO_NAME,
  DELETE_SUBMENU_ITEM_TWO_NAME,
} from "../../../graphql/menu.graphql";

import s from "./ContentAdminMenu.module.scss";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import InputAdminMenu from "../Inputs/InputMenu/InputAdminMenu";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { IMenu, IMenuItem } from "../../../interfaces/menu.interface";
import MenuListAdmin from "../MenuListAdmin/MenuListAdmin";

interface ContentAdminMenuProps { }

const ContentAdminMenu = ({ }: ContentAdminMenuProps) => {
  const menus = useQuery(GET_ALL_MENU);
  const [getMenuItems, { loading, error, data: dataMenu }] = useLazyQuery(GET_MENU_BY_ID)
  const [createMenuName, dataCreateMenuName] = useMutation(CREATE_MENU_NAME)
  const [updateMenuName, dataUpdateMenuName] = useMutation(UPDATE_MENU_NAME)
  const [deleteMenuName, dataDeleteMenuName] = useMutation(DELETE_MENU_NAME)

  const [createMenuItemName, dataCreateMenuItemName] = useMutation(CREATE_MENU_ITEM_NAME)
  const [updateMenuItemName, dataUpdateMenuItemName] = useMutation(UPDATE_MENU_ITEM_NAME)
  const [deleteMenuItemName, dataDeleteMenuItemName] = useMutation(DELETE_MENU_ITEM_NAME)

  const [createSubMenuItemName, dataCreateSubMenuItemName] = useMutation(CREATE_SUBMENU_ITEM_NAME)
  const [updateSubMenuItemName, dataUpdateSubMenuItemName] = useMutation(UPDATE_SUBMENU_ITEM_NAME)
  const [deleteSubMenuItemName, dataDeleteSubMenuItemName] = useMutation(DELETE_SUBMENU_ITEM_NAME)

  const [createSubMenuItemTwoName, dataCreateSubMenuItemTwoName] = useMutation(CREATE_SUBMENU_ITEM_TWO_NAME)
  const [updateSubMenuItemTwoName, dataUpdateSubMenuItemTwoName] = useMutation(UPDATE_SUBMENU_ITEM_TWO_NAME)
  const [deleteSubMenuItemTwoName, dataDeleteSubMenuItemTwoName] = useMutation(DELETE_SUBMENU_ITEM_TWO_NAME)
  


  const editUpdateMenuRef = useRef(null)
  const editCreateMenuRef = useRef(null)

  const [menuArr, setMenuArr] = useState<IMenu[]>(null);
  const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(0);
  const [editMenuUpdateActive, setEditMenuUpdateActive] = useState<boolean>(false)
  const [editMenuCreateActive, setEditMenuCreateActive] = useState<boolean>(false)

  const [menuItemActive, setMenuItemActive] = useState<boolean>(true)
  const [submenuItemActive, setSubMenuItemActive] = useState<boolean>(false)
  const [submenuItemTwoActive, setSubMenuItemTwoActive] = useState<boolean>(false)
  const [currentIndexMenuItem, setCurrentIndexMenuItem] = useState<number>(0)
  const [currentIndexSubmenuItem, setCurrentIndexSubMenuItem] = useState<number>(null)
  const [currentIndexSubmenuItemTwo, setCurrentIndexSubMenuItemTwo] = useState<number>(null)


  console.log("ContentAdminMenu render");
  console.log("menus", menus);


  const handleChangeComboBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentIndexMenuItem(null)
    setCurrentIndexSubMenuItem(null)
    setCurrentIndexSubMenuItemTwo(null)

    setSubMenuItemActive(false)
    setSubMenuItemTwoActive(false)
    getMenuItems({
      variables: {
        id: +menuArr[Number(e.target.value)].id
      }
    })
    setCurrentIndexMenu(Number(e.target.value))
  };



  const clickToItemMenuItem = (index) => {
    setCurrentIndexMenuItem(index)
    setCurrentIndexSubMenuItem(null)
    setCurrentIndexSubMenuItemTwo(null)

    setSubMenuItemActive(true)
    setSubMenuItemTwoActive(false)
  }
  const clickToItemSubMenuItem = (index) => {
    setCurrentIndexSubMenuItem(index)
    setCurrentIndexSubMenuItemTwo(null)
    setSubMenuItemTwoActive(true)
  }
  const clickToItemSubMenuItemTwo = (index) => {
    setCurrentIndexSubMenuItemTwo(index)
  }


  const handleEditCreateMenuName = () => {
    createMenuName({
      variables: {
        createMenuInput: {
          name: editCreateMenuRef.current.value
        }
      },
      refetchQueries: [
        {
          query: GET_ALL_MENU
        }
      ]
    })
    setEditMenuCreateActive(false)
  }
  const handleEditUpdateMenuName = () => {
    updateMenuName({
      variables: {
        updateMenuInput: {
          id: +menuArr[currentIndexMenu].id,
          name: editUpdateMenuRef.current.value
        }
      }
    })
    setEditMenuUpdateActive(false)
  }
  const handleDeleteMenuName = () => {
    deleteMenuName({
      variables: {
        id: +menuArr[currentIndexMenu].id
      },
      refetchQueries: [
        {
          query: GET_ALL_MENU
        }
      ]
    })
    setCurrentIndexMenu(0)
  }


  const handleEditCreateMenuItemName = (name) => {
    // setCurrentIndexSubMenuItem(null)
    // setSubMenuItemActive(false)
    // setSubMenuItemTwoActive(false)

    createMenuItemName({
      variables: {
        createMenuItemInput: {
          name: name,
          menu_id: +menus.data.getAllMenus[currentIndexMenu].id
        }
      },
      refetchQueries: [
        {
          query: GET_ALL_MENU
        }
      ]
    })
  }
  const handleEditUpdateMenuItemName = (index, name) => {
    updateMenuItemName({
      variables: {
        updateMenuItemInput: {
          id: +menus.data.getAllMenus[currentIndexMenu].items[index].id,
          name: name
        }
      }
    })
  }
  const handleEditDeleteMenuItemName = (index) => {
    setCurrentIndexSubMenuItemTwo(null)
    setCurrentIndexSubMenuItem(null)
    setSubMenuItemActive(false)
    setSubMenuItemTwoActive(false)

    deleteMenuItemName({
      variables: {
        id: +menus.data.getAllMenus[currentIndexMenu].items[index].id
      },
      refetchQueries: [
        {
          query: GET_ALL_MENU
        }
      ]
    })
  }

  const handleEditCreateSubMenuItemName = (name) => {
    createSubMenuItemName({
      variables: {
        createSubmenuItemInput: {
          name: name,
          menuitem_id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].id
        }
      },
      refetchQueries: [
        {
          query: GET_ALL_MENU
        }
      ]
    })
  }
  const handleEditUpdateSubMenuItemName = (index, name) => {    
    updateSubMenuItemName({
      variables: {
        updateSubmenuItemInput: {
          id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[index].id,
          name: name
        }
      }
    })
  }
  const handleEditDeleteSubMenuItemName = (index) => {
    setCurrentIndexSubMenuItemTwo(null)
    setSubMenuItemTwoActive(false)
    
    deleteSubMenuItemName({
      variables: {
        id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[index].id
      },
      refetchQueries: [
        {
          query: GET_ALL_MENU
        }
      ]
    })
  }

  const handleEditCreateSubMenuItemTwoName = (name) => {
    createSubMenuItemTwoName({
      variables: {
        createSubmenuItemTwoInput: {
          name: name,
          menuitem_id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].id
        }
      },
      refetchQueries: [
        {
          query: GET_ALL_MENU
        }
      ]
    })
  }
  const handleEditUpdateSubMenuItemTwoName = (index, name) => {
    updateSubMenuItemTwoName({
      variables: {
        updateSubmenuItemTwoInput: {
          id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems[index].id,
          name: name
        }
      }
    })
  }
  const handleEditDeleteSubMenuItemTwoName = (index) => {
    deleteSubMenuItemTwoName({
      variables: {
        id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems[index].id
      },
      refetchQueries: [
        {
          query: GET_ALL_MENU
        }
      ]
    })
  }


  useEffect(() => {
    console.log("useEffectSTART render");
    getMenuItems({
      variables: {
        id: 38
      }
    })
  }, []);

  useEffect(() => {
    console.log("useEffect render");
    console.log('menus.data', menus.data);

    if (menus.data) {
      setMenuArr(menus.data.getAllMenus);
    }
  }, [menus, dataMenu]);

  return (
    <>
      <div className={s.top}>
        <div className={s.dropdown} data-itemChart="1">
          <select
            name="one"
            className={s.dropdownSelect}
            onChange={handleChangeComboBox}
          >
            {menuArr &&
              menuArr.map((item, index) => (
                <option key={item.id} value={index}>
                  {item.name}
                </option>
              ))}
          </select>
          {
            menuArr != null && menuArr.length > 0 && (
              <InputAdminMenu inputActive={editMenuUpdateActive} inputRef={editUpdateMenuRef} initTitle={menuArr[currentIndexMenu].name} inputConfirm={handleEditUpdateMenuName} />

            )
          }
          <InputAdminMenu inputActive={editMenuCreateActive} inputRef={editCreateMenuRef} initTitle="" inputConfirm={handleEditCreateMenuName} />
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.ToggleVisibleEdit} border={true} editVisible={editMenuCreateActive} setEditActive={setEditMenuCreateActive} URef={editCreateMenuRef} ico={<AiOutlinePlus />} sizeIco={22} />
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.ToggleVisibleEdit} border={true} editVisible={editMenuUpdateActive} setEditActive={setEditMenuUpdateActive} URef={editUpdateMenuRef} ico={<RiEdit2Line />} sizeIco={22} />
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleDeleteMenuName} ico={<MdDeleteOutline />} sizeIco={22} />
        </div>
      </div>
      {/* {
        menuArr != null && menuArr.length > 0 && <MenuItemListAdmin title={menuArr[currentIndexMenu].name} menuId={menuArr[currentIndexMenu].id}/>
      } */}
      <div className={s.menuContainer}>
        {
          menuArr != null && menuArr.length > 0 &&
          <>
            {
              menuItemActive &&
              <MenuListAdmin
                visible={menuItemActive}
                title={menus.data.getAllMenus[currentIndexMenu].name}
                itemArr={menus.data.getAllMenus[currentIndexMenu].items}
                clickToItem={clickToItemMenuItem}
                createItemName={handleEditCreateMenuItemName}
                updateItemName={handleEditUpdateMenuItemName}
                deleteItemName={handleEditDeleteMenuItemName}
              />
            }
            {
              submenuItemActive &&
              <MenuListAdmin
                visible={submenuItemActive}
                title={menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].name}
                clickToItem={clickToItemSubMenuItem}
                itemArr={menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems}
                createItemName={handleEditCreateSubMenuItemName}
                updateItemName={handleEditUpdateSubMenuItemName}
                deleteItemName={handleEditDeleteSubMenuItemName}
              />
            }
            {
              // currentIndexSubmenuItem != null &&
              submenuItemTwoActive &&
              <MenuListAdmin
                visible={submenuItemTwoActive}
                title={menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].name}
                clickToItem={clickToItemSubMenuItemTwo}
                itemArr={menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems}
                createItemName={handleEditCreateSubMenuItemTwoName}
                updateItemName={handleEditUpdateSubMenuItemTwoName}
                deleteItemName={handleEditDeleteSubMenuItemTwoName}
              />
            }
          </>
        }
      </div>


    </>
  );
};

export default ContentAdminMenu;
