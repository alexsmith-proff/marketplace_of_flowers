import client from '../../util/apollo-client'

import { GET_IMG_BY_SLUG, GET_TEXTBLOCK_BY_SLUG } from "../../graphql/section.graphql";
import allEndPoints from '../api/api';
import { ICatalog } from '../../interfaces/catalog.interface';

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
  // console.log(data);

  return data.getImgElementBySlug.filename
}

export const GetMenu = async (slug: string) => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.menu.getBySlug(slug)
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery
}

export const GetAllCatalog = async (): Promise<ICatalog> => {
  let dataQuery: ICatalog = null
  try {
    dataQuery = await allEndPoints.catalog.getAllCatalog()
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery
}

export const GetCatalogNameBySlug = async (slug: string) => {
  let dataQuery = ''
  try {
    const data: ICatalog = await allEndPoints.catalog.getCatalogBySlug(slug)
    if(data) {
      dataQuery = data.name
    }
    else {
      dataQuery = ''
    }
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery
}

export const GetCatalogByParent = async (slug: string) => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.catalog.getCatalogByParentSlug(slug)
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery
}

export const GetSection = async (slug: string) => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.section.getBySlug(slug)
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery
}
