import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.SERVER_URL
})


axiosInstance.interceptors.request.use(config => {
    try {
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    } catch (error) {
        console.log(error);
    }
    return config
}, error => {
    Promise.reject(error)
})

export default axiosInstance