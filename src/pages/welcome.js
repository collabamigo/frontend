
import React, {useState} from "react";
import GoogleSignIn from "../components/GoogleSignIn";

function UnauthenticatedHome() {
    const [stage, setStage] = useState("button");

    return (
        <div className="row">
            <div className="mx-auto col-auto">
                <GoogleSignIn
                    setStage={setStage}
                    stage={stage}
                    visibility
                />
            </div>
        </div>
    )
}

export default UnauthenticatedHome;
