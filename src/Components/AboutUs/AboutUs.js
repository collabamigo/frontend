
import React from "react";
import './AboutUs.css'

class AboutUs extends React.Component {
    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return false;
    }

    render () {
        return (
            <div className="body">
                <h1>
                    The team
                </h1>

                <div className='ripple-background'>
                    <div className='circle xxlarge shade1' />

                    <div className='circle xlarge shade2' />

                    <div className='circle large shade3' />

                    <div className='circle mediun shade4' />

                    <div className='circle small shade5' />
                </div>
            </div>
        );

    }

}

export default AboutUs;
