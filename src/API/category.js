import axios from "axios";

export const getCategories = async () => {
    const {data} = await axios.get("http://localhost:8080/v1/categories")
    return data;
}

export const deleteCategory = async (id) => {
    const {data} = await axios.delete(`http://localhost:8080/v1/categories/${id}`)
    return data;
}