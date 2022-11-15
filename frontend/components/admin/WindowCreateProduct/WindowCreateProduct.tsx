import { useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { GET_ALL_BRANDS } from "../../../graphql/brand.graphql";
import { GET_ALL_CATALOG, GET_ALL_CATALOG_NO_TREE } from "../../../graphql/catalog.graphql";
import { ICatalog } from "../../../interfaces/catalog.interface";
import { IBrand } from "../../../interfaces/products.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateProduct.module.scss";

const errorFields = {
    productName: false,
    productVendor: false,
    productPrice: false,
    productCount: false,
}

interface WindowCreateProductProps {
    visible: boolean
    closeWindow: () => void
}

const WindowCreateProduct: FC<WindowCreateProductProps> = ({ visible, closeWindow }) => {

    const { loading: loadingBrands, error: errorBrands, data: brandsData } = useQuery(GET_ALL_BRANDS)
    const { loading: loadingCatalog, error: errorCatalog, data: catalogData } = useQuery(GET_ALL_CATALOG_NO_TREE)

    const windowRef = useRef()

    const productNameRef = useRef<string>()
    const productVendorRef = useRef<string>()
    const productPriceRef = useRef<number>()
    const productCountRef = useRef<number>()
    const productBrandRef = useRef<string>()
    const productCatalogRef = useRef<string>()
    const productDescriptionRef = useRef<string>()


    const [productNameValid, setProductNameValid] = useState<boolean>(false)
    const [productVendorValid, setProductVendorValid] = useState<boolean>(false)
    const [productPriceValid, setProductPriceValid] = useState<boolean>(false)
    const [productCountValid, setProductCountValid] = useState<boolean>(false)

    const [brandsArr, setBrandsArr] = useState<IBrand[]>(null)
    const [catalogArr, setCatalogArr] = useState<ICatalog[]>(null)

    useEffect(() => {
        if (brandsData) {
            setBrandsArr(brandsData.getAllBrands)
        }
    }, [brandsData])
    useEffect(() => {
        if (catalogData) {
            setCatalogArr(catalogData.getAllCatalogNoTree)
        }
    }, [catalogData])

    const handleCloseWindow = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }


    const handleChangeProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
        productNameRef.current = e.target.value
    }
    const handleChangeProductVendor = (e: React.ChangeEvent<HTMLInputElement>) => {
        productVendorRef.current = e.target.value
    }
    const handleChangeProductPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        productPriceRef.current = Number(e.target.value)
    }
    const handleChangeProductCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        productCountRef.current = Number(e.target.value)
    }
    const handleChangeProductBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
        productBrandRef.current = e.target.value
    }
    const handleChangeProductCatalog = (e: React.ChangeEvent<HTMLSelectElement>) => {
        productCatalogRef.current = e.target.value
    }
    const handleChangeProductDescription = (e: any) => {
        productDescriptionRef.current = e.target.value
    }




    const onlyNumber = (e: any, ref: any, digits: number) => {
        if (e.target.value)
            if (e.target.value.length <= digits) {
                e.target.value = e.target.value.replace(/\D/g, '')
            } else {
                e.target.value = e.target.value.replace(/\D/g, '')
                e.target.value = e.target.value.slice(0, digits)
            }

    }
    const ProductFieldsNull = () => {
        productNameRef.current = null
        productVendorRef.current = null
        productPriceRef.current = null
        productCountRef.current = null
        productBrandRef.current = null
        productCatalogRef.current = null
        productDescriptionRef.current = null
    }

    const handleCreateProduct = () => {

        console.log('productNameRef', productNameRef.current);
        console.log('productVendorRef', productVendorRef.current);
        console.log('productPriceRef', productPriceRef.current);
        console.log('productCountRef', productCountRef.current);
        console.log('productBrandRef', productBrandRef.current);
        console.log('productCatalogRef', productCatalogRef.current);
        console.log('productDescriptionRef', productDescriptionRef.current);


        if (productNameRef.current) {
            setProductNameValid(true)
        } else {
            setProductNameValid(false)
        }
        if (productVendorRef.current) {
            setProductVendorValid(true)
        } else {
            setProductVendorValid(false)
        }
        if (productPriceRef.current > 0) {
            setProductPriceValid(true)
        } else {
            setProductPriceValid(false)
        }
        if (productCountRef.current) {
            setProductCountValid(true)
        } else {
            setProductCountValid(false)
        }

        if (productNameValid && productVendorValid && productPriceValid && productCountValid) {
            // Save DB
            ProductFieldsNull()
            closeWindow()
        }
    }

    return (
        <>
            {
                visible &&
                <div className={s.background} onClick={handleCloseWindow} ref={windowRef}>
                    <div className={s.window}>
                        <div className={s.LabelEdit}>
                            <span className={s.title}>Название товара</span>
                            <input className={!productNameValid ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeProductName} />
                        </div>
                        <div className={s.secondLevel}>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Артикул</span>
                                <input className={!productVendorValid ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeProductVendor} />
                            </div>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Цена</span>
                                <input className={!productPriceValid ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onInput={e => onlyNumber(e, productPriceRef, 8)} onChange={handleChangeProductPrice} />
                            </div>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Кол.-во</span>
                                <input className={!productCountValid ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onInput={e => onlyNumber(e, productCountRef, 6)} onChange={handleChangeProductCount} />
                            </div>
                        </div>

                        <div className={s.thirdLevel}>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Бренд</span>
                                <div className={s.dropdown} data-itemChart="1">
                                    <select name="one" className={s.dropdownSelect} onChange={handleChangeProductBrand} >
                                        {
                                            brandsArr &&
                                            <>
                                                {
                                                    brandsArr.map((item) => <option key={item.id}>{item.name}</option>)
                                                }
                                            </>
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Категория</span>
                                <div className={s.dropdown} data-itemChart="1">
                                    <select name="one" className={s.dropdownSelect} onChange={handleChangeProductCatalog} >
                                        {
                                            catalogArr &&
                                            <>
                                                {
                                                    catalogArr.map((item) => <option key={item.id}>{item.name}</option>)
                                                }
                                            </>
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={s.LabelEdit}>
                            <span className={s.title}>Описание</span>
                            <textarea className={s.description} rows={8} cols={50} onChange={handleChangeProductDescription}></textarea>
                        </div>



                        <div className={s.buttons}>
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleCreateProduct}>Создать товар</ButtonAdmin>
                            <div className={s.btnClose} onClick={closeWindow}>
                                <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => null}>Закрыть</ButtonAdmin>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default WindowCreateProduct;
