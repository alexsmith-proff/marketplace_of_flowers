import { useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_BY_SORT } from "../../../../graphql/admin-product.graphql";
import { IAdminProduct } from "../../../../interfaces/products.interface";
import ButtonAdmin from "../../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonType, AdminButtonFunctional } from "../../../../enums/AdminButtons.enum";
import PopupMenu from "../../../PopupMenu/PopupMenu";

import s from "./AdminProductSection.module.scss";
import { IPopupMenuItems } from "../../../../interfaces/popup-menu.intrface";
import { ICoordinate } from "../../../../interfaces/coordinate.interface";
import WindowCreateProduct from "../../WindowCreateProduct/WindowCreateProduct";
import WindowUpdateProduct from "../../WindowUpdateProduct/WindowUpdateProduct";

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
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS_BY_SORT,
    {
      variables: {
        sortProductInput: {
          sort_field: "count_in_stock",
          sort_order: "ASC"
        }
      }
    }
  )
  const [deleteProduct, dataDeleteProduct] = useMutation(DELETE_PRODUCT)

  const [products, setProducts] = useState<IAdminProduct[]>(null)
  const [currentProduct, setCurrentProduct] = useState<IAdminProduct>(null)
  const [popupCoordinate, setPopupCoordinate] = useState<ICoordinate>({ X: 0, Y: 0 })
  const [popupMenuVisible, setPopupMenuVisible] = useState<boolean>(false)
  const [windowCreateProductVisible, setWindowCreateProductVisible] = useState<boolean>(false)
  const [windowUpdateProductVisible, setWindowUpdateProductVisible] = useState<boolean>(false)
  const [productIndexActive, setProductIndexActive] = useState<number>(null)

  const popupRef = useRef()

  useEffect(() => {
    // For POPUP
    document.body.addEventListener('click', outsideClick)
  }, [])
  useEffect(() => {
    if (data) {
      setProducts(data.getAllProductsBySort);
    }
  }, [data]);

  // POPUP ////////////////////////////////////
  const outsideClick = (e) => {
    if (!e.path.includes(popupRef.current)) {
      setPopupMenuVisible(false)
    }
  }
  const handleOpenPopupMenu = (e: React.MouseEvent, product: IAdminProduct, index: number) => {
    e.preventDefault()
    setProductIndexActive(index)
    setCurrentProduct(product)
    if (e.type === 'contextmenu') {
      setPopupCoordinate({ X: e.clientX + 15, Y: e.clientY + 10 })
      setPopupMenuVisible(true)
    }
    if (e.type === 'click') {
      setPopupMenuVisible(false)
    }

  }
  const handleSelectMenuItem = (indexItem: number) => {
    console.log('Popup menu', indexItem);
    console.log('currentProduct', currentProduct);
    setPopupMenuVisible(false)
    //Popup menu - Редактировать
    if (indexItem == 2) {
      setWindowUpdateProductVisible(true)
    }
    //Popup menu - Удалить
    if (indexItem == 3) {
      deleteProduct({
        variables: {
          id: +currentProduct.id
        },
        refetchQueries: [
          {
            query: GET_ALL_PRODUCTS
          }
        ]
      })
      setProductIndexActive(null)
    }
  }
  // end POPUP ///////////////////////////////

  const closeWindow = () => {
    setWindowCreateProductVisible(false)
    setWindowUpdateProductVisible(false)
    setProductIndexActive(null)
  }

  return (
    <div className={s.section}>
      <WindowCreateProduct visible={windowCreateProductVisible} closeWindow={closeWindow} />
      {
        currentProduct &&
        <WindowUpdateProduct visible={windowUpdateProductVisible} product={currentProduct} closeWindow={closeWindow} />
      }
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
            <th>Производитель</th>
            <th>Кол.-во</th>
            <th>Категория</th>
            <th>Create</th>
            <th>Update</th>

          </tr>
        </thead>
        <tbody>
          {
            products &&
            <>
              {
                products.map((item, index) => (
                  <tr className={index == productIndexActive ? (s.tr + ' ' + s.activeRow) : s.tr} key={item.id} onClick={(e) => handleOpenPopupMenu(e, item, index)} onContextMenu={(e) => handleOpenPopupMenu(e, item, index)}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.vendor_code}</td>
                    <td>{item.price}</td>
                    <td>{item.brand ? item.brand.name : null}</td>
                    <td>{item.count_in_stock}</td>
                    <td>{item.catalog ? item.catalog.name : null}</td>
                    <td>{item.catalog ? String(item.createdAt) : null}</td>
                    <td>{item.catalog ? String(item.updatedAt) : null}</td>
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