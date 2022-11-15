import React, { FC, useEffect, useRef } from "react";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./WindowCreateProduct.module.scss";

interface WindowCreateProductProps {
    visible: boolean
    closeWindow: () => void
}

const WindowCreateProduct: FC<WindowCreateProductProps> = ({ visible, closeWindow }) => {

    const windowRef = useRef()

    // useEffect(() => {
    //     document.body.addEventListener('click', outsideClick)
    // }, [])

    // const outsideClick = (e) => {
    //     console.log('sdd');        
    // }

    const handleCloseWindow = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }

    return (
        <>
            {
                visible &&
                <div className={s.background} onClick={handleCloseWindow} ref={windowRef}>
                    <div className={s.window}>
                        <div className={s.LabelEdit}>
                            <span className={s.title}>Название товара</span>
                            <input className={s.nameInput} type="text" />
                        </div>
                        <div className={s.secondLevel}>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Артикул</span>
                                <input className={s.vendorInput} type="text" />
                            </div>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Цена</span>
                                <input className={s.priceInput} type="text" />
                            </div>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Кол.-во</span>
                                <input className={s.countInput} type="text" />
                            </div>
                        </div>

                        <div className={s.thirdLevel}>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Бренд</span>
                                <div className={s.dropdown} data-itemChart="1">
                                    <select name="one" className={s.dropdownSelect} onChange={null}>
                                        <option>
                                            Бренд_1
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className={s.LabelEdit}>
                                <span className={s.title}>Категория</span>
                                <div className={s.dropdown} data-itemChart="1">
                                    <select name="one" className={s.dropdownSelect} onChange={null}>
                                        <option>
                                            Категория 1
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={s.LabelEdit}>
                            <span className={s.title}>Описание</span>
                            <textarea className={s.description} rows={8} cols={50}></textarea>
                        </div>



                        <div className={s.buttons}>
                            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => null}>Создать товар</ButtonAdmin>
                            <div className={s.btnClose} onClick={closeWindow}>
                                <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => null}>Закрыть</ButtonAdmin>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default WindowCreateProduct;
