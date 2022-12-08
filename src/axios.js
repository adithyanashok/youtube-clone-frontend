import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://api-youtube.up.railway.app/api/",
    withCredentials: true,
})