import TopinfoProfile from "../TopInfoProfile/TopInfoProfile"
import { useTopInfoProfile } from "../../../hooks/useTopInfoProfile"
import { goto } from "../../../util/helpers/route"

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