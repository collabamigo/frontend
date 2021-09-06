
import { navigate } from "gatsby"
import {redirectTo} from "@reach/router";

export const isBrowser = () => typeof window !== "undefined"

let loginStatus = false

export const isLoggedIn = () => {
    return loginStatus
    return isBrowser()?!!sessionStorage.getItem("loginFlag"):false;
}

export const setLoggedIn = () => {
    loginStatus = true
    sessionStorage.setItem("loginFlag", "true")
}

export const setLoggedOut = () => {
    if (isBrowser())
        localStorage.clear()
}

export const reload = (path) => {
    if (path)
        navigate(path)
    else
        navigate(location.pathname)
}

export const checkLoginStatus = async () => {
    if (!isLoggedIn())
        window.open("/welcome?next="+location.pathname, "_self")
    return(isLoggedIn())
}
