import { FC } from "react"
// npm install @pbe/react-yandex-maps
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { IMapStateDefault, IPoint } from "../../interfaces/map.interface";

import s from './MainMap.module.scss'

interface MainMapProps {
    defaultState: IMapStateDefault
    points?: IPoint[]
    width?: string
    height?: string
    hint: React.ReactNode
}

const MainMap: FC<MainMapProps> = ({
    points,
    defaultState,
    width = '100%',
    height = '240px',
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

export default MainMap