import { FC } from "react"
import TopInfoTime from "../TopInfoTime/TopInfoTime"

const ConnectedTopInfoTime: FC = () => {
    return (
        <TopInfoTime src="/img/clock.png" text="Пн-Сб: 8:00–20:00 Вс: 9:00–20:00" />
    )
}

export default ConnectedTopInfoTime