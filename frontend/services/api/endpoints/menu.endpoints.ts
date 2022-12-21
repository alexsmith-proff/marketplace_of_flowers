import axiosInstance from "../axios/axios";

const menuEndPoints = {
    getBySlug: (slug: string) => axiosInstance.get(`/api/menu/${slug}`).then((res) => res.data)
}

export default menuEndPoints