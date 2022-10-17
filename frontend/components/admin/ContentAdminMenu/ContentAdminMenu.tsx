import React, { useEffect, useState } from "react";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import ButtonAdminEdit from "../Buttons/ButtonAdminEdit/ButtonAdminEdit";
import MenuListAdmin from "../MenuListAdmin/MenuListAdmin";
import { GET_ALL_MENU, GET_MENU_BY_ID } from "../../../graphql/menu.graphql";

import s from "./ContentAdminMenu.module.scss";
import { useLazyQuery, useQuery } from "@apollo/client";

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
interface IMenu extends IMenuBase {}
interface IMenuItem extends IMenuBase {
  link: string;
}

interface ContentAdminMenuProps {}

const ContentAdminMenu = ({}: ContentAdminMenuProps) => {
  const menus = useQuery(GET_ALL_MENU);
  const [getMenuItems, { loading, error, data }] = useLazyQuery(GET_MENU_BY_ID)    
  // const { loading, error, data } = useQuery(GET_MENU_BY_ID, {
  //   variables: { id: 1 },
  // });

  const [menuArr, setMenuArr] = useState<IMenu[]>(null);
  const [menuIndex, setMenuIndex] = useState<number>(1);
  const [menuItemArr, setMenuItemArr] = useState<IMenuItem[]>(null);

  console.log("ContentAdminMenu render");

  const handleChangeComboBox = (e: React.ChangeEvent<HTMLSelectElement>) => { 
    console.log('id = ', e.target.value);
    setMenuIndex(Number(e.target.value))
    
    getMenuItems({
      variables: {
        id: Number(e.target.value)
      }
    })
    // console.log("menuItem = ", data);
  };

  useEffect(() => {
    console.log("useEffect render");
    if (menus.data) {
      // console.log('menus.data.getAllMenus', menus.data.getAllMenus)
      setMenuArr(menus.data.getAllMenus);
    }
    if (data) {
      console.log('data.getMenuByID', data.getMenuByID)
      setMenuItemArr(data.getMenuByID.item);
    }
    console.log('data', data);
    
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
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdminEdit />
        </div>
        {/* <div className={s.ButtonAdminSelect}>
          <ButtonAdmin>Выбрать</ButtonAdmin>
        </div> */}
        <ButtonAdmin>Создать меню</ButtonAdmin>
      </div>
      <MenuListAdmin title={menuArr ? menuArr[menuIndex - 1].name : ''} menuItems={menuItemArr} />
    </>
  );
};

export default ContentAdminMenu;
