import { FC } from "react"
// npm install @pbe/react-yandex-maps
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { IMapStateDefault, IShop } from "../../interfaces/map.interface";
import ContactHint from "../ContactHint/ContactHint";

import s from './MapYandex.module.scss'

interface MapYandexProps {
    defaultState: IMapStateDefault
    shops?: IShop[]
    width?: string
    height?: string
    hintPhoneNumber?: string
    hintWorkDays?: string
    hintEmail?: string
    hintVisible?: boolean
}

const MapYandex: FC<MapYandexProps> = ({
    shops,
    defaultState,
    width = '100%',
    height = '240px',
    hintPhoneNumber,
    hintWorkDays,
    hintEmail,
    hintVisible = false
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

export default MapYandex