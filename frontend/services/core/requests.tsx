import client from '../../util/apollo-client'

import { GET_IMG_BY_SLUG, GET_SECTION_BY_SLUG, GET_TEXTBLOCK_BY_SLUG } from "../../graphql/section.graphql";
import { GET_MENU_BY_SLUG } from '../../graphql/menu.graphql';
import allEndPoints from '../api/api';

// export const GetSection = async (slug: string) => {
//   let dataQuery = null
//   try {
//     const { data } = await client.query({
//       query: GET_SECTION_BY_SLUG,
//       variables: {
//         slug: slug
//       }
//     })
//     dataQuery = data
//   } catch (error) {
//     // console.log('error', error);
//   }
//   // console.log('dddddddddddddddddddddd', dataQuery)
//   return dataQuery ? dataQuery.getSectionBySlug : null
// }

export const GetTextByBlock = async (slug: string) => {
  const { data } = await client.query({
    query: GET_TEXTBLOCK_BY_SLUG,
    variables: {
      slug: slug
    }
  })
  return data.getTextElementBySlug.text
}

export const GetImgByBlock = async (slug: string) => {
  const { data } = await client.query({
    query: GET_IMG_BY_SLUG,
    variables: {
      slug: slug
    }
  })
  console.log(data);

  return data.getImgElementBySlug.filename
}

export const GetMenu = async (slug: string) => {
  let dataQuery = null
  try {
    dataQuery = allEndPoints.menu.getBySlug(slug)
  } catch (error) {
    console.log('error', error);
  }
  console.log('dattaaaaaaaaaa', dataQuery)
  return dataQuery
}

export const GetSection = async (slug: string) => {
  let dataQuery = null
  try {
    dataQuery = allEndPoints.section.getBySlug(slug)
  } catch (error) {
    console.log('error', error);
  }
  console.log('dattaaaaaaaaaa_section', dataQuery)
  return dataQuery
}
