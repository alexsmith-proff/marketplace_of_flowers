import { gql } from "@apollo/client"

export const CREATE_MENUNAME = gql`
mutation CreateMenu($createMenuInput: CreateMenuInput!) {
  createMenu(createMenuInput: $createMenuInput) {
        id
        name
    }
}
`

export const UPDATE_MENUNAME = gql`
mutation UpdateMenu($updateMenuInput: UpdateMenuInput!) {
  updateMenu(updateMenuInput: $updateMenuInput) {
        id
        name
    }
}
`

export const DELETE_MENUNAME = gql`
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


