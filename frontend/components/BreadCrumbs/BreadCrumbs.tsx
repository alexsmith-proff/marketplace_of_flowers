import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IBreadCrumbs } from "../../interfaces/breadCrumbs.interface";

import st from './BreadCrumbs.module.scss'

interface BreadCrumbsProps {
    breadCrumbsArr: IBreadCrumbs[]
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ breadCrumbsArr }) => {
    const getBreadCrumbsName = (breadCrumb: IBreadCrumbs) => {
        if(!breadCrumb.slug) return <Link href={'/'}><a className={st.link}>{breadCrumb.text}</a></Link>
        if(breadCrumb.slug === 'cart') return <Link href={'/cart'}><a className={st.link}>{breadCrumb.text}</a></Link>
        if(breadCrumb.slug === 'blog') return <Link href={'/blog'}><a className={st.link}>{breadCrumb.text}</a></Link>
        if(breadCrumb.slug === 'reviews') return <Link href={'/reviews'}><a className={st.link}>{breadCrumb.text}</a></Link>
        return <Link href={'/category/' + breadCrumb.slug}><a className={st.link}>{breadCrumb.text}</a></Link>
    }
    return (
        <section className={st.breadCrumbs}>
            <div className="container">
                {
                    breadCrumbsArr.map((item, index) =>
                        <div className={st.item} key={index}>
                            {
                                index !== 0 &&
                                <div className={st.img}>
                                    <Image src="/img/arrow-breadcrumbs.png" width={14} height={10} />
                                </div>
                            }

                            {
                                getBreadCrumbsName(item)
                            }
                           
                        </div>)
                }

            </div>

        </section>
    )
}

export default BreadCrumbs