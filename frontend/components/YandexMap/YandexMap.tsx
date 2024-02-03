import { FC } from "react"
// npm install @pbe/react-yandex-maps
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { IMapStateDefault, IPoint } from "../../interfaces/map.interface";

import s from './YandexMap.module.scss'

interface YandexMapProps {
    width?: string
    height?: string
    defaultState: IMapStateDefault
    points?: IPoint[]
    hint?: React.ReactNode
}

const YandexMap: FC<YandexMapProps> = ({
    width = '100%',
    height = '240px',
    points,
    defaultState,
    hint   
 }) => {
    return (
        <>
            <div className={s.map} style={{ width: width, height: height }}>
                <div className="container">
                    <div className={s.wrap}>
                        <div className={s.onlyMap}>
                            <YMaps>
                                <Map defaultState={defaultState} style={{ width: width, height: height }}>
                                    {
                                        points?.map((point, ind) => <Placemark geometry={[point.lat, point.long]} key={ind} />)
                                    }
                                </Map>
                            </YMaps>
                        </div>
                        {hint}
                    </div>
                </div>
            </div>
        </>
    )
}

export default YandexMap