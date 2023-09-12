import { FC } from "react";
import TopMenuStock from "../TopMenuStock/TopMenuStock";

import s from './ConnectedTopMenuStock.module.scss'

interface ConnectedTopMenuStockProps{}

const ConnectedTopMenuStock: FC<ConnectedTopMenuStockProps> = ({}) => {
    return (
        <TopMenuStock link="/" imgSrc="/img/discount.png" imgAlt="discount" text="акции" />
    )
}

export default ConnectedTopMenuStock