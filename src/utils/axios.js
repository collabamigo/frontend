
import axios_base from "axios";
import backend from "../env";
import {isBrowser, setLoggedOut} from "./auth";

const axios = axios_base.create({
    baseURL: backend
})

if (isBrowser() && sessionStorage.getItem("token"))
    axios.defaults.headers.common['Authorization'] = "Token " + sessionStorage.getItem("token");

export const setToken = (access_token) => {
    axios.defaults.headers.common['Authorization'] = "Token " + access_token;
    sessionStorage.setItem("token", access_token)
}

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (localStorage.getItem("err") !== JSON.stringify(error)) {
        localStorage.setItem("err", JSON.stringify(error))
        if (error.response.status === 500)
            alert("Unexpected error occurred. Please contact us if you see this message repeatedly.")
        else if (error.response.status === 401) {
            alert("Authentication error. Please try clicking/tapping on the CollabConnect logo to re-authenticate")
            setLoggedOut()
        }
    }
    return Promise.reject(error);
});

export default axios
