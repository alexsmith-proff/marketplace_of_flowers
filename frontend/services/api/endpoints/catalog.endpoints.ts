import axiosInstance from "../axios/axios";

const catalogEndPoints = {
    getBySlug: (slug: string) => axiosInstance.get(`/api/catalog/${slug}`).then((res) => res.data)
}

export default catalogEndPoints