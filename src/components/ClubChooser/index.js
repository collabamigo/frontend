import React from "react"

export default class ClubChooser extends React.Component{

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div title="Not Found">
                <p>
                    You just hit a route that doesn&#39;t exist... the sadness.
                </p>
            </div>)
    }
}

