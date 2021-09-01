
export const isBrowser = () => typeof window !== "undefined"

export const isLoggedIn = () => {
    return isBrowser()?!!localStorage.getItem("loginFlag"):false;
}

export const setLoggedIn = () => {
    localStorage.setItem("loginFlag", "true")
}

export const setLoggedOut = () => {
    if (isBrowser())
        localStorage.clear()
}
