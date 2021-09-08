
import React from "react"
import Layout from "../components/Layout";
import Image from "react-bootstrap/Image";
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

    render() {return (
        <Layout>
            <div>
                <hr />

                <section>
                    <div>
                        <div className="row ">
                            <div className="col justify-content-center">

                                <img
                                    alt="Club logo"
                                    className="logo img-fluid col-auto"
                                    src={this.state.basicInformation.logoLink}
                                />

                                <span className="eventName offset-1 col-auto">
                                    {this.state.basicInformation.Name}
                                </span>

                            </div>

                            <span className="col-auto row align-content-end m-1">
                                ~ Brought to you by
                                {this.state.basicInformation.clubName}
                            </span>
                        </div>

                        <div className="intro row pt-5 pl-5 pr-5 pb-4">
                            <Card
                                className="information col-4 offset-1"
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
                                className="poster col-4 offset-2"
                                style={{ width: '18rem' }}
                            >
                                <Card.Img
                                    src={this.state.basicInformation.poster}
                                />

                            </Card>
                        </div>

                        <div className="description row pt-4 pl-5 pr-5 pb-3">
                            <Card
                                className="card3 col-10 offset-1"
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
                    </div>
                </section>

            </div>
        </Layout>
    )
    }
}
