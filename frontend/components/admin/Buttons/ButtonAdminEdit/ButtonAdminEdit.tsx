import React, { FC } from "react";
import { RiEdit2Line } from 'react-icons/ri';

import s from "./ButtonAdminEdit.module.scss";

interface ButtonAdminEditProps {}

const ButtonAdminEdit: FC<ButtonAdminEditProps> = ({  }) => {
  return (
    <div className={s.button}>
        <RiEdit2Line size={13}/>
    </div>
  );
};

export default ButtonAdminEdit;
