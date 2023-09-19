import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import AuthForm from "../../../../components/AuthForm/AuthForm";
// import { RootState } from "../../../redux/store";
// import AuthForm from "../../AuthForm/AuthForm";

const ConnectedTopInfoAuthForm: FC = () => {
    const isVisibleAuthForm = useSelector((state: RootState) => state.user.isVisibleAuthForm)
    return (
        <>
            {
                isVisibleAuthForm && <AuthForm />
            }
        </>
    )
}

export default ConnectedTopInfoAuthForm