import { FC } from "react"
import YandexMap from "../YandexMap/YandexMap";
import MapHint from "../MapHint/MapHint";

import s from './MainMap.module.scss'

interface MainMapProps { }

const MainMap: FC<MainMapProps> = ({ }) => {
    return (
        <YandexMap
            defaultState={{
                center: [51.670554, 39.192204],
                zoom: 13
            }}
            points={[{
                name: 'ул. Революции 1905 года, 80',
                lat: 51.667596,
                long: 39.185905,
            }]}
            height={'500px'}
            hint={
                <MapHint
                    phoneNumber={'+7 (906) 678-65-99'}
                    workDays={'Пн-Сб: 8:00–20:00 Вс: 9:00–20:00'}
                    email={'info@lavkaroz.ru'}
                />
            }
        />
    )
}

export default MainMap