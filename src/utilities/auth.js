// import {useRouter} from 'next/router'

// const router = useRouter()

import {createContext} from "react";

export const isBrowser = () => typeof window !== "undefined"


const LoginContext = createContext({
    loggedIn: (isBrowser() && sessionStorage.getItem("loginFlag")),
    setLoggedIn: () => {
    }
});
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
