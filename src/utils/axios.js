
import axios_base from "axios";
import backend from "../env";

const axios = axios_base.create({
    baseURL: backend
})

export const setToken = (access_token) => {
    axios.defaults.headers.common['Authorization'] = "Token " + access_token;
}

export default axios
