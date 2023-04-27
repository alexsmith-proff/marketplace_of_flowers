import { FC } from "react";

import s from './DeliveryTime.module.scss'
import Image from "next/image";

interface DeliveryTimeProps {
    minutes: number
}

const DeliveryTime: FC<DeliveryTimeProps> = ({ minutes }) => {
    return (
        <div className={s.wrap}>
            <Image src='/img/car.png' width={20} height={10} alt="delivery-car-img" />
            <div className={s.text}><span>{minutes}</span> мин</div>
        </div>
    )
}

export default DeliveryTime