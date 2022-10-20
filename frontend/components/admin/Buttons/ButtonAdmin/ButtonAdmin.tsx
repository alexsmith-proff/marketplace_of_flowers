import React, { FC, Dispatch, SetStateAction } from "react";
import { AdminButtonType } from "../../../../enums/AdminButtons.enum";
import { IconContext } from "react-icons";

import s from "./ButtonAdmin.module.scss";

interface ButtonAdminProps {
  typeBtn: AdminButtonType
  editVisible?: boolean
  setEditActive?: Dispatch<SetStateAction<boolean>>
  URef?: any
  Ico?: any
  children?: React.ReactNode
}

const ButtonAdmin: FC<ButtonAdminProps> = ({ typeBtn, editVisible, setEditActive, URef, Ico, children }) => {
  async function handleButtonTextClick() {
    await setEditActive(true)
    if (URef.current) { URef.current.focus() }
  }
  async function handleButtonIcoClick() {
    await setEditActive(prev => !prev)
    if (URef.current) { URef.current.focus() }
  }
  return (
    <>
      {
        typeBtn === AdminButtonType.Text && (
          <div className={s.buttonText} onClick={handleButtonTextClick}>
            {children}
          </div>
        )
      }
      {
        typeBtn === AdminButtonType.Ico && (
          <div className={editVisible ? (s.buttonIco + ' ' + s.active) : s.buttonIco} onClick={handleButtonIcoClick}>
            <IconContext.Provider value={{ size: "22px" }}>
              <div>
                {Ico}
              </div>
            </IconContext.Provider>
          </div>
        )

      }

    </>

  );
};

export default ButtonAdmin;
