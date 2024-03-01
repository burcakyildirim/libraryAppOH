import axios from "axios";

export const getCategories = async () => {
    const {data} = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + "/v1/categories")
    return data;
}

export const deleteCategory = async (id) => {
    const {data} = await axios.delete(
        import.meta.env.VITE_APP_BASE_URL + `/v1/categories/${id}`)
    return data;
}

export const createCategory = async (categories) => {
    const {data} = await axios.post(
        import.meta.env.VITE_APP_BASE_URL + `/v1/categories`, categories)
    return data;
}

export const updateCategoryAPI = async (categories) => {
    const {data} = await axios.put(
        import.meta.env.VITE_APP_BASE_URL + `/v1/categories`, categories)
    //eğer id ile update yapıyorsam `http://localhost:8080/v1/categories/${categories.id}`
    return data;
}