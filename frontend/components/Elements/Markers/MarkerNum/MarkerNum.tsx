import { FC } from "react";

import s from './MarkerNum.module.scss'

interface MarkerNumProps {
    num: number
}

const MarkerNum: FC<MarkerNumProps> = ({ num }) => {
    return (
        <div className={s.marker}>{num}</div>
    )
}

export default MarkerNum