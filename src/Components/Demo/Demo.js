import React from "react";
import './Demo.css'

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
                                    Heres a sneek peek for you
                                </h1>
                            </div>
                        </div>

                        <div className="Container-fluid">
                            <iframe
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="video-adjustments"
                                frameBorder="0"
                                src="https://www.youtube.com/embed/SHniGbz4I_4"
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