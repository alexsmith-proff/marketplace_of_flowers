import { useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_BY_SORT, UPDATE_PRODUCT, UPDATE_RELATIONS_PRODUCT } from "../../../../graphql/admin-product.graphql";
import { IAdminProduct, ICreateProductInput, IUpdateProductInput, IUpdateProductRelationsInput } from "../../../../interfaces/products.interface";
import ButtonAdmin from "../../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonType, AdminButtonFunctional } from "../../../../enums/AdminButtons.enum";
import PopupMenu from "../../../PopupMenu/PopupMenu";

import s from "./AdminProductSection.module.scss";
import { IPopupMenuItems } from "../../../../interfaces/popup-menu.intrface";
import { ICoordinate } from "../../../../interfaces/coordinate.interface";
import WindowCreateProduct from "../../WindowCreateProduct/WindowCreateProduct";
import WindowUpdateProduct from "../../WindowUpdateProduct/WindowUpdateProduct";
import axios from "axios";

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
  // const { loading, error, data } = useQuery(GET_ALL_PRODUCTS_BY_SORT,
  //   {
  //     variables: {
  //       sortProductInput: {
  //         sort_field: "count_in_stock",
  //         sort_order: "ASC"
  //       }
  //     }
  //   }
  // )
  const { loading, error, data, refetch: RefeachAllProductsBySort } = useQuery(GET_ALL_PRODUCTS_BY_SORT,
    {
      variables: {
        sortProductInput: {
          sort_field: "count_in_stock",
          sort_order: "ASC"
        }
      }
    });
  const [createProduct, dataCreateProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct, dataUpdateProduct] = useMutation(UPDATE_PRODUCT)
  const [updateRelationsProduct, dataUpdateRelationsProduct] = useMutation(UPDATE_RELATIONS_PRODUCT)
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
    if (e.path) {
      if (!e.path.includes(popupRef.current)) {
        setPopupMenuVisible(false)
      }
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
            query: GET_ALL_PRODUCTS_BY_SORT,
            variables: {
              sortProductInput: {
                sort_field: "count_in_stock",
                sort_order: "ASC"
              }
            }
          }
        ]
      })
      setProductIndexActive(null)
    }
  }
  // end POPUP ///////////////////////////////

  const handleCreateProduct = (createProductInput: ICreateProductInput) => {
    let formData = new FormData()
    formData.append('name', createProductInput.name)
    formData.append('slug', createProductInput.slug)
    formData.append('price', String(createProductInput.price ? createProductInput.price : 0))
    formData.append('count_in_stock', String(createProductInput.count_in_stock ? createProductInput.count_in_stock : 0))
    formData.append('vendor_code', createProductInput.vendor_code)
    formData.append('brand_id', String(createProductInput.brand_id))
    formData.append('catalog_id', String(createProductInput.catalog_id))
    for(let i = 0; i < createProductInput.images.length; i++){
      formData.append('images', createProductInput.images.map((file) => file.fileFromTarget)[i])
    }
    const mainImageIndex = createProductInput.images.findIndex((img) => img.isMainPhoto)
    formData.append('main_image_index', String(mainImageIndex))
    

    // console.log('createProductInput.images.map((file) => file.fileFromTarget)', Array.from(createProductInput.images).map((file) => file.fileFromTarget));
    // console.log('mainImageIndex', mainImageIndex);


    axios.post(process.env.API_URI + '/api/product/create', formData)
      .then((res) => {
        console.log('Success' + res.data);
        RefeachAllProductsBySort()
      })
      .catch((err) => {
        console.log(err);
      })




    // Save DB
    // createProduct({
    //   variables: {
    //     createProductInput: createProductInput
    //   },
    //   refetchQueries: [
    //     {
    //       query: GET_ALL_PRODUCTS_BY_SORT,
    //       variables: {
    //         sortProductInput: {
    //           sort_field: "count_in_stock",
    //           sort_order: "ASC"
    //         }
    //       }
    //     }
    //   ]
    // })
  }

  const handleUpdateProduct = async (updateProductInput: IUpdateProductInput, updateProductRelationsInput: IUpdateProductRelationsInput) => {
    await updateProduct({
      variables: {
        updateProductInput: updateProductInput
      }
    })
    await updateRelationsProduct({
      variables: {
        updateProductRelationsInput: updateProductRelationsInput
      },
      refetchQueries: [
        {
          query: GET_ALL_PRODUCTS_BY_SORT,
          variables: {
            sortProductInput: {
              sort_field: "count_in_stock",
              sort_order: "ASC"
            }
          }
        }
      ]
    })
  }

  const closeWindow = () => {
    setWindowCreateProductVisible(false)
    setWindowUpdateProductVisible(false)
    setProductIndexActive(null)
  }

  return (
    <div className={s.section}>
      <WindowCreateProduct visible={windowCreateProductVisible} createProduct={handleCreateProduct} closeWindow={closeWindow} />
      {
        currentProduct &&
        <WindowUpdateProduct visible={windowUpdateProductVisible} product={currentProduct} updateProduct={handleUpdateProduct} closeWindow={closeWindow} />
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