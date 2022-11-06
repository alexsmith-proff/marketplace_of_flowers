import { gql } from "@apollo/client"

export const GET_ROOT_CATALOG = gql`
  query GetCatalogByParent($findCatalogInput: FindCatalogInput!) {
    getCatalogByParent(findCatalogInput: $findCatalogInput) {
        id
        name
        children{
            id
            name
        }      
    }
  }
`;

export const CREATE_CATALOG_NAME = gql`
mutation CreateCatalog($createCatalogInput: CreateCatalogInput!) {
  createCatalog(createCatalogInput: $createCatalogInput) {
        id
        name 
    }
  }
`;

export const UPDATE_CATALOG_NAME = gql`
mutation UpdateCatalog($updateCatalogInput: UpdateCatalogInput!) {
  updateCatalog(updateCatalogInput: $updateCatalogInput) {
        id
        name    
    }
  }
`;

export const DELETE_CATALOG_NAME = gql`
mutation DeleteCatalog($id: Int!) {
  removeCatalog(id: $id) {
        id
        name    
    }
  }
`;


