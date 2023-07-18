import Image from "next/image"
import React, { useEffect, useState } from "react"
import { ISection } from "../../interfaces/section.interface"
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../services/core/parse"

import s from './Blogs.module.scss'
import { IBlog } from "../../interfaces/blog.interface"

interface BlogsProps {
    blogs: ISection
}

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
    const [blogArr, setBlogArr] = useState<IBlog[]>([])

    useEffect(() => {
        if (blogs.elements.length >= 6) {
            const arr = []
            blogs.elements.forEach((blog, index) => {
                if (index < 6) {
                    arr.push({
                        id: blog.id,
                        filename_image: getFileNameInImgBlockFromElement(blog, 'izobrazhenie'),
                        title: getTextInTextBlockFromElement(blog, 'title'),
                        text: getTextInTextBlockFromElement(blog, 'text')
                    })
                }
            })
            setBlogArr(arr)
        } else {
            setBlogArr(blogs.elements.map((blog) => {
                return {
                    id: blog.id,
                    filename_image: getFileNameInImgBlockFromElement(blog, 'izobrazhenie'),
                    title: getTextInTextBlockFromElement(blog, 'title'),
                    text: getTextInTextBlockFromElement(blog, 'text')
                }
            }))
        }
    }, [])

    return (
        <section className={s.blogs}>
            <div className="container">
                <div className={s.title}>Блог</div>
                <ul className={s.list}>
                    {
                        blogArr?.map((blog) => (
                            <li className={s.blog} key={blog.id}>
                                <Image className={s.blogImg} objectFit="cover" src={process.env.API_URI_DOCKER + '/' + blog.filename_image} width={377} height={245} />
                                <div className={s.blogContent}>
                                    <h3 className={s.blogTitle}>{blog.title}</h3>
                                    <p className={s.blogText}>{blog.text}</p>
                                    <p className={s.blogData}>{'blog.data'}</p>
                                </div>
                            </li>
                        )
                        )
                    }
                </ul>
                {/* <ul className={s.list}>
                    {
                        blogs.elements?.map((blog) => (
                            <li className={s.blog} key={blog.id}>
                                <Image className={s.blogImg} objectFit="cover" src={process.env.API_URI_DOCKER + '/' + getFileNameInImgBlockFromElement(blog, 'izobrazhenie')} width={377} height={245} />
                                <div className={s.blogContent}>
                                    <h3 className={s.blogTitle}>{getTextInTextBlockFromElement(blog, 'title')}</h3>
                                    <p className={s.blogText}>{getTextInTextBlockFromElement(blog, 'text')}</p>
                                    <p className={s.blogData}>{'blog.data'}</p>
                                </div>
                            </li>
                        )
                        )
                    }
                </ul> */}
            </div>
        </section>
    )
}

export default Blogs