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

    const [sectionName, setSectionName] = useState<string>(null)
    const [slagName, setSlagName] = useState<string>(null)

    const windowRef = useRef()

    const handleChangeSectionName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSectionName(e.target.value)
    }
    const handleChangeSlagName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlagName(e.target.value)
    }

    const handleCloseWindow = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }

    const productFieldsNull = () => {
        setSectionName(null)
        setSlagName(null)
    }

    const handleClickCreateProduct = () => {
        createNameSlug({
            name: sectionName,
            slug: slagName
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
                            <span className={s.title}>Имя секции</span>
                            <input className={!sectionName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeSectionName} />
                        </div>

                        <div className={s.LabelEdit}>
                            <span className={s.title}>Имя слага</span>
                            <input className={!setSlagName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeSlagName} />
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
