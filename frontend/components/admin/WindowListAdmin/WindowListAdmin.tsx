import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import {
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineMore,
  AiOutlineCheck,
} from "react-icons/ai";
import { MdClose, MdDeleteOutline } from "react-icons/md";

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
import { IPreviewProductImage } from "../../../interfaces/products.interface";
import axios from "axios";

interface WindowListAdminProps {
  typeList?: AdminListType;
  visible: boolean;
  title: string;
  // itemArr: IMenuItem[] | ICatalog[];
  itemArr: any;
  optionsBtnVisible?: boolean;
  clickToItem?: (index: number) => void;
  createItemName: (name: string) => void;
  updateItemName: (currentIndexMenu: number, name: string) => void;
  deleteItemName: (currentIndexMenu: number) => void;

  updateSerialNumberByIndex?: (index: number, serial_number: number) => void;
  updateSerialNumberById?: (id: number, serial_number: number) => void;
  updateLink?: (index: number, link: string) => void;
  updateSlug?: (index: number, slug: string) => void;
  updateValue?: (index: number, value: string) => void;
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
  updateSlug,
  updateValue,
}: WindowListAdminProps) => {
  const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(null);
  const [itemBottomActive, setItemBottomActive] = useState<boolean>(false);
  const [dragIndex, setDragIndex] = useState<number>(null);
  const [futureIndex, setFutureIndex] = useState<number>(null);

  const [editMenuItemUpdateActive, setEditMenuItemUpdateActive] = useState<boolean>(false);
  const [editMenuItemCreateActive, setEditMenuItemCreateActive] = useState<boolean>(false);

  const editUpdateMenuItemRef = useRef(null);
  const editCreateMenuItemRef = useRef(null);

  const [imagesArr, setImagesArr] = useState([])
  const [previewImages, setPreviewImages] = useState<IPreviewProductImage[]>([])
  const [numPreviewPhotoHover, setNumPreviewPhotoHover] = useState(null)

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
    setPreviewImages([])
    clickToItem(index);
    if (itemBottomActive) setItemBottomActive(false);
  };

  const handleClickOptions = (index) => {
    if (index !== currentIndexMenu) return;
    // console.log("handleClickOptions");
    setItemBottomActive(!itemBottomActive);
  };

  function handleDragStart(e, index) {
    setItemBottomActive(false);
    setDragIndex(index);
  }
  function handleDragOver(e: React.DragEvent<HTMLLIElement>, index: number) {
    e.preventDefault();
    setFutureIndex(index);
  }
  function handleDragLeave(e) {
    e.preventDefault();
    e.target.classList.remove("menuListDragOver");
  }
  function handleDragEnd(e, index) {
    e.preventDefault();
    e.target.classList.remove("menuListDragOver");
    setFutureIndex(null);
  }
  function handleDrop(e: React.DragEvent<HTMLLIElement>, index) {
    e.preventDefault();
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
        // console.log("else");

        const itemArrID = [];
        itemArrID.push({
          id: itemArr[dragIndex].id,
          serial_number: itemArr[index].serial_number + 100,
          name: itemArr[dragIndex].name,
        });
        // console.log("itemArrID", itemArrID);

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





  const handleChangeImages = (e: any) => {
    if (e.target.files) {
      const ArrayObj: IPreviewProductImage[] = Array.from(e.target.files).map((f) => {
        console.log('aaaaaaaaa', URL.createObjectURL(f as Blob));
        return {
          fileFromTarget: f,
          file: URL.createObjectURL(f as Blob),
          isMainPhoto: false
        }
      })
      setPreviewImages((prevImages) => prevImages.concat(ArrayObj))
    }
  }





  // Удаление preview фото
  const handleDeletePreviewPhoto = (index: number) => {
    setPreviewImages(previewImages.filter((_, ind) => {
      if (ind != index) {
        return true
      }
      return false
    }))
  }





  // Клик на кнопку "Создать товар"
  const handleClickLoadPhoto = async () => {
    let formData = new FormData()
    console.log('previewImagesssssssssssssssssss', previewImages);
    formData.append('id', itemArr[currentIndexMenu ? currentIndexMenu : 0].id)

    for (let i = 0; i < previewImages.length; i++) {
      formData.append('images', previewImages.map((file) => file.fileFromTarget)[i])
      formData.append('filenames_images', previewImages[i].file)

    }
    await axios.post(process.env.API_URI + '/api/catalog/update', formData)

  }


  useEffect(() => {
    console.log('itemArrkjhsbdjhbsjhdfbsjhbdfjhsdb', itemArr);

    if (typeList === AdminListType.Catalog) {
      if (itemArr[0]) {
        const newPreviewImages = [...previewImages, ...itemArr[currentIndexMenu ? currentIndexMenu : 0].filenames_images.map(item => {
          const obj = {
            fileFromTarget: process.env.API_URI + '/' + item,
            // file: URL.createObjectURL(item as Blob),
            file: process.env.API_URI + '/' + item
          }
          return obj
        })]
        setPreviewImages(newPreviewImages)

      }
    }

  }, [itemArr, currentIndexMenu, itemBottomActive])







  console.log("currentIndexMenu", currentIndexMenu);

  // console.log("previewImages", previewImages);
  // console.log("itemArrrrr", itemArr);

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
                    draggable={(typeList !== AdminListType.Filter) && (typeList !== AdminListType.FilterValue) && (typeList !== AdminListType.Catalog) ? true : false}
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
                            {
                              typeList !== AdminListType.Filter && typeList !== AdminListType.FilterValue && typeList !== AdminListType.Catalog &&
                              <OptionsItemAdmin
                                label="Ссылка"
                                textInputInit={item.link}
                                inputConfirm={(data) => updateLink(index, data)}
                              />
                            }
                            <OptionsItemAdmin
                              label="slug"
                              textInputInit={item.slug}
                              inputConfirm={(data) => updateSlug(index, data)}
                            />
                            {
                              typeList === AdminListType.FilterValue &&
                              <OptionsItemAdmin
                                label="Значение"
                                textInputInit={item.value}
                                inputConfirm={(data) => updateValue(index, data)}
                              />
                            }
                            {
                              typeList === AdminListType.Catalog &&
                              <div className={s.images}>
                                <div className={s.imagesTitle}>Изображения</div>
                                <input type="file" accept="image/*" multiple={true} onChange={handleChangeImages} />
                                <div className={s.preview}>
                                  {
                                    imagesArr &&
                                    <>
                                      {
                                        previewImages.map((photo, ind) => (
                                          <div className={s.previewImages} key={ind}>
                                            <img src={photo.file} key={ind} onMouseEnter={() => setNumPreviewPhotoHover(ind)} />
                                            {
                                              numPreviewPhotoHover === ind && <MdClose className={s.previewDelete} onClick={() => handleDeletePreviewPhoto(ind)} />
                                            }

                                          </div>
                                        ))
                                      }

                                    </>
                                  }
                                </div>
                                {
                                  previewImages.length != 0 ?
                                    <div className={s.loadBtn}>
                                      <button onClick={handleClickLoadPhoto}>Загрузить фото на сервер</button>
                                    </div>
                                    :
                                    <></>
                                }

                              </div>
                            }
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
