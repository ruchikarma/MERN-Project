import axios from "axios";

//creating axios instance
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        credentials: "include",
        method: 'post',
        'Content-Type': 'application/json'
    }
});