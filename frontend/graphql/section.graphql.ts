import { gql } from "@apollo/client";

// export const CREATE_SECTION = gql`
// `;

export const GET_ALL_SECTIONS = gql`
query GetAllSections{
    getAllSections{
      id
      name
      slug
      elements{
        id
        name
        slug
        text_elements{
          id
          name
          slug
          text
        }
        img_elements{
          id
          name
          slug
          filename
        }
      }
    }
  }
`;