import client from '../../util/apollo-client'
import { GET_IMG_BY_SLUG, GET_TEXTBLOCK_BY_SLUG } from "../../graphql/section.graphql";

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
      console.log(data);
      
    return data.getImgElementBySlug.filename
  }