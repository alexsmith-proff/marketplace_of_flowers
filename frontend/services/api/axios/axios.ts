import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.SERVER_URL
})

// axiosInstance.interceptors.request.use(config => {
//     const authToken = localStorage.getItem('accessToken')
//     if(authToken) {
//         config.headers.authorization = `Bearer ${authToken}`
//     }
//     return config
// }, error => {
//     Promise.reject(error)
// })

export default axiosInstance