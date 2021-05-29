/* eslint-disable react/button-has-type */
import React from "react";
import './AboutUs.css'

class AboutUs extends React.Component {
    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="body">

                {/* <div className='ripple-background'>
                    <div className='circle xxlarge shade1' />

                    <div className='circle xlarge shade2' />

                    <div className='circle large shade3' />

                    <div className='circle mediun shade4' />

                    <div className='circle small shade5' />
                </div> */}

                <div className="about-section">
                    <h1>
                        About Us Page
                    </h1>

                    <p>
                        Some text about who we are and what we do.
                    </p>

                    <p>
                        Resize the browser window to see that this page is responsive by the way.
                    </p>
                </div>

                <h2 style={{ textAlign: 'center' }}>
                    Our Team
                </h2>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img
                                alt="Jane"
                                src="/w3images/team1.jpg"
                                style={{ width: '100%' }}
                            />

                            <div className="container">
                                <h2>
                                    Aditya Pratap Singh
                                </h2>

                                <p className="title">
                                    CEO and Founder
                                </p>

                                <p>
                                    Some text that describes me lorem ipsum ipsum lorem.
                                </p>

                                <p>
                                    aditya20016@iiitd.ac.in
                                </p>

                                <p>
                                    <button className="button">
                                        Contact
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img
                                alt="Mike"
                                src="/w3images/team2.jpg"
                                style={{ width: '100%' }}
                            />

                            <div className="container">
                                <h2>
                                    Heemank Verma
                                </h2>

                                <p className="title">
                                    Art Director
                                </p>

                                <p>
                                    Some text that describes me lorem ipsum ipsum lorem.
                                </p>

                                <p>
                                    heemank20064@iiitd.ac.in
                                </p>

                                <p>
                                    <button className="button">
                                        Contact
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img
                                alt="John"
                                src="/w3images/team3.jpg"
                                style={{ width: '100%' }}
                            />

                            <div className="container">
                                <h2>
                                    Shikhar Sharma
                                </h2>

                                <p className="title">
                                    Designer
                                </p>

                                <p>
                                    Some text that describes me lorem ipsum ipsum lorem.
                                </p>

                                <p>
                                    shikhar200121@iiitd.ac.in
                                </p>

                                <p>
                                    <button className="button">
                                        Contact
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* TODO: Body class made blue, keep only h1 tag as blue */}




            </div >
        );

    }

}

export default AboutUs;
