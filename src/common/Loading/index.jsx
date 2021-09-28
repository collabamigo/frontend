import React from "react";

function Loading () {
    return (
        <div className="loader text-centre">
            <div
                className="loader-inner"
                role="status"
            >
                <div className="lds-roller">
                    <div />

                    <div />

                    <div />

                    <div />

                    <div />

                    <div />

                    <div />

                    <div />
                </div>

                <h4 className="text-uppercase fw-bold">
                    Loading...
                </h4>
            </div>
        </div>
    )
}

export default Loading
