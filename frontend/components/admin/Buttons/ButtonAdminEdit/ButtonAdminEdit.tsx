import React, { Dispatch, FC, MutableRefObject, SetStateAction } from "react";
import { RiEdit2Line } from 'react-icons/ri';

import s from "./ButtonAdminEdit.module.scss";

interface ButtonAdminEditProps {
  editActive: boolean
  setEditActive: Dispatch<SetStateAction<boolean>>
  URef?: any

}

const ButtonAdminEdit: FC<ButtonAdminEditProps> = ({ editActive, setEditActive, URef }) => {
  async function handleButtonClick() {
    await setEditActive(prev => !prev)
    if (URef.current) {URef.current.focus()}
  }
  return (
    <div className={editActive ? (s.button + ' ' + s.active): s.button} onClick={handleButtonClick}>
        <RiEdit2Line size={17}/>
    </div>
  );
};

export default ButtonAdminEdit;
