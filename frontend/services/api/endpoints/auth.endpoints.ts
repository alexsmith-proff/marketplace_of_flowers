import axios from "axios";
import axiosInstance from "../axios/axios";

const authEndPoints = {
    registartion: (data) => axios.post(`${process.env.API_URI}/api/auth/register`, data),
    login: (data) => axios.post(`${process.env.API_URI}/api/auth/login`, data),
    getProfile: () => axiosInstance.get(`${process.env.API_URI}/api/auth/profile`),
    // getProfile: () => axios.get(`${process.env.API_URI}/api/user/profile`),
    
}

export default authEndPoints