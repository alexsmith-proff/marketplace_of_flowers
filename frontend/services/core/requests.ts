import client from '../../util/apollo-client'

import { GET_IMG_BY_SLUG, GET_TEXTBLOCK_BY_SLUG } from "../../graphql/section.graphql";
import allEndPoints from '../api/api';
import { ICatalog } from '../../interfaces/catalog.interface';
import { IFilterData, IFilterOrderData } from '../../interfaces/filter.interface';

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

///////////////////////////////////////
// Menu
///////////////////////////////////////

export const GetMenu = async (slug: string) => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.menu.getBySlug(slug)
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery
}

///////////////////////////////////////
// Catalog
///////////////////////////////////////

export const GetAllCatalog = async (): Promise<ICatalog[]> => {
  let dataQuery: ICatalog[] = null
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

///////////////////////////////////////
// Section
///////////////////////////////////////

export const GetSection = async (slug: string) => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.section.getBySlug(slug)
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery
}



///////////////////////////////////////
// Product
///////////////////////////////////////

export const GetMinMaxPriceProduct = async() => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.product.getMinMaxPrice()
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery  
}

export const GetProductsAll = async() => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.product.getAll()
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery  
}

export const GetProductsById = async(id) => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.product.getById(id)
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery  
}

// export const GetProductsByRandom = async() => {
//   let dataQuery = null
//   try {
//     console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
//     dataQuery = await allEndPoints.product.getByRandom(5)
//     console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
//   } catch (error) {
//     console.log('error', error);
//   }
//   return dataQuery  
// }

export const GetProductsByFilterData = async(filterData: IFilterOrderData) => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.product.getByFilter(filterData)
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery  
}


///////////////////////////////////////
// Filter
///////////////////////////////////////

export const GetFilterBySlug = async (slug: string) => {
  let dataQuery = null
  try {
    dataQuery = await allEndPoints.filter.getFilterBySlug(slug)
  } catch (error) {
    console.log('error', error);
  }
  return dataQuery
}