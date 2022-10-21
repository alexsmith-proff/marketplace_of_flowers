import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import { MdDeleteOutline } from "react-icons/md";

import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { GET_MENU_BY_ID, CREATE_MENU_ITEM_NAME, UPDATE_MENU_ITEM_NAME, DELETE_MENU_ITEM_NAME } from "../../../graphql/menu.graphql";
import { IMenuItem } from "../../../interfaces/menu.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./MenuListAdmin.module.scss";
import InputAdminMenu from "../Inputs/InputMenu/InputAdminMenu";

interface MenuListAdminProps {
  title: string,
  // menuItems: any[];
  menuId: number
}

const MenuListAdmin = ({ title, menuId }: MenuListAdminProps) => {
  const MenuItems = useQuery(GET_MENU_BY_ID, {
    variables: {
      id: +menuId
    }
  })
  // const [getMenuItems, { loading, error, data: dataMenuItems }] = useLazyQuery(GET_MENU_BY_ID)
  const [createMenuItemName, dataCreateMenuItemName] = useMutation(CREATE_MENU_ITEM_NAME)
  const [updateMenuItemName, dataUpdateMenuItemName] = useMutation(UPDATE_MENU_ITEM_NAME)
  const [deleteMenuItemName, dataDeleteMenuItemName] = useMutation(DELETE_MENU_ITEM_NAME)

  const [menuItemArr, setMenuItemArr] = useState<IMenuItem[]>(null);
  const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(null)

  const [editMenuItemUpdateActive, setEditMenuItemUpdateActive] = useState<boolean>(false)
  const [editMenuItemCreateActive, setEditMenuItemCreateActive] = useState<boolean>(false)


  const editUpdateMenuItemRef = useRef(null)
  const editCreateMenuItemRef = useRef(null)

  const handleEditUpdateMenuItemName = () => {
    updateMenuItemName({
      variables: {
        updateMenuItemInput: {
          id: +menuItemArr[currentIndexMenu].id,
          name: editUpdateMenuItemRef.current.value
        }
      }
    })
    setEditMenuItemUpdateActive(false)
    setCurrentIndexMenu(null)
  }
  const handleEditCreateMenuItemName = () => {
    createMenuItemName({
      variables: {
        createMenuItemInput: {
          name: editCreateMenuItemRef.current.value,
          menu_id: +menuId
        }
      },
      refetchQueries: [
        {
          query: GET_MENU_BY_ID,
          variables: {
            id: +menuId
          }
        }
      ]
    })
    setEditMenuItemCreateActive(false)
    setCurrentIndexMenu(null)
  }
  const handleDeleteMenuItemName = () => {
    if (currentIndexMenu != null) {
      deleteMenuItemName({
        variables: {
          id: +menuItemArr[currentIndexMenu].id
        },
        refetchQueries: [
          {
            query: GET_MENU_BY_ID,
            variables: {
              id: +menuId
            }
          }
        ]
      })
      setCurrentIndexMenu(null)
    }
  }


  const handleClickMenuItem = (index) => {
    setCurrentIndexMenu(index)
  }

  useEffect(() => {
    console.log('MenuItems', MenuItems);
    if (MenuItems.data) {
      setMenuItemArr(MenuItems.data.getMenuByID.item);
    }

  }, [MenuItems])

  return (
    <div className={s.menuList}>
      <div className={s.topSection}>
        <div className={s.title}>{title}</div>
        <div className={s.icons}>
          <div className={s.createBtn}>
            <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.ToggleVisibleEdit} border={false} editVisible={editMenuItemCreateActive} setEditActive={setEditMenuItemCreateActive} URef={editCreateMenuItemRef} ico={<AiOutlinePlus />} sizeIco={18} />
          </div>
          <div className={s.createBtn}>
            <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.ToggleVisibleEdit} enabled={(currentIndexMenu != null) && (currentIndexMenu <= menuItemArr.length - 1) ? true : false} border={false} editVisible={editMenuItemUpdateActive} setEditActive={setEditMenuItemUpdateActive} URef={editUpdateMenuItemRef} ico={<RiEdit2Line />} sizeIco={18} />
          </div>
          <div className={s.createBtn}>
            <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} enabled={(currentIndexMenu != null) && (currentIndexMenu <= menuItemArr.length - 1) ? true : false} border={false} clickBtn={handleDeleteMenuItemName} ico={<MdDeleteOutline />} sizeIco={18} />
          </div>

        </div>
      </div>
      <div className={s.input}>
        {
          (currentIndexMenu != null) && (currentIndexMenu <= menuItemArr.length - 1) &&
          <InputAdminMenu inputActive={editMenuItemUpdateActive} inputRef={editUpdateMenuItemRef} initTitle={(currentIndexMenu != null) ? menuItemArr[currentIndexMenu].name : ''} inputConfirm={handleEditUpdateMenuItemName} />
        }
        <InputAdminMenu inputActive={editMenuItemCreateActive} inputRef={editCreateMenuItemRef} initTitle={""} inputConfirm={handleEditCreateMenuItemName} />
      </div>

      <ul className={s.list}>
        {menuItemArr && menuItemArr.map((item, index) => (
          <li className={currentIndexMenu == index ? s.item + ' ' + s.active : s.item} key={item.id} onClick={() => handleClickMenuItem(index)}>
            {item.name}
            <div className={s.hasChildren}>
              <AiOutlineRight />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuListAdmin;
