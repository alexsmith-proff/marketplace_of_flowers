import { gql } from "@apollo/client"

export const CREATE_MENU_NAME = gql`
mutation CreateMenu($createMenuInput: CreateMenuInput!) {
  createMenu(createMenuInput: $createMenuInput) {
        id
        name
    }
}
`

export const UPDATE_MENU_NAME = gql`
mutation UpdateMenu($updateMenuInput: UpdateMenuInput!) {
  updateMenu(updateMenuInput: $updateMenuInput) {
        id
        name
    }
}
`

export const DELETE_MENU_NAME = gql`
mutation RemoveMenu($id: Int!) {
  removeMenu(id: $id) {
        id
        name
    }
}
`

export const GET_ALL_MENU = gql`
query GetAllMenu {
    getAllMenus {
      id
      name
  }
}
`

export const GET_MENU_BY_ID = gql`
query GetMenuByID($id: Int!) {
    getMenuByID(id: $id) {
      id
      name
      item{
        id
        name
        link
      }
  }
}
`


export const CREATE_MENU_ITEM_NAME = gql`
mutation CreateMenuItem($createMenuItemInput: CreateMenuItemInput!) {
  createMenuItem(createMenuItemInput: $createMenuItemInput) {
        id
        name
    }
}
`

export const UPDATE_MENU_ITEM_NAME = gql`
mutation UpdateMenuItem($updateMenuItemInput: UpdateMenuItemInput!) {
  updateMenuItem(updateMenuItemInput: $updateMenuItemInput) {
        id
        name
    }
}
`

export const DELETE_MENU_ITEM_NAME = gql`
mutation RemoveMenuItem($id: Int!) {
  removeMenuItem(id: $id) {
        id
        name
    }
}
`

