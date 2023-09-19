import TopinfoProfile from "../TopInfoProfile/TopInfoProfile"
import { goto } from "../../../../util/helpers/route"
import { useTopInfoProfile } from "../../hooks/useTopInfoProfile"

const ConnectedTopInfoProfile = () => {
    const {isUser, openForm} = useTopInfoProfile()

    const handleClick = () => {
        if (isUser()) goto('/profile/')
        else openForm()
    }
    return (
        <TopinfoProfile imgSrc="/img/user-ico.png" onClick={handleClick} />
    )
}

export default ConnectedTopInfoProfile