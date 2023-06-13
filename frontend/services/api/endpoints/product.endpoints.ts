import axios from "axios";
import { IFilterData, IFilterOrderData } from "../../../interfaces/filter.interface";
import axiosInstance from "../axios/axios";

const productEndPoints = {
    getById: (id: number) => axiosInstance.get(`/api/product/${id}`).then((res) => res.data),
    getMinMaxPrice: () => axiosInstance.get('/api/product/minmaxprice').then(res => res.data),
    getAll: () => axios.get(`${process.env.API_URI}/api/product/all`).then(res => res.data),
    // getByRandom: (count: number) => axiosInstance.post('/api/product/random', {count: count}).then(res => res.data),
    getByFilter: (filter: IFilterOrderData) => axios.post(`${process.env.API_URI}/api/product/filter`, filter).then(res => res.data),
}

export default productEndPoints