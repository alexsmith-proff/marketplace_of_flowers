import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

import {
  GET_MENU_BY_ID,
  CREATE_MENU_ITEM_NAME,
  UPDATE_MENU_ITEM_NAME,
  DELETE_MENU_ITEM_NAME,
} from "../../../graphql/menu.graphql";
import { IMenuItem } from "../../../interfaces/menu.interface";
import MenuListAdmin from "../MenuListAdmin/MenuListAdmin";

import s from "./MenuItemListAdmin.module.scss";

interface MenuItemListAdminProps {
  title: string;
  menuId: number;
}

const MenuItemListAdmin = ({ title, menuId }: MenuItemListAdminProps) => {
  const MenuItems = useQuery(GET_MENU_BY_ID, {
    variables: {
      id: +menuId,
    },
  });
  const [createMenuItemName, dataCreateMenuItemName] = useMutation(
    CREATE_MENU_ITEM_NAME
  );
  const [updateMenuItemName, dataUpdateMenuItemName] = useMutation(
    UPDATE_MENU_ITEM_NAME
  );
  const [deleteMenuItemName, dataDeleteMenuItemName] = useMutation(
    DELETE_MENU_ITEM_NAME
  );

  const [menuItemArr, setMenuItemArr] = useState<IMenuItem[]>(null);
  // const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(null);

  const handleEditUpdateMenuItemName = (
    currentIndexMenu: number,
    name: string
  ) => {
    console.log("currentIndexMenu", currentIndexMenu);
    console.log("name", name);

    updateMenuItemName({
      variables: {
        updateMenuItemInput: {
          id: +menuItemArr[currentIndexMenu].id,
          // name: editUpdateMenuItemRef.current.value,
          name: name,
        },
      },
    });
  };
  const handleEditCreateMenuItemName = (name: string) => {
    createMenuItemName({
      variables: {
        createMenuItemInput: {
          // name: editCreateMenuItemRef.current.value,
          name: name,
          menu_id: +menuId,
        },
      },
      refetchQueries: [
        {
          query: GET_MENU_BY_ID,
          variables: {
            id: +menuId,
          },
        },
      ],
    });
  };
  const handleDeleteMenuItemName = (currentIndexMenu: number) => {
    if (currentIndexMenu != null) {
      deleteMenuItemName({
        variables: {
          id: +menuItemArr[currentIndexMenu].id,
        },
        refetchQueries: [
          {
            query: GET_MENU_BY_ID,
            variables: {
              id: +menuId,
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    console.log("MenuItems", MenuItems);
    if (MenuItems.data) {
      setMenuItemArr(MenuItems.data.getMenuByID.item);
    }
  }, [MenuItems]);

  return (
    <>
      <MenuListAdmin
        title={title}
        itemArr={menuItemArr}
        visible={true}
        createItemName={handleEditCreateMenuItemName}
        updateItemName={handleEditUpdateMenuItemName}
        deleteItemName={handleDeleteMenuItemName}
      />
    </>
  );
};

export default MenuItemListAdmin;
