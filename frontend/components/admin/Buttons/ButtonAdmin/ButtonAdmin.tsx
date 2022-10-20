import React, { FC, Dispatch, SetStateAction } from "react";
import {
  AdminButtonFunctional,
  AdminButtonType,
} from "../../../../enums/AdminButtons.enum";
import { IconContext } from "react-icons";

import s from "./ButtonAdmin.module.scss";

interface ButtonAdminProps {
  typeBtn: AdminButtonType;
  functionalBtn: AdminButtonFunctional;
  editVisible?: boolean;
  setEditActive?: Dispatch<SetStateAction<boolean>>;
  URef?: any;
  confirm?: boolean;
  confirmTitle?: string;
  clickBtn?: () => void;
  Ico?: any;
  children?: React.ReactNode;
}

const ButtonAdmin: FC<ButtonAdminProps> = ({
  typeBtn,
  functionalBtn,
  editVisible,
  setEditActive,
  URef,
  confirm,
  confirmTitle,
  clickBtn,
  Ico,
  children,
}) => {
  async function handleButtonClick() {
    if (functionalBtn == AdminButtonFunctional.Standard) {
      // popup confirm
      clickBtn()
    }
    if (functionalBtn == AdminButtonFunctional.ToggleVisibleEdit) {
      if (typeBtn == AdminButtonType.Text) {
        await setEditActive(true);
      }
      if (typeBtn == AdminButtonType.Ico) {
        await setEditActive((prev) => !prev);
      }
      if (URef.current) {
        URef.current.focus();
      }
    }
  }

  return (
    <>
      {typeBtn == AdminButtonType.Text && (
        <div className={s.buttonText} onClick={handleButtonClick}>
          {children}
        </div>
      )}
      {typeBtn == AdminButtonType.Ico && (
        <div
          className={editVisible ? s.buttonIco + " " + s.active : s.buttonIco}
          onClick={handleButtonClick}
        >
          <IconContext.Provider value={{ size: "22px" }}>
            <div>{Ico}</div>
          </IconContext.Provider>
        </div>
      )}
    </>
  );
};

export default ButtonAdmin;
