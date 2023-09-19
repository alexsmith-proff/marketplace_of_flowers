import React, { FC, useEffect, useRef, useState } from "react";
import { AdminBlockType } from "../../../enums/AdminBlock.enum";
// import { URL } from "url";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { AdminSectionRadioButtons } from "../../../enums/AdminSections.enum";
import { AdminWindowMode } from "../../../enums/Mode.enum";
import { IAdminProduct } from "../../../interfaces/products.interface";
import { ICreateBlockTextInput, IElement } from "../../../interfaces/section.interface";
import { isJSONString } from "../../../util/helpers/main";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateBlock.module.scss";

const BlockTypeArr = [
    'Блок текстовый',
    'Блок изображений'
]

// Поля, которые надо исключить из объекта product для текстового блока
const productItemsTextExcludeArr = ['__typename', 'id', 'filenames_images', 'main_image', 'filters']

let getSlug = require('speakingurl');

interface WindowCreateBlockProps {
    modeWindow?: AdminWindowMode //Create, Update, Delete
    name?: string
    slug?: string
    textValue?: string
    typeBlock: AdminBlockType //Text, Image
    product: IAdminProduct
    createBlockText?: (createInput: ICreateBlockTextInput) => void
    updateBlockText?: (updateInput: ICreateBlockTextInput) => void
    createBlockImg?: (formData: any) => void
    closeWindow: () => void
}


const WindowCreateBlock: FC<WindowCreateBlockProps> = ({ modeWindow, name, slug, textValue, typeBlock, product, createBlockText, updateBlockText, createBlockImg, closeWindow }) => {

    const [titleName, setTitleName] = useState<string>(name)
    const [slugName, setSlugName] = useState<string>(slug)
    const [blockType, setblockType] = useState<string>(BlockTypeArr[typeBlock])
    const [text, setText] = useState<string>(textValue)
    const [file, setFile] = useState(null)
    const [fileDataURL, setFileDataURL] = useState(null)

    const [radioButtonValue, setRadioButtonValue] = useState(() => {
        if(isJSONString(text)){
            return AdminSectionRadioButtons.Product
        }else{
            return AdminSectionRadioButtons.Text
        }
    })
    const [productKey, setProductKey] = useState<string>(() => {
        if(isJSONString(text)){
            return JSON.parse(text).field
        }else{
            return ''
        }
    })

    const windowRef = useRef()


    const handleChangeTitleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value)
        setSlugName(getSlug(e.target.value))
    }
    const handleChangeSlugName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlugName(e.target.value)
    }
    const handleChangeBlockType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBlockType = BlockTypeArr.find((item) => item == e.target.value)
        setblockType(selectedBlockType)
    }
    const handleChangeBlockText = (e: any) => {
        setText(e.target.value)
    }




    const handleChangeBlockFile = (e: any) => {
        setFile(e.target.files[0])

        // setFiles(e.target.files)
    }




    const handleCloseWindow = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }

    const blockFieldsNull = () => {
        setTitleName(null)
        setSlugName(null)
        setblockType(BlockTypeArr[0])
        setText(null)
    }


    const handleClickCreateBlock = async () => {
        if (titleName && slugName) {
            // Блок текстовый',
            if (blockType == BlockTypeArr[0]) {
                if (modeWindow == AdminWindowMode.Create) {

                    if (!text) return
                    createBlockText({
                        name: titleName,
                        slug: slugName,
                        text: text
                    })
                }
                if (modeWindow == AdminWindowMode.Update) {
                    if (!text) return
                    updateBlockText({
                        name: titleName,
                        slug: slugName,
                        text: text
                    })
                }
            }
            //Блок изображений
            if (blockType == BlockTypeArr[1]) {
                if (!file) return
                let formData = new FormData()
                formData.append('file', file)
                formData.append('name', titleName)
                formData.append('slug', slugName)

                createBlockImg(formData)
            }

            blockFieldsNull()
            closeWindow()
        }
    }

    useEffect(() => {
        setTitleName(name)
        setSlugName(slug)
        setText(textValue)
    }, [name, slug, textValue])

    const handleChangeProductKey = (e) => {
        if (e.target.value) {
            const obj = {
                name: 'product',
                id: product.id,
                field: e.target.value,
                value: product[e.target.value]
            }

            setText(JSON.stringify(obj))
        }
        setProductKey(e.target.value)
    }


    const handleRadioButtonTextClick = () => {
        setRadioButtonValue(AdminSectionRadioButtons.Text)
        setText('')
    }

    const handleRadioButtonProductClick = () => {
        if (productKey) {
            const obj = {
                name: 'product',
                id: product.id,
                field: productKey,
                value: product[productKey]
            }

            setText(JSON.stringify(obj))
        } else
            setText('')

        setRadioButtonValue(AdminSectionRadioButtons.Product)
    }

    return (
        <>
            <div className={s.background} onMouseDown={handleCloseWindow} ref={windowRef}>
                <div className={s.window}>
                    <div className={s.LabelEdit}>
                        <span className={s.title}>Имя блока</span>
                        <input className={!titleName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeTitleName} value={titleName} />
                    </div>

                    <div className={s.LabelEdit}>
                        <span className={s.title}>Имя слага</span>
                        <input className={!setSlugName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeSlugName} value={slugName} />
                    </div>



                    <div className={s.LabelEdit}>
                        <span className={s.title}>Тип блока</span>
                        <div className={s.dropdown} data-itemChart="0">
                            <select name="one" className={s.dropdownSelect} onChange={handleChangeBlockType} >
                                {
                                    BlockTypeArr &&
                                    <>
                                        {
                                            BlockTypeArr.map((item, index, arr) => <option key={index} selected={index == typeBlock ? true : false}>{item}</option>)
                                        }
                                    </>
                                }
                            </select>
                        </div>
                    </div>

                    {
                        // Блок текстовый
                        blockType == BlockTypeArr[0] && (
                            <div className={s.LabelEdit}>
                                {
                                    product ?
                                        <div className={s.radio}>
                                            <label className={s.radioButton}>
                                                <input type="radio" name="block" checked={radioButtonValue === AdminSectionRadioButtons.Text ? true : false} onChange={handleRadioButtonTextClick} />
                                                Текст
                                            </label>
                                            <label className={s.radioButton}>
                                                <input type="radio" name="block" checked={radioButtonValue === AdminSectionRadioButtons.Product ? true : false} onChange={handleRadioButtonProductClick} />
                                                Продукт
                                            </label>
                                            {
                                                radioButtonValue === AdminSectionRadioButtons.Product &&

                                                <select onChange={handleChangeProductKey} value={productKey}>
                                                    <option></option>
                                                    {
                                                        Object.keys(product).filter((item) => !productItemsTextExcludeArr.includes(item)).map((item, index) => <option key={index}>{item}</option>)
                                                    }
                                                </select>
                                            }

                                        </div>
                                        :
                                        <span className={s.title}>Текст</span>
                                }
                                <textarea className={s.description} rows={8} cols={50} disabled={product && radioButtonValue == AdminSectionRadioButtons.Product} value={text} onChange={handleChangeBlockText}></textarea>
                            </div>
                        )
                    }

                    {
                        // Блок изображений
                        blockType == BlockTypeArr[1] && (
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Изображения</span>
                                <input type="file" accept="image/*" onChange={handleChangeBlockFile} />
                                <div className={s.preview}>
                                    {
                                        fileDataURL &&
                                        <>
                                            <img className={s.previewImages} src={fileDataURL} />
                                        </>
                                    }
                                </div>
                            </div>
                        )
                    }

                    <div className={s.buttons}>
                        <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleClickCreateBlock}>{modeWindow == AdminWindowMode.Create ? 'Создать' : 'Редактировать'} блок</ButtonAdmin>
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

export default WindowCreateBlock;
