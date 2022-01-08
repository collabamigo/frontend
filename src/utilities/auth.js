// import {useRouter} from 'next/router'

// const router = useRouter()

import {createContext} from "react";

export const isBrowser = () => typeof window !== "undefined"

export const setLoggedOut = () => {
    if (isBrowser()) {
        localStorage.clear()
        sessionStorage.clear()
    }
    window.location.href="/"
}

export const checkLoginStatus = ()  => {}

const LoginContext = createContext((isBrowser() && (sessionStorage.getItem("loginFlag") !== null)));
export {LoginContext}

export const authSetLoggedIn = () => {
    if (isBrowser())
    sessionStorage.setItem("loginFlag", "true")
}

export const authSetLoggedOut = () => {
    if (isBrowser()) {
        localStorage.clear()
        sessionStorage.clear()
    }
    window.location.href = "/";
}
