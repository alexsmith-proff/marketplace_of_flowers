import React, { FC } from "react";
import { ICoordinate } from "../../interfaces/coordinate.interface";
import { IPopupMenuItems } from "../../interfaces/popup-menu.intrface";

import s from "./PopupMenu.module.scss";

interface PopupMenuProps {
  menuItems: IPopupMenuItems[]
  coordinate: ICoordinate
  popupRef: any
  clickMenuItem: (index: number) => void
}

const PopupMenu: FC<PopupMenuProps> = ({ menuItems, coordinate,  popupRef, clickMenuItem }) => {
  return (
    <div className={s.menu} style={ {top: coordinate.Y + 'px', left: coordinate.X + 'px'} } ref={popupRef}>
      <ul className={s.menuList}>
        {menuItems.map((item) => (
          <li
          className={s.menuItem}
            key={item.indexItem}
            onClick={() => clickMenuItem(item.indexItem)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopupMenu;
