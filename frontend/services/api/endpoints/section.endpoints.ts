import axiosInstance from "../axios/axios";

const sectionEndPoints = {
    getBySlug: (slug: string) => axiosInstance.get(`/api/section/${slug}`).then((res) => res.data)
}

export default sectionEndPoints