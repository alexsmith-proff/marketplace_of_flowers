import { useMutation } from "@apollo/client";
import axios from "axios";
import { appendFile } from "fs/promises";
import React, { FC, useEffect, useRef, useState } from "react";
// import { URL } from "url";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { ICreateBlockImgInput, ICreateBlockTextInput, ICreateNameSlugInput } from "../../../interfaces/section.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateBlock.module.scss";

const BlockTypeArr = [
    'Блок текстовый',
    'Блок изображений'
]

interface WindowCreateBlockProps {
    visible: boolean
    createBlockText?: (createInput: ICreateBlockTextInput) => void
    createBlockImg?: (createInput: ICreateBlockImgInput) => void
    closeWindow: () => void
}

const WindowCreateBlock: FC<WindowCreateBlockProps> = ({ visible, createBlockText, createBlockImg, closeWindow }) => {

    const [titleName, setTitleName] = useState<string>(null)
    const [slugName, setSlugName] = useState<string>(null)
    const [blockType, setblockType] = useState<string>(BlockTypeArr[0])
    const [text, setText] = useState<string>(null)
    const [ffile, setFile] = useState<File>(null)
    const [fileDataURL, setFileDataURL] = useState(null)

    const windowRef = useRef()


    const handleChangeTitleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value)
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


    const handleClickCreateBlock = async() => {
        console.log('kkkkkkkkkkkkkkkkkkkkk');
        
        // Блок текстовый',
        if (blockType == BlockTypeArr[0]) {
            createBlockText({
                name: titleName,
                slug: slugName,
                text: text
            })
        }
        //Блок изображений
        if(blockType == BlockTypeArr[1]){
            let formdata = new FormData()
            formdata.append('file', ffile)
            
            
            
            axios({
                url: 'http://localhost:5000/api/imgelement/createfile',
                method: "POST",
                data: formdata
            }).then((res)=>{})
            
            // createBlockImg({})
            console.log('sdsdasdasdassa');
            
        }

        blockFieldsNull()
        closeWindow()
    }

    // useEffect(() => {
    //     if (files) {
    //         const fileReader = new FileReader()
    //         fileReader.onload = (e) => {
    //             setFileDataURL(e.target.result)
    //         }
    //         fileReader.readAsDataURL(files[0])
    //     }

    // }, [files])

    return (
        <>
            {
                visible &&
                <div className={s.background} onClick={handleCloseWindow} ref={windowRef}>
                    <div className={s.window}>
                        <div className={s.LabelEdit}>
                            <span className={s.title}>Имя блока</span>
                            <input className={!titleName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeTitleName} />
                        </div>

                        <div className={s.LabelEdit}>
                            <span className={s.title}>Имя слага</span>
                            <input className={!setSlugName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeSlugName} />
                        </div>



                        <div className={s.LabelEdit}>
                            <span className={s.title}>Тип блока</span>
                            <div className={s.dropdown} data-itemChart="1">
                                <select name="one" className={s.dropdownSelect} onChange={handleChangeBlockType} >
                                    {
                                        BlockTypeArr &&
                                        <>
                                            {
                                                BlockTypeArr.map((item, index) => <option key={index}>{item}</option>)
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
                                    <textarea className={s.description} rows={8} cols={50} onChange={handleChangeBlockText}></textarea>
                                </div>
                            )
                        }

                        {
                            // Блок изображений
                            blockType == BlockTypeArr[1] && (
                                <div className={s.LabelEdit}>
                                    <span className={s.title}>Изображения</span>
                                    <input type="file" multiple accept="image/*" onChange={handleChangeBlockFile} />
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
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleClickCreateBlock}>Создать блок</ButtonAdmin>
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

export default WindowCreateBlock;
