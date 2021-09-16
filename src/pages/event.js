
import React from "react"
import Layout from "../components/Layout";
import Card from "react-bootstrap/Card";
import "./event.css"

export default class Event extends React.Component{
    constructor(props) {
        super(props)

        this.state={
            basicInformation : {
                Name: "Event Name",
                logoLink: "https://via.placeholder.com/60X60",
                poster: "https://via.placeholder.com/640X640",
                description: "bleh bleh bleh",
                clubName: " Club Name"
            }
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <Layout>
                <div>
                    <hr />

                    <section>
                        <div>
                            <div className="d-flex justify-content-around flex-wrap">
                                <div>
                                    <br />

                                    <img
                                        alt="Club logo"
                                        className="logo img-fluid col-auto"
                                        src={this.state.basicInformation.logoLink}
                                    />

                                </div>

                                <div>
                                    <br />

                                    <span className="eventName">
                                        {this.state.basicInformation.Name}
                                    </span>
                                </div>

                                <div className="">

                                    <br />

                                    <br />

                                    <span >
                                        ~ Brought to you by
                                        {this.state.basicInformation.clubName}
                                    </span>
                                </div>

                            </div>

                            <br />

                            <div className="intro d-flex justify-content-around">
                                <Card
                                    className="information col-7"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Body>
                                        <Card.Title>
                                            INFORMATION
                                        </Card.Title>

                                        <Card.Text>
                                            {this.state.basicInformation.description}
                                        </Card.Text>

                                        <Card.Text>
                                            {this.state.basicInformation.description}
                                        </Card.Text>

                                        <Card.Text>
                                            {this.state.basicInformation.description}
                                        </Card.Text>

                                        <Card.Text>
                                            {this.state.basicInformation.description}
                                        </Card.Text>

                                        <Card.Text>
                                            {this.state.basicInformation.description}
                                        </Card.Text>


                                    </Card.Body>
                                </Card>

                                <Card
                                    className="poster col-3"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Img
                                        src={this.state.basicInformation.poster}
                                        variant="bottom"
                                    />

                                </Card>
                            </div>

                            <br />

                            <div className="description d-flex justify-content-around">
                                <Card
                                    className="card3 col-11"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Body>
                                        <Card.Title>
                                            DESCRIPTION
                                        </Card.Title>

                                        <Card.Text>
                                            {this.state.basicInformation.description}
                                        </Card.Text>

                                        <Card.Text>
                                            {this.state.basicInformation.description}
                                        </Card.Text>

                                        <Card.Text>
                                            {this.state.basicInformation.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <br />
                        </div>
                    </section>

                </div>
            </Layout>
    )
    }
}
