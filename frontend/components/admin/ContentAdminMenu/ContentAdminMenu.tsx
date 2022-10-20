import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Line } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import MenuListAdmin from "../MenuListAdmin/MenuListAdmin";
import { GET_ALL_MENU, GET_MENU_BY_ID, UPDATE_MENU, CREATE_MENU } from "../../../graphql/menu.graphql";

import s from "./ContentAdminMenu.module.scss";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import InputAdminMenu from "../Inputs/InputMenu/InputAdminMenu";
import { AdminButtonType } from "../../../enums/AdminButtons.enum";

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
  const [createMenuName, dataCreateMenuName] = useMutation(CREATE_MENU)


  const editUpdateMenuRef = useRef(null)
  const editCreateMenuRef = useRef(null)

  const [menuArr, setMenuArr] = useState<IMenu[]>(null);
  const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(0);
  const [menuItemArr, setMenuItemArr] = useState<IMenuItem[]>(null);
  const [editMenuUpdateActive, setEditMenuUpdateActive] = useState<boolean>(false)
  const [editMenuCreateActive, setEditMenuCreateActive] = useState<boolean>(false)


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
    console.log('name =====', editUpdateMenuRef.current.value);

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
            menuArr != null && menuArr.length > 0 && (
              <InputAdminMenu inputActive={editMenuUpdateActive} inputRef={editUpdateMenuRef} initTitle={menuArr[currentIndexMenu].name} inputConfirm={handleEditUpdateMenuName} />

            )
          }
          <InputAdminMenu inputActive={editMenuCreateActive} inputRef={editCreateMenuRef} initTitle="" inputConfirm={handleEditCreateMenuName} />
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} editVisible={editMenuUpdateActive} setEditActive={setEditMenuUpdateActive} URef={editUpdateMenuRef} Ico={<RiEdit2Line />} />
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} editVisible={editMenuCreateActive} setEditActive={setEditMenuCreateActive} URef={editCreateMenuRef} Ico={<AiOutlinePlus />}>Создать меню</ButtonAdmin>
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} editVisible={editMenuCreateActive} setEditActive={setEditMenuCreateActive} URef={editCreateMenuRef} Ico={<AiOutlineDelete />}>Создать меню</ButtonAdmin>
        </div>
      </div>
      {
        menuArr != null && menuArr.length > 0 && <MenuListAdmin title={menuArr[currentIndexMenu].name} menuItems={menuItemArr} />
      }

    </>
  );
};

export default ContentAdminMenu;
