// import {useRouter} from 'next/router'

// const router = useRouter()

export const isBrowser = () => typeof window !== "undefined"

let loginStatus = false

export const isLoggedIn = () => {
    return loginStatus
    // return isBrowser()?!!sessionStorage.getItem("loginFlag"):false;
}

export const setLoggedIn = () => {
    loginStatus = true
    sessionStorage.setItem("loginFlag", "true")
}

export const setLoggedOut = () => {
    if (isBrowser())
        localStorage.clear()
}

export const checkLoginStatus = async () => {
    if (isBrowser()) {
        if (!isLoggedIn())
            window.open("/welcome?next=" + location.pathname, "_self")
        return (isLoggedIn())
    }
}
