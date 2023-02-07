import { gql } from "@apollo/client";

export const CREATE_PRODUCT_FILTER = gql`
  mutation CreateProductFilter($createProductFilterInput: CreateProductFilterInput!) {
    createProductFilter(createProductFilterInput: $createProductFilterInput) {
      id
      name
      slug
      value
    }
  }
`;