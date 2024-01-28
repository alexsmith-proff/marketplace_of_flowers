// import Image from "next/image"
// import React, { useEffect, useState } from "react"
// import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../services/core/parse"
// import { IElement, ISection } from "../../interfaces/section.interface"
// import { IBlog } from "../../interfaces/blog.interface"

// import s from './Blogs.module.scss'

// interface BlogsProps {
//     blogs: ISection
// }

// const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
//     const [blogArr, setBlogArr] = useState<IBlog[]>([])
//     const [page, setPage] = useState<number>(0)

//     // Количество подгружаемым блогов
//     const blogsLoad = 6

//     const handleClick = () => {
//         setPage(page => page + 1)
//     }

//     const getBlogs = (arr: IElement[]): IBlog[] => {
//         return arr.map((blog) => {
//             return {
//                 id: blog.id,
//                 filename_image: getFileNameInImgBlockFromElement(blog, 'izobrazhenie'),
//                 title: getTextInTextBlockFromElement(blog, 'title'),
//                 text: getTextInTextBlockFromElement(blog, 'text')
//             }
//         })
//     }

//     useEffect(() => {
//         const arr = getBlogs(blogs.elements.slice(page * blogsLoad, page * blogsLoad + blogsLoad))
//         setBlogArr((blogArr) => [...blogArr, ...arr])

//     }, [page])

//     return (
//         <section className={s.blogs}>
//             <div className="container">
//                 <div className={s.title}>Блог</div>
//                 {/* <ul className={s.list}>
//                     {
//                         blogArr?.map((blog) => (
//                             <li className={s.blog} key={blog.id}>
//                                 <Image className={s.blogImg} objectFit="cover" src={process.env.API_URI_DOCKER + '/' + blog.filename_image} width={377} height={245} />
//                                 <div className={s.blogContent}>
//                                     <h3 className={s.blogTitle}>{blog.title}</h3>
//                                     <p className={s.blogText}>{blog.text}</p>
//                                     <p className={s.blogData}>{'blog.data'}</p>
//                                 </div>
//                             </li>
//                         )
//                         )
//                     }
//                 </ul>
//                 {
//                     (page + 1) * blogsLoad < blogs.elements.length &&

//                     <div className={s.btn}>
//                         <div className={s.btnWrap} onClick={handleClick}>
//                             <Image src="/img/rotate.png" width={24} height={24} />
//                             <p className={s.btnText}>Показать еще</p>
//                         </div>
//                     </div>
//                 } */}

//             </div>
//         </section>
//     )
// }

// export default Blogs