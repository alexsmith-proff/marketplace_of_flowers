import { gql } from "@apollo/client";

export const CREATE_FILTER = gql`
  mutation CreateFilter($createFilterInput: CreateFilterInput!) {
    createFilter(createFilterInput: $createFilterInput) {
      id
      name
    }
  }
`;

export const UPDATE_FILTER = gql`
  mutation UpdateFilter($updateFilterInput: UpdateFilterInput!) {
    updateFilter(updateFilterInput: $updateFilterInput) {
      id
      name
    }
  }
`;

export const DELETE_FILTER = gql`
  mutation RemoveFilter($id: Int!) {
    removeFilter(id: $id) {
      id
      name
    }
  }
`;

export const GET_ALL_FILTERS = gql`
  query GetAllFilter {
    getAllFilter {
      id
      name
      slug
      elements {
        id
        name
        slug
        values {
          id
          name
          slug
          value
        }
      }
    }
  }
`;

export const CREATE_FILTER_ELEMENT = gql`
  mutation CreateFilterElement($createFilterElementInput: CreateFilterElementInput!) {
    createFilterElement(createFilterElementInput: $createFilterElementInput) {
      id
      name
    }
  }
`;

export const UPDATE_FILTER_ELEMENT = gql`
  mutation UpdateFilterElement($updateFilterElementInput: UpdateFilterElementInput!) {
    updateFilterElement(updateFilterElementInput: $updateFilterElementInput) {
      id
      name
    }
  }
`;

export const DELETE_FILTER_ELEMENT = gql`
  mutation RemoveFilterElement($id: Int!) {
    removeFilterElement(id: $id) {
      id
      name
    }
  }
`;

