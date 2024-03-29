import React, { FC, Dispatch, SetStateAction } from "react";
import {
  AdminButtonFunctional,
  AdminButtonType,
} from "../../../../enums/AdminButtons.enum";
import { IconContext } from "react-icons";

import s from "./ButtonAdmin.module.scss";

interface ButtonAdminProps {
  typeBtn?: AdminButtonType;
  functionalBtn?: AdminButtonFunctional;
  enabled?: boolean
  border?: boolean
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
  typeBtn = AdminButtonType.Text,
  functionalBtn = AdminButtonFunctional.Standard,
  enabled = true,
  border = true,
  editVisible,
  setEditActive,
  URef,
  confirm,
  confirmTitle,
  clickBtn = () => null,
  ico,
  sizeIco,
  children,
}) => {
  async function handleButtonClick() {
    if (enabled) {
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
  }

  return (
    <>
      {typeBtn == AdminButtonType.Text && (
        <div className={s.buttonText + ' ' + s.buttonBgrn + (border ? ' ' + s.border : '')} onClick={handleButtonClick}>
          {children}
        </div>
      )}
      {typeBtn == AdminButtonType.Toggle && (
        <div className={s.buttonText + ' ' + s.toggle + (border ? ' ' + s.border : '')} onClick={handleButtonClick}>
          {children}
        </div>
      )}
      {typeBtn == AdminButtonType.Ico && (
        <div
          className={(editVisible ? s.buttonIco + ' ' + s.active : s.buttonIco) + (border ? ' ' + s.border : '') + (enabled ? '' : ' ' + s.disabled)}
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
