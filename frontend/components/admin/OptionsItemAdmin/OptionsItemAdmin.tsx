import React, { FC, useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import s from "./OptionsItemAdmin.module.scss";

interface OptionsItemAdminProps {
    label: string
    textInputInit: string
    inputShort?: boolean
    inputConfirm: (data: string) => void
}

const OptionsItemAdmin: FC<OptionsItemAdminProps> = ({ label, textInputInit, inputShort = false, inputConfirm }) => {
    const inputRef = useRef(null)
    const [inputBtnActive, setInputBtnActive] = useState<boolean>(false)

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') setInputBtnActive(false)
        else {
            setInputBtnActive(true)
        }
    }
    const handleClickInputBtn = () => {
        setInputBtnActive(false)
        inputConfirm(inputRef.current.value)
    }

    useEffect(() => {
        inputRef.current.value = textInputInit
    }, [])
    return (
        <div className={s.item}>
            <div className={s.title}>{label}</div>
            <div className={inputShort ? (s.input + ' ' + s.shortInput) : s.input}>
                <input type="text" ref={inputRef} onChange={handleChangeInput} />
                {
                    inputBtnActive &&
                    <div className={s.inputBtn} onClick={handleClickInputBtn}>
                        <AiOutlineCheck size={18} />
                    </div>
                }
            </div>
        </div>
    );
};

export default OptionsItemAdmin;
