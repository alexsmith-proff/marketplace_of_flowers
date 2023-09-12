import allEndPoints from "../../services/api/api"

export const getProfile = async() => {
    return await allEndPoints.auth.getProfile()
}