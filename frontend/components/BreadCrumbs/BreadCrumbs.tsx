import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IBreadCrumbs } from "../../interfaces/breadCrumbs.interface";

import st from './BreadCrumbs.module.scss'

interface BreadCrumbsProps {
    breadCrumbsArr: IBreadCrumbs[]
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ breadCrumbsArr }) => {
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
                            <Link href={'/category/' + item.slug}>
                                <a className={st.link}>{item.text}</a>
                            </Link>
                        </div>)
                }

            </div>

        </section>
    )
}

export default BreadCrumbs