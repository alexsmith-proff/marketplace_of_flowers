import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

import {
  AdminButtonFunctional,
  AdminButtonType,
} from "../../../enums/AdminButtons.enum";
import { IMenuItem } from "../../../interfaces/menu.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./MenuListAdmin.module.scss";
import InputAdminMenu from "../Inputs/InputMenu/InputAdminMenu";

interface MenuItemListAdminProps {
  title: string;
  itemArr: IMenuItem[];
  visible: boolean;
  createItemName: (name: string) => void;
  updateItemName: (currentIndexMenu: number, name: string) => void;
  deleteItemName: (currentIndexMenu: number) => void;
}

const MenuListAdmin = ({
  title,
  itemArr,
  visible = false,
  createItemName,
  updateItemName,
  deleteItemName,
}: MenuItemListAdminProps) => {
  const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(null);

  const [editMenuItemUpdateActive, setEditMenuItemUpdateActive] =
    useState<boolean>(false);
  const [editMenuItemCreateActive, setEditMenuItemCreateActive] =
    useState<boolean>(false);

  const editUpdateMenuItemRef = useRef(null);
  const editCreateMenuItemRef = useRef(null);

  const handleEditUpdateMenuItemName = () => {
    updateItemName(currentIndexMenu, editUpdateMenuItemRef.current.value);
    setEditMenuItemUpdateActive(false);
    setCurrentIndexMenu(null);
  };
  const handleEditCreateMenuItemName = () => {
    createItemName(editCreateMenuItemRef.current.value);
    setEditMenuItemCreateActive(false);
    setCurrentIndexMenu(null);
  };
  const handleDeleteMenuItemName = () => {
    if (currentIndexMenu != null) {
      deleteItemName(currentIndexMenu);
      setCurrentIndexMenu(null);
    }
  };

  const handleClickMenuItem = (index) => {
    setCurrentIndexMenu(index);
  };

  return (
    <>
      {visible && (
        <div className={s.menuList}>
          <div className={s.topSection}>
            <div className={s.title}>{title}</div>
            <div className={s.icons}>
              <div className={s.createBtn}>
                <ButtonAdmin
                  typeBtn={AdminButtonType.Ico}
                  functionalBtn={AdminButtonFunctional.ToggleVisibleEdit}
                  border={false}
                  editVisible={editMenuItemCreateActive}
                  setEditActive={setEditMenuItemCreateActive}
                  URef={editCreateMenuItemRef}
                  ico={<AiOutlinePlus />}
                  sizeIco={18}
                />
              </div>
              <div className={s.createBtn}>
                <ButtonAdmin
                  typeBtn={AdminButtonType.Ico}
                  functionalBtn={AdminButtonFunctional.ToggleVisibleEdit}
                  enabled={
                    currentIndexMenu != null &&
                    currentIndexMenu <= itemArr.length - 1
                      ? true
                      : false
                  }
                  border={false}
                  editVisible={editMenuItemUpdateActive}
                  setEditActive={setEditMenuItemUpdateActive}
                  URef={editUpdateMenuItemRef}
                  ico={<RiEdit2Line />}
                  sizeIco={18}
                />
              </div>
              <div className={s.createBtn}>
                <ButtonAdmin
                  typeBtn={AdminButtonType.Ico}
                  functionalBtn={AdminButtonFunctional.Standard}
                  enabled={
                    currentIndexMenu != null &&
                    currentIndexMenu <= itemArr.length - 1
                      ? true
                      : false
                  }
                  border={false}
                  clickBtn={handleDeleteMenuItemName}
                  ico={<MdDeleteOutline />}
                  sizeIco={18}
                />
              </div>
            </div>
          </div>
          <div className={s.input}>
            {currentIndexMenu != null &&
              currentIndexMenu <= itemArr.length - 1 && (
                <InputAdminMenu
                  inputActive={editMenuItemUpdateActive}
                  inputRef={editUpdateMenuItemRef}
                  initTitle={
                    currentIndexMenu != null
                      ? itemArr[currentIndexMenu].name
                      : ""
                  }
                  inputConfirm={handleEditUpdateMenuItemName}
                />
              )}
            <InputAdminMenu
              inputActive={editMenuItemCreateActive}
              inputRef={editCreateMenuItemRef}
              initTitle={""}
              inputConfirm={handleEditCreateMenuItemName}
            />
          </div>

          <ul className={s.list}>
            {itemArr &&
              itemArr.map((item, index) => (
                <li
                  className={
                    currentIndexMenu == index ? s.item + " " + s.active : s.item
                  }
                  key={item.id}
                  onClick={() => handleClickMenuItem(index)}
                >
                  {item.name}
                  {item.submenuitems.length > 0 && (
                    <div className={s.hasChildren}>
                      <AiOutlineRight />
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuListAdmin;
