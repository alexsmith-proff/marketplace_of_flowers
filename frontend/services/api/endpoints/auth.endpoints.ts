import axios from "axios";
import axiosInstance from "../axios/axios";

const authEndPoints = {
    registartion: (data) => axios.post(`${process.env.API_URI}/api/auth/register`, data),
    login: (data) => axios.post(`${process.env.API_URI}/api/auth/login`, data),
    getProfile: (data) => axiosInstance.get("/api/auth/me", data),
    
}

export default authEndPoints