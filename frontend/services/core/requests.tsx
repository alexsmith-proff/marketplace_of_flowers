import client from '../../util/apollo-client'
import { GET_IMG_BY_SLUG, GET_TEXTBLOCK_BY_SLUG } from "../../graphql/section.graphql";
import { GET_MENU_BY_SLUG } from '../../graphql/menu.graphql';

export const GetTextByBlock = async(slug: string) => {
    const { data } = await client.query({
        query: GET_TEXTBLOCK_BY_SLUG,
        variables: {
          slug: slug
        }
      })
    return data.getTextElementBySlug.text
  }

export const GetImgByBlock = async(slug: string) => {
    const { data } = await client.query({
        query: GET_IMG_BY_SLUG,
        variables: {
          slug: slug
        }
      })
      // console.log(data);
      
    return data.getImgElementBySlug.filename
  }

export const GetMenu = async(slug: string) => {
    const { data } = await client.query({
        query: GET_MENU_BY_SLUG,
        variables: {
          slug: slug
        }
      })
      console.log(data);
      
    return data.getMenuBySlug
  }
