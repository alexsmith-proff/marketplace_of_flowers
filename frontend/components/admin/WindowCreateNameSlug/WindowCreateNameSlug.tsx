import React, { FC, useRef, useState } from "react";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { AdminSectionType } from "../../../enums/AdminSections.enum";
import { ICreateNameSlugInput } from "../../../interfaces/section.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateNameSlug.module.scss";

interface WindowCreateNameSlugProps {
    visible: boolean
    type: AdminSectionType
    createNameSlug: (createProductInput: ICreateNameSlugInput) => void
    closeWindow: () => void
}

const WindowCreateNameSlug: FC<WindowCreateNameSlugProps> = ({ visible, type, createNameSlug, closeWindow }) => {

    const [titleName, setTitleName] = useState<string>(null)
    const [slugName, setSlugName] = useState<string>(null)

    const windowRef = useRef()

    const handleChangeTitleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value)
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
        createNameSlug({
            name: titleName,
            slug: slugName
        })

        productFieldsNull()
        closeWindow()
    }

    return (
        <>
            {
                visible &&
                <div className={s.background} onClick={handleCloseWindow} ref={windowRef}>
                    <div className={s.window}>
                        <div className={s.LabelEdit}>
                            <span className={s.title}>{type == AdminSectionType.Section ? 'Имя секции' : 'Имя элемента'}</span>
                            <input className={!titleName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeTitleName} />
                        </div>

                        <div className={s.LabelEdit}>
                            <span className={s.title}>Имя слага</span>
                            <input className={!setSlugName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeSlugName} />
                        </div>

                        

                        <div className={s.buttons}>
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleClickCreateProduct}>{type == AdminSectionType.Section ? 'Создать секцию' : 'Создать элемент'}</ButtonAdmin>
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

export default WindowCreateNameSlug;
