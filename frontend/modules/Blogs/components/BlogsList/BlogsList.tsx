import Image from "next/image"
import React from "react"
import BlogsItem from "../BlogsItem/BlogsItem"
import { useBlogList } from "../../hooks/useBlogList"
import { ISection } from "../../../../interfaces/section.interface"

import s from './Blogs.module.scss'

interface BlogsListProps {
    blogs: ISection
}

const BlogsList: React.FC<BlogsListProps> = ({ blogs }) => {
    const {blogArr, page, blogsLoad, handleClick} = useBlogList(blogs)

    return (
        <>
            <ul className={s.list}>
                {
                    blogArr?.map(blog => (
                        <BlogsItem
                            fileName={process.env.API_URI_DOCKER + '/' + blog.filename_image}
                            title={blog.title}
                            text={blog.text}
                            data={'blog.data'}
                            key={blog.id} />
                    )
                    )
                }
            </ul>
            {
                (page + 1) * blogsLoad < blogs.elements.length &&

                <div className={s.btn}>
                    <div className={s.btnWrap} onClick={handleClick}>
                        <Image src="/img/rotate.png" width={24} height={24} alt="rotate-ico" />
                        <p className={s.btnText}>Показать еще</p>
                    </div>
                </div>
            }
        </>
    )
}

export default BlogsList