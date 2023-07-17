import { FC } from "react"
// npm install @pbe/react-yandex-maps
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import s from './MapYandex.module.scss'
import { IMapStateDefault, IShop } from "../../interfaces/map.interface";

interface MapYandexProps {
    defaultState: IMapStateDefault
    shop: IShop
    width?: string
    height?: string
    hintVisible?: boolean
}

const MapYandex: FC<MapYandexProps> = ({ shop, defaultState, width = '100%', height = '240px', hintVisible = false }) => {
    return (
        <div className={s.map}>
            <YMaps>
                <Map defaultState={defaultState} style={{width: width, height: height}}>
                    <Placemark geometry={[shop.lat, shop.long]} />
                </Map>
            </YMaps>
            {
                hintVisible && <div>hintVisible</div>
            }
        </div>
    )
}

export default MapYandex