import React, { FC, useEffect, useRef, useState } from "react";
import { AdminBlockType } from "../../../enums/AdminBlock.enum";
// import { URL } from "url";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { AdminWindowMode } from "../../../enums/Mode.enum";
import { ICreateBlockTextInput } from "../../../interfaces/section.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateBlock.module.scss";

const BlockTypeArr = [
    'Блок текстовый',
    'Блок изображений'
]

let getSlug = require('speakingurl');

interface WindowCreateBlockProps {
    visible: boolean
    modeWindow?: AdminWindowMode //Create, Update, Delete
    name?: string
    slug?: string
    textValue?: string
    typeBlock: AdminBlockType //Text, Image
    createBlockText?: (createInput: ICreateBlockTextInput) => void
    updateBlockText?: (updateInput: ICreateBlockTextInput) => void
    createBlockImg?: (formData: any) => void
    closeWindow: () => void
}

const WindowCreateBlock: FC<WindowCreateBlockProps> = ({ visible, modeWindow, name, slug, textValue, typeBlock, createBlockText, updateBlockText, createBlockImg, closeWindow }) => {

    const [titleName, setTitleName] = useState<string>(name)
    const [slugName, setSlugName] = useState<string>(slug)
    const [blockType, setblockType] = useState<string>(BlockTypeArr[typeBlock])
    const [text, setText] = useState<string>(textValue)
    const [file, setFile] = useState(null)
    const [fileDataURL, setFileDataURL] = useState(null)

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
                    console.log('creaate');
                    
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


    console.log('textValue', textValue);

    return (
        <>
            {
                visible &&
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
                                    <span className={s.title}>Текст</span>
                                    <textarea className={s.description} rows={8} cols={50} onChange={handleChangeBlockText}>{textValue}</textarea>
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
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleClickCreateBlock}>{modeWindow==AdminWindowMode.Create?'Создать':'Редактировать'} блок</ButtonAdmin>
                            <div className={s.btnClose} onClick={closeWindow}>
                                <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => closeWindow()}>Закрыть</ButtonAdmin>
                            </div>
                        </div>

                        <div className={s.close} onMouseDown={closeWindow}></div>
                    </div>
                </div>
            }
        </>
    );
};

export default WindowCreateBlock;
