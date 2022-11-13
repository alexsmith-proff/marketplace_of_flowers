import { gql } from "@apollo/client"

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts{
        id
        name
        price
        vendor_code
        brand{
          id
          name
        }    
      }
  }
`;

