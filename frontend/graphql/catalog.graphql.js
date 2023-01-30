import { gql } from "@apollo/client"

export const GET_ALL_CATALOG = gql`
  query GetAllCatalog {
    getAllCatalog{
      id
      name
      serial_number
      children{
        id
        name
        serial_number
        children{
          id
      	  name
      	  serial_number
          children{
        		id
      		  name
      		serial_number
	          children{
			        id
			        name
			        serial_number
              children{
				        id
      				  name
      				  serial_number
      				}
    			  }
      		}
       	}
      }
    }
  }
`;

export const GET_ALL_CATALOG_NO_TREE = gql`
  query GetAllCatalogNoTree{
    getAllCatalogNoTree{
      id
      name
    }
  }
`;

export const GET_CATALOG_BY_PARENT_ID = gql`
  query GetCatalogByParent($findCatalogInput: FindCatalogInput!) {
    getCatalogByParent(findCatalogInput: $findCatalogInput) {
        id
        name
        serial_number
        children{
            id
            name
            serial_number
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

export const GET_ALL_FILTER_ELEMENT = gql`
  query GetFilterElement{
    getFilterElement{
      id
      name
      slug
      values{
        id
        name
        slug
        value
      }
    }
  }
`;


