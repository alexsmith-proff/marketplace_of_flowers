import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import {
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineMore,
  AiOutlineCheck,
} from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

import {
  AdminButtonFunctional,
  AdminButtonType,
} from "../../../enums/AdminButtons.enum";
import { IMenuItem } from "../../../interfaces/menu.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import InputAdminMenu from "../Inputs/InputMenu/InputAdminMenu";
import OptionsItemAdmin from "../OptionsItemAdmin/OptionsItemAdmin";

import s from "./MenuListAdmin.module.scss";

interface MenuItemListAdminProps {
  visible: boolean;
  title: string;
  itemArr: IMenuItem[];
  clickToItem: (index: number) => void;
  createItemName: (name: string) => void;
  updateItemName: (currentIndexMenu: number, name: string) => void;
  deleteItemName: (currentIndexMenu: number) => void;

  updateSerialNumber?: (index: number, serial_number: number) => void;
  updateLink?: (index: number, link: string) => void;
}

const MenuListAdmin = ({
  visible = false,
  title,
  itemArr,
  clickToItem,
  createItemName,
  updateItemName,
  deleteItemName,
  updateSerialNumber,
  updateLink,
}: MenuItemListAdminProps) => {
  const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(null);
  const [itemBottomActive, setItemBottomActive] = useState<boolean>(false);

  const [editMenuItemUpdateActive, setEditMenuItemUpdateActive] = useState<boolean>(false);
  const [editMenuItemCreateActive, setEditMenuItemCreateActive] = useState<boolean>(false);

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
    clickToItem(index);
    if (itemBottomActive) setItemBottomActive(false);
  };

  const handleClickOptions = (index) => {
    if (index !== currentIndexMenu) return;
    console.log("handleClickOptions");
    setItemBottomActive(!itemBottomActive);
  };

  function handleDragStart(e, item) {
    console.log("handleDragStart", item);
  }
  function handleDragOver(e:React.DragEvent<HTMLLIElement>) {
    // console.log("handleDragOver", e.target);
    e.preventDefault();
    e.target.classList.add('menuListDragOver')
  }
  function handleDragLeave(e) {
    // console.log("handleDragLeave");
    e.preventDefault();
    e.target.classList.remove('menuListDragOver')
  }
  function handleDragEnd(e) {
    // console.log("handleDragEnd");
    e.preventDefault();
    e.target.classList.remove('menuListDragOver')
  }
  function handleDrop(e:React.DragEvent<HTMLLIElement>, item) {
    console.log("handleDrop", item);
    e.preventDefault();
    e.target.classList.remove('menuListDragOver')
  }

  console.log("itemArr", itemArr);

  return (
    <>
      {visible && (
        <div className={s.menuList}>
          <div className={s.topSection}>
            <div className={s.title} onClick={() => setCurrentIndexMenu(null)}>
              {title}
            </div>
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
                  className={s.item}
                  key={item.id}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, item)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDragLeave={(e) => handleDragLeave(e)}
                  onDragEnd={(e) => handleDragEnd(e)}
                  onDrop={(e) => handleDrop(e, item)}
                >
                  <div
                    className={
                      currentIndexMenu == index
                        ? s.itemTopWrap + " " + s.active
                        : s.itemTopWrap
                    }
                    onClick={() => handleClickMenuItem(index)}
                  >
                    {item.name} serial_number={item.serial_number}
                    {typeof item["submenuitems"] !== "undefined" && (
                      <>
                        {item.submenuitems.length > 0 && (
                          <div className={s.hasChildren}>
                            <AiOutlineRight />
                          </div>
                        )}
                      </>
                    )}
                    <div
                      className={s.optionsBtn}
                      onClick={() => handleClickOptions(index)}
                    >
                      <AiOutlineMore size={20} />
                    </div>
                  </div>
                  {currentIndexMenu === index && itemBottomActive && (
                    <div className={s.itemBottomWrap}>
                      <div className={s.optionsList}>
                        <OptionsItemAdmin
                          label="Индекс"
                          textInputInit={String(item.serial_number)}
                          inputShort={true}
                          inputConfirm={async (data) => {
                            updateSerialNumber(index, +data);
                            setItemBottomActive(false);
                            setCurrentIndexMenu(null);
                          }}
                        />
                        <OptionsItemAdmin
                          label="Ссылка"
                          textInputInit={item.link}
                          inputConfirm={(data) => updateLink(index, data)}
                        />
                      </div>
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
