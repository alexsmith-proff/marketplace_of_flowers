import React, { FC, useEffect } from "react";

import s from "./InputAdminMenu.module.scss";

interface InputAdminMenuProps {
  inputActive: boolean
  inputRef?: any
  initTitle?: string

}

const InputAdminMenu: FC<InputAdminMenuProps> = ({ inputActive, inputRef, initTitle }) => {
  console.log('inputRef', inputRef);
  
  const handleEditChange = (e) => {
    console.log(inputRef.current.value);
  }
  useEffect(() => {
    inputRef.current.value = initTitle
  }, [inputActive])
  return (
    <div>
      <input className={inputActive ? (s.edit + ' ' + s.active) : s.edit} ref={inputRef} type="text" onChange={handleEditChange} />
    </div>
  );
};

export default InputAdminMenu;