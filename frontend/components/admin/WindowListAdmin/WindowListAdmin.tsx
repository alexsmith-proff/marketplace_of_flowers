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
import { AdminListType } from "../../../enums/AdminList.enum";
import { IMenuItem } from "../../../interfaces/menu.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import InputAdminMenu from "../Inputs/InputMenu/InputAdminMenu";
import OptionsItemAdmin from "../OptionsItemAdmin/OptionsItemAdmin";

import { ICatalog } from "../../../interfaces/catalog.interface";

import s from "./WindowListAdmin.module.scss";

interface WindowListAdminProps {
  typeList?: AdminListType;
  visible: boolean;
  title: string;
  itemArr: IMenuItem[] | ICatalog[];
  optionsBtnVisible?: boolean;
  clickToItem: (index: number) => void;
  createItemName: (name: string) => void;
  updateItemName: (currentIndexMenu: number, name: string) => void;
  deleteItemName: (currentIndexMenu: number) => void;

  updateSerialNumberByIndex?: (index: number, serial_number: number) => void;
  updateSerialNumberById?: (id: number, serial_number: number) => void;
  updateLink?: (index: number, link: string) => void;
}

const WindowListAdmin = ({
  typeList = AdminListType.Menu,
  visible = false,
  title,
  itemArr,
  optionsBtnVisible = true,
  clickToItem,
  createItemName,
  updateItemName,
  deleteItemName,
  updateSerialNumberByIndex,
  updateSerialNumberById,
  updateLink,
}: WindowListAdminProps) => {
  const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(null);
  const [itemBottomActive, setItemBottomActive] = useState<boolean>(false);
  const [dragIndex, setDragIndex] = useState<number>(null);
  const [futureIndex, setFutureIndex] = useState<number>(null);

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
    clickToItem(index);
    if (itemBottomActive) setItemBottomActive(false);
  };

  const handleClickOptions = (index) => {
    if (index !== currentIndexMenu) return;
    console.log("handleClickOptions");
    setItemBottomActive(!itemBottomActive);
  };

  function handleDragStart(e, index) {
    console.log("handleDragStart", index);
    setItemBottomActive(false);
    setDragIndex(index);
  }
  function handleDragOver(e: React.DragEvent<HTMLLIElement>, index: number) {
    // console.log("handleDragOver", e.target);
    e.preventDefault();
    e.target.classList.add("menuListDragOver");
    setFutureIndex(index);
  }
  function handleDragLeave(e) {
    // console.log("handleDragLeave");
    e.preventDefault();
    e.target.classList.remove("menuListDragOver");
  }
  function handleDragEnd(e, index) {
    console.log("handleDragEnd", index);
    e.preventDefault();
    e.target.classList.remove("menuListDragOver");
    setFutureIndex(null);
  }
  function handleDrop(e: React.DragEvent<HTMLLIElement>, index) {
    console.log("handleDrop", index);
    e.preventDefault();
    e.target.classList.remove("menuListDragOver");

    if (index === itemArr.length - 1) {
      updateSerialNumberByIndex(dragIndex, itemArr[index].serial_number + 100);
    } else {
      const serial_number = Math.floor(
        (itemArr[index].serial_number + itemArr[index + 1].serial_number) / 2
      );
      if (
        serial_number > itemArr[index].serial_number &&
        serial_number < itemArr[index + 1].serial_number
      ) {
        updateSerialNumberByIndex(dragIndex, serial_number);
      } else {
        console.log("else");

        const itemArrID = [];
        itemArrID.push({
          id: itemArr[dragIndex].id,
          serial_number: itemArr[index].serial_number + 100,
          name: itemArr[dragIndex].name,
        });
        console.log("itemArrID", itemArrID);

        for (let i = index + 1; i < itemArr.length; i++) {
          itemArrID.push({
            id: itemArr[i].id,
            serial_number: itemArr[index].serial_number + (i - index + 1) * 100,
            name: itemArr[i].name,
          });
        }
        for (let i = 0; i < itemArrID.length; i++) {
          updateSerialNumberById(itemArrID[i].id, itemArrID[i].serial_number);
        }
      }
    }
  }

  // console.log("itemArr", itemArr);

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
                <>
                  <li
                    className={s.item}
                    key={item.id}
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragLeave={(e) => handleDragLeave(e)}
                    onDragEnd={(e) => handleDragEnd(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    <div className={s.itemWrap}>
                      <div
                        className={
                          currentIndexMenu == index
                            ? s.itemTopWrap + " " + s.active
                            : s.itemTopWrap
                        }
                        onClick={() => handleClickMenuItem(index)}
                      >
                        {item.name}
                        {typeList == AdminListType.Menu && (
                          <>
                            {typeof item["submenuitems"] !== "undefined" && (
                              <>
                                {item.submenuitems.length > 0 && (
                                  <div className={s.hasChildren}>
                                    <AiOutlineRight />
                                  </div>
                                )}
                              </>
                            )}
                          </>
                        )}
                        {typeList == AdminListType.Catalog && (
                          <>
                            {typeof item["children"] !== "undefined" && (
                              <>
                                {item.children.length > 0 && (
                                  <div className={s.hasChildren}>
                                    <AiOutlineRight />
                                  </div>
                                )}
                              </>
                            )}
                          </>
                        )}

                        {optionsBtnVisible && (
                          <div
                            className={s.optionsBtn}
                            onClick={() => handleClickOptions(index)}
                          >
                            <AiOutlineMore size={20} />
                          </div>
                        )}
                      </div>

                      {currentIndexMenu === index && itemBottomActive && (
                        <div className={s.itemBottomWrap}>
                          <div className={s.optionsList}>
                            {/* <OptionsItemAdmin
                              label="Индекс"
                              textInputInit={String(item.serial_number)}
                              inputShort={true}
                              inputConfirm={async (data) => {
                                updateSerialNumberByIndex(index, +data);
                                setItemBottomActive(false);
                                setCurrentIndexMenu(null);
                              }}
                            /> */}
                            <OptionsItemAdmin
                              label="Ссылка"
                              textInputInit={item.link}
                              inputConfirm={(data) => updateLink(index, data)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    {index === futureIndex && (
                      <div className={s.futureItem}>
                        <div className={s.futureItemWrap}> </div>
                      </div>
                    )}
                  </li>
                </>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default WindowListAdmin;
