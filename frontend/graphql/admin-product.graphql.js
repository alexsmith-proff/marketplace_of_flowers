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
        createdAt  
        updatedAt 
      }
  }
`;

export const GET_ALL_PRODUCTS_BY_SORT = gql`
  query GetAllProductsBySort($sortProductInput: SortProductInput!) {
    getAllProductsBySort(sortProductInput: $sortProductInput){
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
        createdAt  
        updatedAt
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

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($updateProductInput: UpdateProductInput!){
    updateProduct(updateProductInput: $updateProductInput){
      id
      name
    }
  }
`;

export const UPDATE_RELATIONS_PRODUCT = gql`
  mutation UpdateRelationsProduct($updateProductRelationsInput: UpdateProductRelationsInput!){
    updateProductRelations(updateProductRelationsInput: $updateProductRelationsInput){
      id
      name
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!){
    removeProduct(id: $id){
      id
      name
    }
  }
`;





