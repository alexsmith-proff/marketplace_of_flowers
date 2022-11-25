import React, { FC, useEffect, useRef, useState } from "react";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import { AdminSectionType } from "../../../enums/AdminSections.enum";
import { AdminWindowMode } from "../../../enums/Mode.enum";
import { INameSlugInput } from "../../../interfaces/section.interface";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateNameSlug.module.scss";

interface WindowCreateNameSlugProps {
    visible: boolean
    modeWindow: AdminWindowMode
    typeSection: AdminSectionType
    name?: string
    slug?: string
    createNameSlug?: (createProductInput: INameSlugInput) => void
    updateNameSlug?: (updateProductInput: INameSlugInput) => void
    closeWindow: () => void
}

const WindowCreateNameSlug: FC<WindowCreateNameSlugProps> = ({ visible, modeWindow, typeSection, name, slug, createNameSlug, updateNameSlug, closeWindow }) => {

    const [titleName, setTitleName] = useState<string>(name)
    const [slugName, setSlugName] = useState<string>(slug)

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
        if(modeWindow == AdminWindowMode.Create) {
            createNameSlug({
                name: titleName,
                slug: slugName
            })
            productFieldsNull()
        }
        if(modeWindow == AdminWindowMode.Update) {
            updateNameSlug({
                name: titleName,
                slug: slugName
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

    // console.log('nameee', name);
    // console.log('slugggg', slug);
    

    return (
        <>
            {
                visible &&
                <div className={s.background} onClick={handleCloseWindow} ref={windowRef}>
                    <div className={s.window}>
                        <div className={s.LabelEdit}>
                            <span className={s.title}>{typeSection == AdminSectionType.Section ? 'Имя секции' : 'Имя элемента'}</span>
                            <input className={!titleName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeTitleName} value={titleName} />
                        </div>

                        <div className={s.LabelEdit}>
                            <span className={s.title}>Имя слага</span>
                            <input className={!setSlugName ? (s.nameInput + ' ' + s.error) : s.nameInput} type="text" onChange={handleChangeSlugName} value={slugName} />
                        </div>

                        

                        <div className={s.buttons}>
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleClickCreateProduct}>{modeWindow == AdminWindowMode.Create ? 'Создать' : 'Редактировать'} {typeSection == AdminSectionType.Section ? 'секцию' : 'элемент'}</ButtonAdmin>
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
