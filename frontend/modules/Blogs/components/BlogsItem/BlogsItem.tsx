import Image from "next/image"
import React from "react"

import s from './BlogsItem.module.scss'

interface BlogsItemProps {
    fileName: string
    title: string,
    text: string
    data: string,
}

const BlogsItem: React.FC<BlogsItemProps> = ({ fileName, title, text, data }) => {
    return (
        <li className={s.blog}>
            <Image className={s.blogImg} objectFit="cover" src={fileName} width={377} height={245} alt={'img'} />
            <div className={s.blogContent}>
                <h3 className={s.blogTitle}>{title}</h3>
                <p className={s.blogText}>{text}</p>
                <p className={s.blogData}>{data}</p>
            </div>
        </li>
    )
}

export default BlogsItem