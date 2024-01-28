import { useEffect, useState } from "react"
import { IElement } from "../../../interfaces/section.interface"
import { IBlog } from "../../../interfaces/blog.interface"
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../../services/core/parse"

export const useBlogList = (blogs) => {
    const [blogArr, setBlogArr] = useState<IBlog[]>([])
    const [page, setPage] = useState<number>(0)

    // Количество подгружаемым блогов
    const blogsLoad = 6

    const handleClick = () => {
        setPage(page => page + 1)
    }

    const getBlogs = (arr: IElement[]): IBlog[] => {
        return arr.map((blog) => {
            return {
                id: blog.id,
                filename_image: getFileNameInImgBlockFromElement(blog, 'izobrazhenie'),
                title: getTextInTextBlockFromElement(blog, 'title'),
                text: getTextInTextBlockFromElement(blog, 'text')
            }
        })
    }

    useEffect(() => {
        const arr = getBlogs(blogs.elements.slice(page * blogsLoad, page * blogsLoad + blogsLoad))
        setBlogArr((blogArr) => [...blogArr, ...arr])

    }, [page])

    return {blogArr, page, blogsLoad, handleClick}
}