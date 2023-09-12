import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { setIsVisibleAuthForm, setUserData } from "../redux/user/userSlice"
import { getProfile } from "../util/helpers/requests"

export const useTopInfoProfile = () => {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    const isUser = () => {
        if (Object.keys(user.profile).length) return true
        else false        
    }

    const openForm = () => {
        dispatch(setIsVisibleAuthForm(true))
    }
    const setUser = async() => {
        const res = await getProfile()
        dispatch(setUserData(res.data))
    }

    useEffect(() => {
        setUser()
    }, [])

    return { isUser, openForm }
}