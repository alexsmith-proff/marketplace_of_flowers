import React from "react"
import BlogsList from "./components/BlogsList/BlogsList"
import { ISection } from "../../interfaces/section.interface"

import s from './Blogs.module.scss'

interface BlogsProps {
    blogs: ISection
}

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
    return (
        <section className={s.blogs}>
            <div className="container">
                <div className={s.title}>Блог</div>
                <BlogsList blogs={blogs} />
            </div>
        </section>
    )
}

export default Blogs