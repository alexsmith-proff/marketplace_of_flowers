import { FC } from "react";

import s from './DeleteBtn.module.scss'

interface DeleteBtnProps {
    click: () => void
}
const DeleteBtn: FC<DeleteBtnProps> = ({ click }) => {
    return (
        <div className={s.btn} onClick={click}><div className={s.line}></div></div>
    )
}

export default DeleteBtn