
export const isBrowser = () => typeof window !== "undefined"

export const isLoggedIn = () => {
    console.log(isBrowser() ? !!localStorage.getItem("access") : false, localStorage.getItem("access"))
    return isBrowser()?!!localStorage.getItem("access"):false;
}

export const setLoggedIn = () => {
    localStorage.setItem("loginFlag", "true")
}

export const setLoggedOut = () => {
    if (isBrowser())
        localStorage.clear()
}

export const reload = () => {
    if (isBrowser())
        location.reload()
}
