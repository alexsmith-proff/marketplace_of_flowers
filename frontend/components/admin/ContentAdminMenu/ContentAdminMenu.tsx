import React, { useEffect, useRef, useState } from "react";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import ButtonAdminEdit from "../Buttons/ButtonAdminEdit/ButtonAdminEdit";
import MenuListAdmin from "../MenuListAdmin/MenuListAdmin";
import { GET_ALL_MENU, GET_MENU_BY_ID, UPDATE_MENU } from "../../../graphql/menu.graphql";

import s from "./ContentAdminMenu.module.scss";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import InputAdminMenu from "../Inputs/InputMenu/InputAdminMenu";

const menuItems = [
  "Пункт 1",
  "Пункт 2",
  "Пункт 3",
  "Пункт sdfsdfsdf df",
  "Пункт 5",
];

interface IMenuBase {
  id: number;
  name: string;
}
interface IMenu extends IMenuBase { }
interface IMenuItem extends IMenuBase {
  link: string;
}
interface ContentAdminMenuProps { }


const ContentAdminMenu = ({ }: ContentAdminMenuProps) => {
  const menus = useQuery(GET_ALL_MENU);
  const [getMenuItems, { loading, error, data }] = useLazyQuery(GET_MENU_BY_ID)
  const [updateMenuName, dataUpdateMenuName] = useMutation(UPDATE_MENU)


  const editMenuRef = useRef(null)

  const [menuArr, setMenuArr] = useState<IMenu[]>(null);
  const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(0);
  const [menuItemArr, setMenuItemArr] = useState<IMenuItem[]>(null);
  const [editMenuActive, setEditMenuActive] = useState<boolean>(false)


  console.log("ContentAdminMenu render");

  const handleChangeComboBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getMenuItems({
      variables: {
        id: +menuArr[Number(e.target.value)].id
      }
    })
    setCurrentIndexMenu(Number(e.target.value))
  };

  const handleEditUpdateMenuName = () => {
    console.log('id =====', menuArr[currentIndexMenu].id);
    console.log('name =====', editMenuRef.current.value);
    
    updateMenuName({
      variables: {
        updateMenuInput: {
          id: +menuArr[currentIndexMenu].id,
          name: editMenuRef.current.value
        }
        
      }
    })
    setEditMenuActive(false)
  }



  useEffect(() => {
    console.log("useEffectSTART render");
    getMenuItems({
      variables: {
        id: 1
      }
    })
  }, []);

  useEffect(() => {
    console.log("useEffect render");
    if (menus.data) {
      setMenuArr(menus.data.getAllMenus);
    }
    if (data) {
      setMenuItemArr(data.getMenuByID.item);
    }
  }, [menus, data]);

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
            menuArr != null && menuArr.length > 0 && <InputAdminMenu inputActive={editMenuActive} inputRef={editMenuRef} initTitle={menuArr[currentIndexMenu].name} inputConfirm={handleEditUpdateMenuName} />
          }

        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdminEdit editActive={editMenuActive} setEditActive={setEditMenuActive} URef={editMenuRef} />
        </div>
        <ButtonAdmin>Создать меню</ButtonAdmin>
      </div>
      {
        menuArr != null && menuArr.length > 0 && <MenuListAdmin title={menuArr[currentIndexMenu].name} menuItems={menuItemArr} />
      }

    </>
  );
};

export default ContentAdminMenu;
