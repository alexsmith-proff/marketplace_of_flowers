import React, { FC } from "react";

import s from "./ButtonAdmin.module.scss";

interface ButtonAdminProps {
    children: React.ReactNode
}

const ButtonAdmin: FC<ButtonAdminProps> = ({ children }) => {
  return (
    <div className={s.button}>
        {children}
    </div>
  );
};

export default ButtonAdmin;
