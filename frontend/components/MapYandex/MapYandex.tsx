import { FC } from "react"
// npm install @pbe/react-yandex-maps
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import s from './MapYandex.module.scss'
import { IMapState, IShop } from "../../interfaces/map.interface";

interface MapYandexProps {
    defaultState: IMapState
    shop: IShop
    width?: number
}

const MapYandex: FC<MapYandexProps> = ({ shop, defaultState, width = 500 }) => {
    return (
        <div className={s.map}>
            <YMaps>
                <Map defaultState={defaultState} width={width}>
                    <Placemark geometry={[shop.lat, shop.long]} />
                </Map>
            </YMaps>
        </div>
    )
}

export default MapYandex