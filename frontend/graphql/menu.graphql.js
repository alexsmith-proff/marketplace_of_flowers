import { gql } from "@apollo/client"

export const CREATE_MENU = gql`
mutation CreateMenu($name: String!) {
    createBook(name: $name) {
        id
        name
    }
}
`

export const UPDATE_MENU = gql`
mutation UpdateMenu($updateMenuInput: updateMenuInput!) {
  updateMenu(updateMenuInput: $updateMenuInput) {
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


