import axiosInstance from "../axios/axios";

const filterEndPoints = {
    getFilterBySlug: (slug: string) => axiosInstance.get(`/api/filter/${slug}`).then((res) => res.data),
}

export default filterEndPoints