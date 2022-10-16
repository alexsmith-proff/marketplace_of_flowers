import React from "react";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import ButtonAdminEdit from "../Buttons/ButtonAdminEdit/ButtonAdminEdit";
import ContentAdminTitle from "../ContentAdminTitle/ContentAdminTitle";
import MenuListAdmin from "../MenuListAdmin/MenuListAdmin";

import s from "./ContentAdminMenu.module.scss";

const menuItems = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт sdfsdfsdf df', 'Пункт 5']

interface ContentAdminMenuProps {}

const ContentAdminMenu = ({}: ContentAdminMenuProps) => {
    
  return (
    <>
      <div className={s.top}>
        <div className={s.dropdown} data-itemChart="1">
          <select name="one" className={s.dropdownSelect}>
            <option value=""></option>
            <option value="1">Меню в шапке</option>
            <option value="2">Меню в сайдбаре</option>
            <option value="3">Меню в футере</option>
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
