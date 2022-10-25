import React, { FC, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import s from "./MenuListAdmin.module.scss";

interface OptionsItemAdminProps {
    title: string
}

const OptionsItemAdmin: FC<OptionsItemAdminProps> = ({ title }) => {
    const [inputBtnActive, setInputBtnActive] = useState<boolean>(false)

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') setInputBtnActive(false)
        else setInputBtnActive(true)
        console.log(e.target.value);

    }
    const handleClickInputBtn = () => {
        setInputBtnActive(false)
        console.log('handleClickInputBtn');

    }

    return (
        <div className={s.item}>
            <div className={s.title}>{title}</div>
            <div className={s.input}>
                <input type="text" onChange={handleChangeInput} />
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
