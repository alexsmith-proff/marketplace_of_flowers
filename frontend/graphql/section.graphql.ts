import { gql } from "@apollo/client";

export const CREATE_SECTION = gql`
mutation CreateSection($createSectionInput: CreateSectionInput!){
  createSection(createSectionInput: $createSectionInput){
    id
    name
  }
}
`;

export const UPDATE_SECTION = gql`
mutation UpdateSection($updateSectionInput: UpdateSectionInput!){
  updateSection(updateSectionInput: $updateSectionInput){
    id
    name
  }
}
`;

export const DELETE_SECTION = gql`
mutation DeleteSection($id: Int!){
  removeSection(id: $id){
    id
    name
  }
}
`;

export const CREATE_ELEMENT = gql`
mutation CreateElement($createElementInput: CreateElementInput!){
  createElement(createElementInput: $createElementInput){
    id
    name
  }
}
`;

export const UPDATE_ELEMENT = gql`
mutation UpdateElement($updateElementInput: UpdateElementInput!){
  updateElement(updateElementInput: $updateElementInput){
    id
    name
  }
}
`;

export const DELETE_ELEMENT = gql`
mutation DeleteElement($id: Int!){
  removeElement(id: $id){
    id
    name
  }
}
`;

export const CREATE_BLOCK_TEXT = gql`
mutation CreateBlockText($createTextElementInput: CreateTextElementInput!){
  createTextElement(createTextElementInput: $createTextElementInput){
    id
    name
  }
}
`;

export const UPDATE_BLOCK_TEXT = gql`
mutation UpdateBlockText($updateTextElementInput: UpdateTextElementInput!){
  updateTextElement(updateTextElementInput: $updateTextElementInput){
    id
    name
  }
}
`;

export const DELETE_BLOCK_TEXT = gql`
mutation DeleteBlockText($id: Int!){
  removeTextElement(id: $id){
    id
    name
  }
}
`;

export const ADD_PHOTO = gql`
mutation ($file: Upload!) {
  addPhoto(file: $file) {
    id
  }
}
`;

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
        product_ref{
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
          main_image
          filenames_images
          filters{
            id
            name
            value
          }
        }        
      }
    }
  }
`;

export const GET_SECTION_BY_SLUG = gql`
  query GetSectionBySlug($slug: String!) {
    getSectionBySlug(slug: $slug) {
      id
      name
      slug
      elements {
        id
        name
        slug
        text_elements {
          id
          name
          slug
          text
        }
        img_elements {
          id
          name
          slug
          filename
        }
      }
    }
  }
`;

export const GET_TEXTBLOCK_BY_SLUG = gql`
query GetTextElementBySlug($slug: String!){
  getTextElementBySlug(slug: $slug){
    id
    name
    text
  }
}
`;

export const GET_IMG_BY_SLUG = gql`
query GetImgElementBySlug($slug: String!){
  getImgElementBySlug(slug: $slug){
    id
    name
    filename
  }
}
`;