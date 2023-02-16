import axiosInstance from "../axios/axios";

const productEndPoints = {
    getById: (id: number) => axiosInstance.get(`/api/product/${id}`).then((res) => res.data)
}

export default productEndPoints