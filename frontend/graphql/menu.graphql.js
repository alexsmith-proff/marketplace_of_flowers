import { gql } from "@apollo/client";

export const CREATE_MENU_NAME = gql`
  mutation CreateMenu($createMenuInput: CreateMenuInput!) {
    createMenu(createMenuInput: $createMenuInput) {
      id
      name
    }
  }
`;

export const UPDATE_MENU_NAME = gql`
  mutation UpdateMenu($updateMenuInput: UpdateMenuInput!) {
    updateMenu(updateMenuInput: $updateMenuInput) {
      id
      name
    }
  }
`;

export const DELETE_MENU_NAME = gql`
  mutation RemoveMenu($id: Int!) {
    removeMenu(id: $id) {
      id
      name
    }
  }
`;

export const GET_ALL_MENU = gql`
  query GetAllMenu {
    getAllMenus {
      id
      name
      slug
      items {
        id
        name
        serial_number
        slug
        link
        submenuitems {
          id
          name
          serial_number
          slug
          link
          submenuitems {
            id
            name
            serial_number
            slug
            link
          }
        }
      }
    }
  }
`;


export const GET_MENU_BY_SLUG = gql`
  query GetMenuBySlug($slug: String!) {
    getMenuBySlug(slug: $slug) {
      id
      name
      slug
      items {
        id
        name
        serial_number
        slug
        link
        submenuitems {
          id
          name
          serial_number
          slug
          link
          submenuitems {
            id
            name
            serial_number
            slug
            link
          }
        }
      }
    }
  }
`;


export const GET_MENU_BY_ID = gql`
  query GetMenuByID($id: Int!) {
    getMenuByID(id: $id) {
      id
      name
      slug
      items {
        id
        name
        serial_number
        slug
        link
        submenuitems {
          id
          name
          serial_number
          slug
          link
        }
      }
    }
  }
`;

export const CREATE_MENU_ITEM_NAME = gql`
  mutation CreateMenuItem($createMenuItemInput: CreateMenuItemInput!) {
    createMenuItem(createMenuItemInput: $createMenuItemInput) {
      id
      name
      serial_number
      link
      slug
    }
  }
`;

export const UPDATE_MENU_ITEM_NAME = gql`
  mutation UpdateMenuItem($updateMenuItemInput: UpdateMenuItemInput!) {
    updateMenuItem(updateMenuItemInput: $updateMenuItemInput) {
      id
      name
      serial_number
      link
      slug
    }
  }
`;

export const DELETE_MENU_ITEM_NAME = gql`
  mutation RemoveMenuItem($id: Int!) {
    removeMenuItem(id: $id) {
      id
      name
    }
  }
`;

export const CREATE_SUBMENU_ITEM_NAME = gql`
  mutation CreateSubmenuItem($createSubmenuItemInput: CreateSubmenuItemInput!) {
    createSubmenuItem(createSubmenuItemInput: $createSubmenuItemInput) {
      id
      name
      serial_number
      link
      slug
    }
  }
`;

export const UPDATE_SUBMENU_ITEM_NAME = gql`
  mutation UpdateSubmenuItem($updateSubmenuItemInput: UpdateSubmenuItemInput!) {
    updateSubmenuItem(updateSubmenuItemInput: $updateSubmenuItemInput) {
      id
      name
      serial_number
      link
      slug
    }
  }
`;

export const DELETE_SUBMENU_ITEM_NAME = gql`
  mutation RemoveSubmenuItem($id: Int!) {
    removeSubmenuItem(id: $id) {
      id
      name
    }
  }
`;

export const CREATE_SUBMENU_ITEM_TWO_NAME = gql`
  mutation CreateSubmenuItemTwo($createSubmenuItemTwoInput: CreateSubmenuItemTwoInput!) {
    createSubmenuItemTwo(createSubmenuItemTwoInput: $createSubmenuItemTwoInput) {
      id
      name
      serial_number
      link
      slug
    }
  }
`;

export const UPDATE_SUBMENU_ITEM_TWO_NAME = gql`
  mutation UpdateSubmenuItemTwo($updateSubmenuItemTwoInput: UpdateSubmenuItemTwoInput!) {
    updateSubmenuItemTwo(updateSubmenuItemTwoInput: $updateSubmenuItemTwoInput) {
      id
      name
      serial_number
      link
      slug
    }
  }
`;

export const DELETE_SUBMENU_ITEM_TWO_NAME = gql`
  mutation RemoveSubmenuItemTwo($id: Int!) {
    removeSubmenuItemTwo(id: $id) {
      id
      name
    }
  }
`;
