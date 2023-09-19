import { FC } from "react"
import YandexMap from "../YandexMap/YandexMap";
import MapHint from "../MapHint/MapHint";
import { getTextInTextBlockFromSection } from "../../services/core/parse";
import { ISection } from "../../interfaces/section.interface";

import s from './MainMap.module.scss'

interface MainMapProps {
    mainMap: ISection,
}

const MainMap: FC<MainMapProps> = ({ mainMap }) => {
    return (
        <YandexMap
            defaultState={{
                center: [
                    getTextInTextBlockFromSection(mainMap, 'defaultstate', 'center-lat'),
                    getTextInTextBlockFromSection(mainMap, 'defaultstate', 'center-long')
                ],
                zoom: getTextInTextBlockFromSection(mainMap, 'defaultstate', 'zoom')
                
            }}
            points={[{
                name: getTextInTextBlockFromSection(mainMap, 'points', 'name'),
                lat: getTextInTextBlockFromSection(mainMap, 'points', 'lat'),
                long: getTextInTextBlockFromSection(mainMap, 'points', 'long'),
            }]}
            height={'500px'}
            hint={
                <MapHint
                    phoneNumber={getTextInTextBlockFromSection(mainMap, 'hint', 'phonenumber')}
                    workDays={getTextInTextBlockFromSection(mainMap, 'hint', 'workdays')}
                    email={getTextInTextBlockFromSection(mainMap, 'hint', 'email')}
                />
            }
        />
    )
}

export default MainMap