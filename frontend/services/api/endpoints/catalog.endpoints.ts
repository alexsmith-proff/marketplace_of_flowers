import axiosInstance from "../axios/axios";

const catalogEndPoints = {
    getAllCatalog: () => axiosInstance.get(`/api/catalog`).then((res) => res.data),
    getCatalogBySlug: (slug: string) => axiosInstance.get(`/api/catalog/${slug}`).then((res) => res.data),
    getCatalogByParentSlug: (slug: string) => axiosInstance.get(`/api/catalog/parent/${slug}`).then((res) => res.data)
}

export default catalogEndPoints