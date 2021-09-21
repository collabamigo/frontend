// import {useRouter} from 'next/router'

// const router = useRouter()

export const isBrowser = () => typeof window !== "undefined"

let loginStatus = false

export const isLoggedIn = () => {
    return loginStatus || (isBrowser() && sessionStorage.getItem("loginFlag"))
    // return isBrowser()?!!sessionStorage.getItem("loginFlag"):false;
}

export const setLoggedIn = () => {
    loginStatus = true
    sessionStorage.setItem("loginFlag", "true")
}

export const setLoggedOut = () => {
    if (isBrowser()) {
        localStorage.clear()
        sessionStorage.clear()
    }
}

export const checkLoginStatus = async () => {
    if (isBrowser()) {
        if (!isLoggedIn())
            window.open("/welcome?next=" + location.pathname, "_self")
        return (isLoggedIn())
    }
}
