import React, { useEffect, useState } from "react";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import ButtonAdminEdit from "../Buttons/ButtonAdminEdit/ButtonAdminEdit";
import MenuListAdmin from "../MenuListAdmin/MenuListAdmin";
import { GET_ALL_MENU } from '../../../graphql/menu.graphql'

import s from "./ContentAdminMenu.module.scss";
import { useQuery } from "@apollo/client";



const menuItems = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт sdfsdfsdf df', 'Пункт 5']



interface ContentAdminMenuProps {}

const ContentAdminMenu = ({}: ContentAdminMenuProps) => {   
  const menus = useQuery(GET_ALL_MENU) 
  // const datat = useQuery(GET_MENU_BY_ID, {
  //   variables: {
  //     id: 1
  //   },
  // });

  const [menuArr, setMenuArr] = useState()

  console.log('ContentAdminMenu render');
  console.log(menus);
  
  
  useEffect(() => {
    console.log('useEffect render');
    if(menus.data) {
      console.log('menus.data.getAllMenus', menus.data.getAllMenus)
      setMenuArr(menus.data.getAllMenus)
    }
  }, [menus])
  
  return (
    <>
      <div className={s.top}>
        <div className={s.dropdown} data-itemChart="1">
          <select name="one" className={s.dropdownSelect}>
            {
              menus.data && menus.data.getAllMenus.map((item, index) => <option key={index} value="1">{item.name}</option>)
            }
          </select>
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdminEdit />
        </div>
        <div className={s.ButtonAdminSelect}>
          <ButtonAdmin>Выбрать</ButtonAdmin>
        </div>
        <ButtonAdmin>Создать меню</ButtonAdmin>
      </div>
      <MenuListAdmin menuItems={menuItems}/>
    </>
  );
};

export default ContentAdminMenu;
