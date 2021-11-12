import {useEffect, useState} from "react";
import {isBrowser} from "./auth";

export default function useOnScreen(ref) {

    if (isBrowser()) {

        const [isIntersecting, setIntersecting] = useState(false)

        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )

        useEffect(() => {
            observer.observe(ref.current)
            // Remove the observer as soon as the component is unmounted
            return () => {
                observer.disconnect()
            }
        }, [])

        return isIntersecting
    }
}
