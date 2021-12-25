import React from "react";
import {videoAdjustments} from './Demo.module.css';

class Demo extends React.Component {
    // Noinspection JSCheckFunctionSignatures

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <div className="contents-heeman">
                    <div className="container">
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-9 text-center">
                                <h1 className="mb-4">
                                    Here&apos;s a sneak peek for you
                                </h1>
                            </div>
                        </div>

                        <div className="Container-fluid">
                            <iframe
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={videoAdjustments}
                                frameBorder="0"
                                src="https://www.youtube.com/embed/SHniGbz4I_4?controls=0"
                                title="YouTube video player"
                            />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Demo;
