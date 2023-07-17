import Image from "next/image"
import React from "react"
import { ISection } from "../../interfaces/section.interface"
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../services/core/parse"

import s from './Blogs.module.scss'

interface BlogsProps {
    blogs: ISection
}

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
    console.log('aaaaaaaaaaa', blogs);


    return (
        <section className={s.blogs}>
            <div className="container">
                <div className={s.title}>Блог</div>
                <ul className={s.list}>
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
                </ul>
            </div>
        </section>
    )
}

export default Blogs