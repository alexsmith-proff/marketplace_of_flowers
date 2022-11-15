import { gql } from "@apollo/client";

  export const GET_ALL_BRANDS = gql`
  query GetAllBrands{
    getAllBrands{
      id
      name
    }
  }
`;