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
  border: boolean
  editVisible?: boolean;
  setEditActive?: Dispatch<SetStateAction<boolean>>;
  URef?: any;
  confirm?: boolean;
  confirmTitle?: string;
  clickBtn?: () => void;
  ico?: any;
  sizeIco?: number
  children?: React.ReactNode;
}

const ButtonAdmin: FC<ButtonAdminProps> = ({
  typeBtn,
  functionalBtn,
  border,
  editVisible,
  setEditActive,
  URef,
  confirm,
  confirmTitle,
  clickBtn,
  ico,
  sizeIco,
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
        <div className={s.buttonText + border ? ' ' + s.border : ''} onClick={handleButtonClick}>
          {children}
        </div>
      )}
      {typeBtn == AdminButtonType.Ico && (
        <div
          className={(editVisible ? s.buttonIco + ' ' + s.active : s.buttonIco) + (border ? ' ' + s.border : '')}
          onClick={handleButtonClick}
        >
          <IconContext.Provider value={{ size: String(sizeIco) }}>
            <div>{ico}</div>
          </IconContext.Provider>
        </div>
      )}
    </>
  );
};

export default ButtonAdmin;
