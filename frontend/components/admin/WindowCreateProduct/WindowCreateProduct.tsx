import { useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "../../../graphql/admin-product.graphql";
import { GET_ALL_BRANDS } from "../../../graphql/brand.graphql";
import { GET_ALL_CATALOG_NO_TREE } from "../../../graphql/catalog.graphql";
import { ICatalog } from "../../../interfaces/catalog.interface";
import { IBrand, ICreateProductInput } from "../../../interfaces/products.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateProduct.module.scss";

interface WindowCreateProductProps {
    visible: boolean
    createProduct: (createProductInput: ICreateProductInput) => void
    closeWindow: () => void
}

const WindowCreateProduct: FC<WindowCreateProductProps> = ({ visible, createProduct, closeWindow }) => {
    const { loading: loadingBrands, error: errorBrands, data: brandsData } = useQuery(GET_ALL_BRANDS)
    const { loading: loadingCatalog, error: errorCatalog, data: catalogData } = useQuery(GET_ALL_CATALOG_NO_TREE)

    const windowRef = useRef()

    const [productName, setProductName] = useState<string>(null)
    const [productVendor, setProductVendor] = useState<string>(null)
    const [productPrice, setProductPrice] = useState<number>(null)
    const [productCount, setProductCount] = useState<number>(null)
    const [productBrand, setProductBrand] = useState<IBrand>(null)
    const [productCatalog, setProductCatalog] = useState<ICatalog>(null)
    const [productDescription, setProductDescription] = useState<string>(null)
    const [filesArr, setFilesArr] = useState([])

    const [brandsArr, setBrandsArr] = useState<IBrand[]>(null)
    const [catalogArr, setCatalogArr] = useState<ICatalog[]>(null)

    useEffect(() => {
        if (brandsData) {
            setBrandsArr(brandsData.getAllBrands)
            setProductBrand(brandsData.getAllBrands[0])
        }
    }, [brandsData])
    useEffect(() => {
        if (catalogData) {
            setCatalogArr(catalogData.getAllCatalogNoTree)
            setProductCatalog(catalogData.getAllCatalogNoTree[0])
        }
    }, [catalogData])

    const handleCloseWindow = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }

    const handleChangeProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value)
    }
    const handleChangeProductVendor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductVendor(e.target.value)
    }
    const handleChangeProductPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductPrice(Number(e.target.value))
    }
    const handleChangeProductCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductCount(Number(e.target.value))
    }
    const handleChangeProductBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const brand = brandsArr.find((item) => item.name == e.target.value)
        setProductBrand(brand)
    }
    const handleChangeProductCatalog = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const catalog = catalogArr.find((item) => item.name == e.target.value)
        setProductCatalog(catalog)
    }
    const handleChangeProductDescription = (e: any) => {
        setProductDescription(e.target.value)
    }


    const onlyNumber = (e: any, digits: number) => {
        if (e.target.value)
            if (e.target.value.length <= digits) {
                e.target.value = e.target.value.replace(/\D/g, '')
            } else {
                e.target.value = e.target.value.replace(/\D/g, '')
                e.target.value = e.target.value.slice(0, digits)
            }

    }
    const ProductFieldsNull = () => {
        setProductName(null)
        setProductVendor(null)
        setProductPrice(null)
        setProductCount(null)
        setProductBrand(brandsArr ? brandsArr[0] : null)
        setProductCatalog(catalogArr ? catalogArr[0] : null)
        setProductDescription(null)
    }

    const handleChangeImages = (e: any) => {
        console.log(e.target.files[0]);
        setFilesArr(e.target.files)

        const reader = new FileReader()
        reader.onload = () => {
            setFilesArr(reader.result)
            console.log('reader.result', reader.result);

        }
        reader.readAsDataURL(e.target.files[0])



        // //Блок изображений
        // if (blockType == BlockTypeArr[1]) {
        //     if(!file) return
        //     let formData = new FormData()
        //     formData.append('file', file)
        //     formData.append('name', titleName)
        //     formData.append('slug', slugName)

        //     createBlockImg(formData)
        // }



    }

    const handleClickCreateProduct = () => {
        if (productName && productVendor && productPrice && productCount) {
            createProduct({
                name: productName,
                price: productPrice,
                vendor_code: productVendor,
                count_in_stock: productCount,
                brand_id: +productBrand.id,
                catalog_id: +productCatalog.id,
            })

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
                            <input className={!productName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeProductName} />
                        </div>
                        <div className={s.secondLevel}>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Артикул</span>
                                <input className={!productVendor ? (s.vendorInput + ' ' + s.nameInput + ' ' + s.error) : (s.vendorInput + ' ' + s.nameInput)} type="text" onChange={handleChangeProductVendor} />
                            </div>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Цена</span>
                                <input className={!productPrice ? (s.priceInput + ' ' + s.nameInput + ' ' + s.error) : (s.priceInput + ' ' + s.nameInput)} type="text" onInput={e => onlyNumber(e, 8)} onChange={handleChangeProductPrice} />
                            </div>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Кол.-во</span>
                                <input className={!productCount ? (s.countInput + ' ' + s.nameInput + ' ' + s.error) : (s.countInput + ' ' + s.nameInput)} type="text" onInput={e => onlyNumber(e, 6)} onChange={handleChangeProductCount} />
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

                        <input type="file" accept="image/*" multiple={true} onChange={handleChangeImages} />
                        <div className={s.preview}>
                            {
                                filesArr &&
                                <>
                                    {
                                        filesArr.map((item) => <img className={s.previewImages} src={item} />)
                                    }
                                </>

                            }
                        </div>


                        <div className={s.buttons}>
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleClickCreateProduct}>Создать товар</ButtonAdmin>
                            <div className={s.btnClose} onClick={closeWindow}>
                                <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => closeWindow()}>Закрыть</ButtonAdmin>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default WindowCreateProduct;
