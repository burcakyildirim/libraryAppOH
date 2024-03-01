import axios from "axios";

export const getAuthors = async () => {
    const {data} = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + "/v1/authors")
    return data;
}

export const deleteAuthors = async (id) => {
    const {data} = await axios.delete(
        import.meta.env.VITE_APP_BASE_URL + `/v1/authors/${id}`)
    return data;
}

export const createAuthors = async (authors) => {
    const {data} = await axios.post(
        import.meta.env.VITE_APP_BASE_URL + `/v1/authors`, authors)
    return data;
}

export const updateAuthorsAPI = async (authors) => {
    const {data} = await axios.put(
        import.meta.env.VITE_APP_BASE_URL + `/v1/authors`, authors)
    //eğer id ile update yapıyorsam `http://localhost:8080/v1/categories/${/authors.id}`
    return data;
}