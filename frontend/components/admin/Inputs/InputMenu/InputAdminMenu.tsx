import React, { FC, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import s from "./InputAdminMenu.module.scss";

interface InputAdminMenuProps {
  inputActive: boolean;
  inputRef?: any;
  initTitle?: string;
  inputConfirm: () => void;
}

const InputAdminMenu: FC<InputAdminMenuProps> = ({
  inputActive,
  inputRef,
  initTitle,
  inputConfirm,
}) => {
  const validate = () => {
    if(inputRef.current.value != '') inputConfirm()
  }
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') validate()
  }

  useEffect(() => {
    inputRef.current.value = initTitle;
  }, [inputActive]);
  return (
    <div className={inputActive ? s.edit + " " + s.active : s.edit}>
      <input ref={inputRef} type="text" onKeyDown={handleKeyDown} />
      <div className={s.btn} onClick={validate}>
        <AiOutlineCheck size={20} />
      </div>
    </div>
  );
};

export default InputAdminMenu;
