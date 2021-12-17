import React from "react";
import {setToken} from "../utilities/axios";
import {setLoggedIn} from "../utilities/auth";
import {useRouter} from "next/router";

export default function DummySignIn() {
    const router = useRouter();

    const handleClick = () => {
        setToken("00000.dummy.00000")
        setLoggedIn()
        router.push("/")
    }

        return (
            <div>
                <button
                    className="btn btn-primary rounded"
                    onClick={handleClick}
                    type="button"
                >
                    Continue without SignIn
                </button>
            </div>
        )
}

