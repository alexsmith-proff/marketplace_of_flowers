import React, { FC, useRef, useState } from "react";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { ICreateNameSlugInput } from "../../../interfaces/section.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateBlock.module.scss";

const BlockTypeArr = [
    'Блок текстовый',
    'Блок изображений'
]

interface WindowCreateBlockProps {
    visible: boolean
    createBlockText: (createInput: ICreateNameSlugInput) => void
    closeWindow: () => void
}

const WindowCreateBlock: FC<WindowCreateBlockProps> = ({ visible, createBlockText, closeWindow }) => {

    const [titleName, setTitleName] = useState<string>(null)
    const [slugName, setSlugName] = useState<string>(null)

    const windowRef = useRef()

    const handleChangeTitleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value)
    }
    const handleChangeSlugName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlugName(e.target.value)
    }
    const handleChangeBlockType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // const brand = brandsArr.find((item) => item.name == e.target.value)
        // setProductBrand(brand)
    }

    const handleCloseWindow = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }

    const blockFieldsNull = () => {
        setTitleName(null)
        setSlugName(null)
    }


    const handleClickCreateBlock = () => {
        // createNameSlug({
        //     name: sectionName,
        //     slug: slugName
        // })
        blockFieldsNull()
        closeWindow()
    }

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
                                <span className={s.title}>Бренд</span>
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
