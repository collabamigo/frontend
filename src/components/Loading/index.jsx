import React from "react"
import {balls, ball, one, two, three} from "./Loading.module.css";

function Loading() {
    return (
        <div className={balls}>
            <div className={`${ball} ${one}`} />

            <div className={`${ball} ${two}`} />

            <div className={`${ball} ${three}`} />
        </div>
    );
}

export default Loading;
