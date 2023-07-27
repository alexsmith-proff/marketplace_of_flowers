import { FC } from "react"

interface ProfileMenuProps{
    menuItem: number
    changeMenuItem: (item: number) => void
}

const ProfileMenu: FC<ProfileMenuProps> = ({ menuItem, changeMenuItem}) => {
    return(
        <div></div>
    )
}

export default ProfileMenu