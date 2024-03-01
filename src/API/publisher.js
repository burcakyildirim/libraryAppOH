import axios from "axios";

export const getPublishers = async () => {
    const {data} = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + "/v1/publishers")
    return data;
}

export const deletePublishers = async (id) => {
    const {data} = await axios.delete(
        import.meta.env.VITE_APP_BASE_URL + `/v1/publishers/${id}`)
    return data;
}

export const createPublishers = async (publishers) => {
    const {data} = await axios.post(
        import.meta.env.VITE_APP_BASE_URL + `/v1/publishers`, publishers)
    return data;
}

export const updatePublishersAPI = async (publishers) => {
    const {data} = await axios.put(
        import.meta.env.VITE_APP_BASE_URL + `/v1/publishers`, publishers)
    //eğer id ile update yapıyorsam `http://localhost:8080/v1/publishers/${publishers.id}`
    return data;
}