import { useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "../../../graphql/admin-product.graphql";
import { GET_ALL_BRANDS } from "../../../graphql/brand.graphql";
import { GET_ALL_CATALOG_NO_TREE, GET_ALL_FILTER_ELEMENT } from "../../../graphql/catalog.graphql";
import { useProductFilter } from "../../../hooks/useProductFilter";
import { ICatalog } from "../../../interfaces/catalog.interface";
import { IFilterElement, IFilterValue } from "../../../interfaces/filter.interface";
import { IPreviewProductImage, IProductFilter } from "../../../interfaces/products.interface";
import { IBrand, ICreateProductInput } from "../../../interfaces/products.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import FilterTable from "./FilterTable/FilterTable";

import s from "./WindowCreateProduct.module.scss";

let getSlug = require('speakingurl');

// interface IFilterInTable {
//     id: number
//     product_filter: IProductFilter
// }

interface WindowCreateProductProps {
    name?: string
    slug?: string
    createProduct: (createProductInput: ICreateProductInput) => void
    closeWindow: () => void
}

const tabsName = ['Основное', 'Фильтры']

const WindowCreateProduct: FC<WindowCreateProductProps> = ({ name, slug, createProduct, closeWindow }) => {
    const { loading: loadingBrands, error: errorBrands, data: brandsData } = useQuery(GET_ALL_BRANDS)
    const { loading: loadingCatalog, error: errorCatalog, data: catalogData } = useQuery(GET_ALL_CATALOG_NO_TREE)
    const { loading: filterElements, error: errorFilterElements, data: filterElementsData } = useQuery(GET_ALL_FILTER_ELEMENT)

    const windowRef = useRef()

    const [tabIndex, setTabIndex] = useState<number>(1)

    const [productName, setProductName] = useState<string>(name)
    const [slugName, setSlugName] = useState<string>(slug)
    const [productVendor, setProductVendor] = useState<string>(null)
    const [productPrice, setProductPrice] = useState<number>(null)
    const [productCount, setProductCount] = useState<number>(null)
    const [productBrand, setProductBrand] = useState<IBrand>(null)
    const [productCatalog, setProductCatalog] = useState<ICatalog>(null)
    const [productDescription, setProductDescription] = useState<string>(null)
    const [filesArr, setFilesArr] = useState([])

    const [brandsArr, setBrandsArr] = useState<IBrand[]>(null)
    const [catalogArr, setCatalogArr] = useState<ICatalog[]>(null)
    const [filterElementArr, setFilterElementArr] = useState<IFilterElement[]>([])
    const [filterValueArr, setFilterValueArr] = useState<IFilterValue[]>(null)



    const filterArrInTable = useProductFilter([])



    const [previewImages, setPreviewImages] = useState<IPreviewProductImage[]>([])
    // const [fileDataURL, setFileDataURL] = useState(null)
    const [numPreviewPhotoHover, setNumPreviewPhotoHover] = useState(null)

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
    useEffect(() => {
        if (filterElementsData) {
            setFilterElementArr(filterElementsData.getFilterElement)
        }
    }, [filterElementsData])

    const handleCloseWindow = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }

    const handleChangeProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value)
        setSlugName(getSlug(e.target.value))
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
        setPreviewImages([])
    }


    // const handleChangeBlockFile = (e: any) => {
    //     setFile(e.target.files[0])

    //     // setFiles(e.target.files)
    // }

    const handleChangeImages = (e: any) => {
        console.log(e.target.files[0]);

        if (e.target.files) {
            // const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file as Blob))
            const ArrayObj: IPreviewProductImage[] = Array.from(e.target.files).map((f) => {
                return {
                    fileFromTarget: f,
                    file: URL.createObjectURL(f as Blob),
                    isMainPhoto: false
                }
            })
            setPreviewImages((prevImages) => prevImages.concat(ArrayObj))
        }
    }
    const handlePreviewMainPhoto = (index: number) => {
        setPreviewImages((prevImages) => prevImages.map((image, ind) => {
            if (ind === index) {
                return { ...image, isMainPhoto: true }
            }
            return { ...image, isMainPhoto: false }
        }))
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
    const handleClickCreateProduct = () => {
        console.log('previewImage', previewImages);

        if (productName) {
            createProduct({
                name: productName,
                slug: slugName,
                price: productPrice,
                vendor_code: productVendor,
                count_in_stock: productCount,
                brand_id: productBrand ? +productBrand.id : null,
                catalog_id: productCatalog ? +productCatalog.id : null,
                images: previewImages,
            })

            ProductFieldsNull()
            closeWindow()
        }
    }


    console.log('filterArrInTable', filterArrInTable.productFilterArr);

    return (
        <>
            <div className={s.background} onClick={handleCloseWindow} ref={windowRef}>
                <div className={s.window}>
                    <ul className={s.tabs}>
                        {
                            tabsName.map((item, index) => <li className={s.tabsItem + ' ' + (tabIndex == index + 1 ? s.active : '')} onClick={() => setTabIndex(index + 1)} key={index}>{item}</li>)
                        }
                    </ul>
                    {/* Вкладка Основное */}
                    {
                        tabIndex == 1 &&
                        <div className={s.tabsContent}>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Название товара</span>
                                <input className={!productName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" value={productName} onChange={handleChangeProductName} />
                            </div>
                            <div className={s.secondLevel}>
                                <div className={s.LabelEdit}>
                                    <span className={s.title}>Артикул</span>
                                    <input className={!productVendor ? (s.vendorInput + ' ' + s.nameInput + ' ' + s.error) : (s.vendorInput + ' ' + s.nameInput)} type="text" value={productVendor} onChange={handleChangeProductVendor} />
                                </div>
                                <div className={s.LabelEdit}>
                                    <span className={s.title}>Цена</span>
                                    <input className={!productPrice ? (s.priceInput + ' ' + s.nameInput + ' ' + s.error) : (s.priceInput + ' ' + s.nameInput)} type="text" value={productPrice} onInput={e => onlyNumber(e, 8)} onChange={handleChangeProductPrice} />
                                </div>
                                <div className={s.LabelEdit}>
                                    <span className={s.title}>Кол.-во</span>
                                    <input className={!productCount ? (s.countInput + ' ' + s.nameInput + ' ' + s.error) : (s.countInput + ' ' + s.nameInput)} type="text" value={productCount} onInput={e => onlyNumber(e, 6)} onChange={handleChangeProductCount} />
                                </div>
                            </div>

                            <div className={s.thirdLevel}>
                                <div className={s.LabelEdit}>
                                    <span className={s.title}>Бренд</span>
                                    <div className={s.dropdown} data-itemChart="1">
                                        <select name="one" className={s.dropdownSelect} onChange={handleChangeProductBrand} >
                                            <option>{productBrand ? productBrand.name : ''}</option>
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
                                            <option>{productCatalog ? productCatalog.name : ''}</option>
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
                                <span className={s.title}>Изображения</span>
                                <input type="file" accept="image/*" multiple={true} onChange={handleChangeImages} />
                                <div className={s.preview}>
                                    {
                                        filesArr &&
                                        <>
                                            {
                                                previewImages.map((photo, ind) => (
                                                    <div className={s.previewImages}>
                                                        <img src={photo.file} key={ind} onClick={() => handlePreviewMainPhoto(ind)} onMouseEnter={() => setNumPreviewPhotoHover(ind)} />
                                                        {
                                                            photo.isMainPhoto && <AiFillHome className={s.previewHome} />
                                                        }
                                                        {
                                                            numPreviewPhotoHover === ind && <MdClose className={s.previewDelete} onClick={() => handleDeletePreviewPhoto(ind)} />
                                                        }

                                                    </div>
                                                ))
                                            }
                                        </>
                                    }
                                </div>
                            </div>

                            <div className={s.LabelEdit}>
                                <span className={s.title}>Описание</span>
                                <textarea className={s.description} rows={8} cols={50} onChange={handleChangeProductDescription}></textarea>
                            </div>

                        </div>
                    }
                    {/* Вкладка Фильтры */}
                    {
                        tabIndex == 2 &&
                        <div className={s.tabsContent}>
                            <FilterTable filterArrInTable={filterArrInTable.productFilterArr} change={filterArrInTable.change} filterElementArr={filterElementArr} />
                        </div>
                    }
                    <div className={s.buttons}>
                        <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleClickCreateProduct}>Создать товар</ButtonAdmin>
                        <div className={s.btnClose} onClick={closeWindow}>
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => closeWindow()}>Закрыть</ButtonAdmin>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default WindowCreateProduct;