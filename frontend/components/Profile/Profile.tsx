import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import Discount from "../Discount/Discount";
import PersonalArea from "../PersonalArea/PersonalArea";

import s from './Profile.module.scss'

interface ProfileProps { }
const Profile: FC<ProfileProps> = ({ }) => {
    const userProfile = useSelector((user: RootState) => user.user.profile)
    const [menuItem, setMenuItem] = useState<number>(0)

    return (
        <div className={s.profile}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.left}>
                        <p className={s.greetings}>{`Здравствуйте, ${userProfile.name}!`}</p>
                        <div className={s.discount}>
                            <Discount discount={5} />
                        </div>
                        <ProfileMenu menuItem={menuItem} changeMenuItem={(num) => setMenuItem(num)} />
                    </div>
                    <div className={s.right}>
                        {menuItem === 0 && <PersonalArea />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile