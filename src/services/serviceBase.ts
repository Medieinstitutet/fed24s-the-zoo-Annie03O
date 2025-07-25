import axios from "axios";

export const getData = async <T>(url: string) => {
    const response = await axios.get<T>(url);
    return response.data;
};