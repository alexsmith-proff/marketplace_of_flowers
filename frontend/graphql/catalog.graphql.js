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
