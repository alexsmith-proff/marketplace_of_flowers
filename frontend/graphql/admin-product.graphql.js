import { gql } from "@apollo/client"

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts{
        id
        name
        price
        vendor_code
        count_in_stock
        brand{
          id
          name
        } 
        catalog{
          id
          name
        }   
      }
  }
`;


export const CREATE_PRODUCT = gql`
  mutation CreateProduct($createProductInput: CreateProductInput!){
    createProduct(createProductInput: $createProductInput){
      id
      name
    }
  }
`;



