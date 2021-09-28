import React from "react";
import {loader, loaderInner, ldsRoller} from './loading.module.css';

function Loading () {
    return (
        <div className= {'text-centre' + ' ' + loader}>
            <div
                className={loaderInner}
                role="status"
            >
                <div className={ldsRoller}>
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
