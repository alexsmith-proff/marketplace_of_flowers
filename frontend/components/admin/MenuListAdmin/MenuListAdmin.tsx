import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import s from "./MenuListAdmin.module.scss";

interface MenuListAdminProps {
  title: string,
  menuItems: any[];
}

const MenuListAdmin = ({ title, menuItems }: MenuListAdminProps) => {
  const [deleteBtnEnable, stDeleteBtnEnable] = useState<boolean>(false);
  
  return (
    <div className={s.menuList}>
      <div className={s.topSection}>
        <div className={s.title}>{title}</div>
        <div className={s.icons}>
          <div className={s.createBtn}>
            <BiAddToQueue size={20} />
          </div>
          <div
            className={
              deleteBtnEnable ? s.deleteBtn : s.deleteBtn + " " + s.disabled
            }
          >
            <MdDeleteOutline size={20} />
          </div>
        </div>
      </div>
      <ul className={s.list}>
        {menuItems && menuItems.map((item, index) => (
          <li className={s.item} key={item.id}>
            {item.name}
            <div className={s.hasChildren}>
              <AiOutlineRight />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuListAdmin;
