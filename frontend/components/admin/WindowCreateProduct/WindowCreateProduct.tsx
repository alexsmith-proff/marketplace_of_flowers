import { useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { GET_ALL_BRANDS } from "../../../graphql/brand.graphql";
import { GET_ALL_CATALOG_NO_TREE, GET_ALL_FILTER_ELEMENT } from "../../../graphql/catalog.graphql";
import { useInput } from "../../../hooks/useInput";
import { useProductFilter } from "../../../hooks/useProductFilter";
import { useTextArea } from "../../../hooks/useTextArea";
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

// Вкладки
const tabsName = ['Основное', 'Фильтры']

const WindowCreateProduct: FC<WindowCreateProductProps> = ({ name, slug, createProduct, closeWindow }) => {
    const { loading: loadingBrands, error: errorBrands, data: brandsData } = useQuery(GET_ALL_BRANDS)
    const { loading: loadingCatalog, error: errorCatalog, data: catalogData } = useQuery(GET_ALL_CATALOG_NO_TREE)
    const { loading: filterElements, error: errorFilterElements, data: filterElementsData } = useQuery(GET_ALL_FILTER_ELEMENT)

    const windowRef = useRef()

    const [tabIndex, setTabIndex] = useState<number>(1)

    const productName = useInput('', 'string')
    const slugName = useInput('', 'string')
    const productVendor = useInput('', 'string')
    const productPrice = useInput('', 'number')
    const productCount = useInput('', 'number')

    const productDescription = useTextArea('')

    const [productBrand, setProductBrand] = useState<IBrand>(null)
    const [productCatalog, setProductCatalog] = useState<ICatalog>(null)
    const [filesArr, setFilesArr] = useState([])

    const [brandsArr, setBrandsArr] = useState<IBrand[]>(null)
    const [catalogArr, setCatalogArr] = useState<ICatalog[]>(null)
    const [filterElementArr, setFilterElementArr] = useState<IFilterElement[]>([])

    const filterArrInTable = useProductFilter([])

    const [previewImages, setPreviewImages] = useState<IPreviewProductImage[]>([])
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

    const handleChangeProductBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const brand = brandsArr.find((item) => item.name == e.target.value)
        setProductBrand(brand)
    }
    const handleChangeProductCatalog = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const catalog = catalogArr.find((item) => item.name == e.target.value)
        setProductCatalog(catalog)
    }

    const handleChangeImages = (e: any) => {
        if (e.target.files) {
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
        if (productName && filterArrInTable.isReadyToFeach) {
            createProduct({
                name: String(productName.value),
                slug: '',
                price: Number(productPrice.value),
                vendor_code: String(productVendor.value),
                count_in_stock: Number(productCount.value),
                brand_id: productBrand ? Number(productBrand.id) : null,
                catalog_id: productCatalog ? Number(productCatalog.id) : null,
                images: previewImages,
                filters: filterArrInTable.productFilterArr
            })

            closeWindow()
        }
    }

    return (
        <>
            <div className={s.background} onClick={handleCloseWindow} ref={windowRef}>
                <div className={s.window}>
                    <ul className={s.tabs}>
                        {
                            tabsName.map((item, index) => <li className={s.tabsItem + ' ' + (tabIndex == index + 1 ? s.active : '')} onClick={() => setTabIndex(index + 1)} key={index}>{item}</li>)
                        }
                    </ul>
                    {/* Вкладка 'Основное' */}
                    {
                        tabIndex == 1 &&
                        <div className={s.tabsContent}>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Название товара</span>
                                <input className={!productName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" value={productName.value} onChange={productName.onChange} />
                            </div>
                            <div className={s.secondLevel}>
                                <div className={s.LabelEdit}>
                                    <span className={s.title}>Артикул</span>
                                    <input className={!productVendor ? (s.vendorInput + ' ' + s.nameInput + ' ' + s.error) : (s.vendorInput + ' ' + s.nameInput)} type="text" value={productVendor.value} onChange={productVendor.onChange} />
                                </div>
                                <div className={s.LabelEdit}>
                                    <span className={s.title}>Цена</span>
                                    <input className={!productPrice ? (s.priceInput + ' ' + s.nameInput + ' ' + s.error) : (s.priceInput + ' ' + s.nameInput)} type="text" value={productPrice.value} onInput={(e) => productPrice.onInput(e, 4)} onChange={productPrice.onChange} />
                                </div>
                                <div className={s.LabelEdit}>
                                    <span className={s.title}>Кол.-во</span>
                                    <input className={!productCount ? (s.countInput + ' ' + s.nameInput + ' ' + s.error) : (s.countInput + ' ' + s.nameInput)} type="text" value={productCount.value} onInput={(e) => productCount.onInput(e, 4)} onChange={productCount.onChange} />
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
                                                    <div className={s.previewImages} key={ind}>
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
                                <textarea className={s.description} rows={8} cols={50} value={productDescription.value} onChange={productDescription.onChange}></textarea>
                            </div>

                        </div>
                    }
                    {/* Вкладка 'Фильтры' */}
                    {
                        tabIndex == 2 &&
                        <div className={s.tabsContent}>
                            <FilterTable filterArrInTable={filterArrInTable.productFilterArr} change={filterArrInTable.change} isReadyCreate={filterArrInTable.isReadyCreate} filterElementArr={filterElementArr} />
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