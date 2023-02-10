import { useLazyQuery, useQuery } from "@apollo/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { AdminSectionType } from "../../../enums/AdminSections.enum";
import { AdminWindowMode } from "../../../enums/Mode.enum";
import { GET_ALL_PRODUCTS } from "../../../graphql/admin-product.graphql";
import { IAdminProduct } from "../../../interfaces/products.interface";
import { INameSlugInput } from "../../../interfaces/section.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import { FcDataRecovery } from "react-icons/fc";


import s from "./WindowCreateNameSlug.module.scss";


let getSlug = require('speakingurl');

interface WindowCreateNameSlugProps {
    modeWindow: AdminWindowMode
    typeSection: AdminSectionType
    name?: string
    slug?: string
    initProductName?: string
    // product?: IAdminProduct
    create?: (createProductInput: INameSlugInput) => void
    update?: (updateProductInput: INameSlugInput) => void
    closeWindow: () => void
}

const WindowCreateNameSlug: FC<WindowCreateNameSlugProps> = ({ modeWindow, typeSection, name, slug, initProductName, create, update, closeWindow }) => {

    const [products, setProducts] = useState<IAdminProduct[]>([])
    const [productName, setProductName] = useState<string>(initProductName)

    const { loading, error, data, refetch: RefeachAllProducts } = useQuery(GET_ALL_PRODUCTS)
    // const [getProducts, { loading, data }] = useLazyQuery(GET_ALL_PRODUCTS)



    const [titleName, setTitleName] = useState<string>(name)
    const [slugName, setSlugName] = useState<string>(slug)

    const windowRef = useRef()

    const handleChangeTitleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value)
        setSlugName(getSlug(e.target.value))
    }
    const handleChangeSlugName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlugName(e.target.value)
    }

    const handleCloseWindow = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }

    const productFieldsNull = () => {
        setTitleName(null)
        setSlugName(null)
    }

    const handleClickCreateProduct = () => {
        if (modeWindow == AdminWindowMode.Create) {
            create({
                name: titleName,
                slug: slugName,
                product_id: productName ? +products.find((item) => item.name === productName).id : null
            })
            productFieldsNull()
        }
        if (modeWindow == AdminWindowMode.Update) {
            update({
                name: titleName,
                slug: slugName,
                product_id: productName ? +products.find((item) => item.name === productName).id : null
                // product_id: 55
            })
        }

        closeWindow()
    }

    useEffect(() => {
        setTitleName(name)
    }, [name])

    useEffect(() => {
        setSlugName(slug)
    }, [slug])

    useEffect(() => {
        setProductName(initProductName)
    }, [initProductName])



    useEffect(() => {
        setProducts(data?.getAllProducts)
    }, [data])

    // console.log('nameee', name);
    // console.log('slugggg', slug);

    const handleChangeProduct = (e) => {
        setProductName(e.target.value)
    }


    console.log('initProductNameinitProductName', initProductName);


    return (
        <>
            <div className={s.background} onMouseDown={handleCloseWindow} ref={windowRef}>
                <div className={s.window}>
                    <div className={s.LabelEdit}>
                        <span className={s.title}>{typeSection == AdminSectionType.Section ? 'Имя секции' : 'Имя элемента'}</span>
                        <input className={!titleName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeTitleName} value={titleName} />
                    </div>

                    <div className={s.LabelEdit}>
                        <span className={s.title}>Имя слага</span>
                        <input className={!setSlugName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeSlugName} value={slugName} />
                    </div>

                    <div className={s.useProduct}>
                        <div>Продукт</div>
                        {
                            <select className={s.checkBoxProducts} onChange={(e) => handleChangeProduct(e)} value={productName} >
                                <option></option>
                                {
                                    products?.map((product, index) => <option key={index} >{product.name}</option>)
                                }
                            </select>
                        }
                    </div>



                    <div className={s.buttons}>
                        <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleClickCreateProduct}>{modeWindow == AdminWindowMode.Create ? 'Создать' : 'Редактировать'} {typeSection == AdminSectionType.Section ? 'секцию' : 'элемент'}</ButtonAdmin>
                        <div className={s.btnClose} onClick={closeWindow}>
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => closeWindow()}>Закрыть</ButtonAdmin>
                        </div>
                    </div>
                    <div className={s.close} onMouseDown={closeWindow}></div>
                </div>
            </div>
        </>
    );
};

export default WindowCreateNameSlug;
