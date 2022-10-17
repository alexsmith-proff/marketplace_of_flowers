import { gql } from "@apollo/client"

export const CREATE_MENU = gql`
mutation CreateBook($input: NewBook!) {
    createBook(input: $input) {
        id
        title
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
  }
}
`


