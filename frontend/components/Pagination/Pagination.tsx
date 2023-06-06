import { FC } from "react"
import ReactPaginate from "react-paginate"
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';


import s from './Pagination.module.scss'

type TPaginationProps = {
    pageCount: number
    forcePage: number
    onClickPagination: (pageNum: number) => void
}

const Pagination: FC<TPaginationProps> = ({ pageCount, onClickPagination, forcePage = 0 }) => {
    const handleClickPagination = (e) => {
        if (e.nextSelectedPage == undefined) onClickPagination(e.selected)
        else onClickPagination(e.nextSelectedPage)
    }

    return (
        <div>
            {
                pageCount > 1 &&
                <ReactPaginate
                    pageCount={pageCount}
                    containerClassName={s.pagination}
                    activeClassName={s.paginationActive}
                    pageLinkClassName={s.paginationPagelink}
                    breakLinkClassName={s.paginationBrakelink}
                    nextLinkClassName={s.paginationNextlink}
                    previousLinkClassName={s.paginationPrevlink}
                    pageClassName={s.paginationPageitem}
                    breakClassName={s.paginationBrakeitem}
                    nextClassName={s.paginationNextitem}
                    previousClassName={s.paginationPrevitem}
                    previousLabel={<BsArrowLeftShort size={25} />}
                    nextLabel={<BsArrowRightShort size={25} />}
                    onPageChange={handleClickPagination}
                    forcePage={forcePage}
                    
                />
            }

        </div>
    )
}

export default Pagination