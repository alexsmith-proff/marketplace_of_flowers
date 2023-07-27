import { FC, useState } from "react";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import s from './Profile.module.scss'
import Discount from "../Discount/Discount";

interface ProfileProps { }
const Profile: FC<ProfileProps> = ({ }) => {
    const userProfile = useSelector((user: RootState) => user.user.profile)
    const [menuItem, setMenuItem] = useState<number>(0)
    console.log('uuuuu', userProfile);

    return (
        <div className={s.profile}>
            <div className="container">
                <div className={s.left}>
                    <p className={s.greetings}>{`Здравствуйте, ${userProfile.name}!`}</p>
                    <div className={s.discount}>
                        <Discount discount={5} />
                    </div>
                    <ProfileMenu menuItem={menuItem} changeMenuItem={(num) => setMenuItem(num)} />
                </div>
                <div className={s.right}></div>
            </div>
        </div>
    )
}

export default Profile