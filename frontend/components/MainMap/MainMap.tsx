import { FC } from "react"
// npm install @pbe/react-yandex-maps
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import s from './MainMap.module.scss'

interface MainMapProps { }

const MainMap: FC<MainMapProps> = ({ }) => {
    return (
        <>
            <div className={s.map} style={{ width: width, height: height }}>
                <div className="container">
                    <div className={s.wrap}>
                        <div className={s.onlyMap}>
                            <YMaps>
                                <Map defaultState={defaultState} style={{ width: width, height: height }}>
                                    {
                                        shops?.map((shop, ind) => <Placemark geometry={[shop.lat, shop.long]} key={ind} />)
                                    }
                                </Map>
                            </YMaps>
                        </div>
                        {
                            hintVisible && (
                                <div className={s.hint}>
                                    <ContactHint phoneNumber={hintPhoneNumber} workDays={hintWorkDays} email={hintEmail} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainMap