import { useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { GET_ALL_PRODUCTS } from "../../../../graphql/admin-product.graphql";
import { IAdminProducts } from "../../../../interfaces/products.interface";
import ButtonAdmin from "../../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonType, AdminButtonFunctional } from "../../../../enums/AdminButtons.enum";
import PopupMenu from "../../../PopupMenu/PopupMenu";

import s from "./AdminProductSection.module.scss";
import { IPopupMenuItems } from "../../../../interfaces/popup-menu.intrface";
import { ICoordinate } from "../../../../interfaces/coordinate.interface";
import WindowCreateProduct from "../../WindowCreateProduct/WindowCreateProduct";

const menuItems: IPopupMenuItems[] = [
  {
    indexItem: 1,
    name: 'Посмотреть товар'
  },
  {
    indexItem: 2,
    name: 'Редактировать товар'
  },
  {
    indexItem: 3,
    name: 'Удалить товар'
  }

]

interface AdminProductSectionProps { }

const AdminProductSection: FC<AdminProductSectionProps> = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS)

  const [products, setProducts] = useState<IAdminProducts[]>(null)
  // const popupCoordinate = useRef<ICoordinate>({X: 0, Y: 0})
  const [popupCoordinate, setPopupCoordinate] = useState<ICoordinate>({X: 0, Y: 0})
  const [popupMenuVisible, setPopupMenuVisible] = useState<boolean>(false)
  const [windowCreateProductVisible, setWindowCreateProductVisible] = useState<boolean>(false)
  const popupRef = useRef()

  useEffect(() => {
    // For POPUP
    document.body.addEventListener('click', outsideClick)
  }, [])
  useEffect(() => {
    if (data) {
      setProducts(data.getAllProducts);
    }
  }, [data]);

  // POPUP ////////////////////////////////////
  const outsideClick = (e) => {
    if(!e.path.includes(popupRef.current)){
      setPopupMenuVisible(false)
    }
  }
  const handleOpenPopupMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log(e)
    if(e.type === 'contextmenu'){
      setPopupCoordinate({X: e.clientX + 15, Y: e.clientY + 10})
      setPopupMenuVisible(true)
    }
    if(e.type === 'click'){
      setPopupMenuVisible(false)
    }
  }
  const handleSelectMenuItem = (indexItem) => {
    console.log('Popup menu', indexItem);
    setPopupMenuVisible(false)
  }
  // end POPUP ///////////////////////////////

  return (
    <div className={s.section}>
      <WindowCreateProduct visible={windowCreateProductVisible} closeWindow={() => setWindowCreateProductVisible(false)} />
      {
        popupMenuVisible && <PopupMenu menuItems={menuItems} coordinate={popupCoordinate} clickMenuItem={handleSelectMenuItem} popupRef={popupRef} />
      }

      <div className={s.createProduct}>
        <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => setWindowCreateProductVisible(true)}>
          Создать товар
        </ButtonAdmin>
      </div>


      <table className={s.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Артикул</th>
            <th>Цена, руб</th>
            <th>Бренд</th>
            <th>Кол.-во</th>
            <th>Категория</th>

          </tr>
        </thead>
        <tbody>
          {
            products &&
            <>
            {
              products.map((item, index) => (
                <tr key={item.id} onClick={handleOpenPopupMenu} onContextMenu={handleOpenPopupMenu}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.vendor_code}</td>
                  <td>{item.price}</td>
                  <td>{item.brand ? item.brand.name : null}</td>
                  <td>{item.count_in_stock}</td>
                  <td>Цветы в ящиках</td>
                </tr>
              ))
            }
            </>
          }

        </tbody>
      </table>

      {/* {products && (
        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )} */}


    </div>
  );
};

export default AdminProductSection;
