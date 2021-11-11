
import React from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";


class Event extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            basicInformation: {
                poster: "https://via.placeholder.com/500X580",
                clubName: "Club Name",
                eventName: "Event Name"
            }
        }
    }


    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div >
                <Container className="text-lg-center display-4 position-sticky my-3 bg-primary text-white">
                    {this.state.basicInformation.clubName}
                </Container>

                <Container className="pt-3 pb-3">
                    <div className="row">
                        <Card className="col-9" bg="light">
                            <Card.Body>
                                <Card.Title className="row text-left pt-3">
                                        <div className="col text-start">
                                            <img className="rounded-3" src={this.state.basicInformation.poster}/>
                                        </div>
                                        <div className="col">
                                            <div className="text-center display-3 fw-bold">
                                                <br/>
                                                <br/>
                                                {this.state.basicInformation.eventName}
                                            </div>
                                            <div className="text-end">
                                                ~By {this.state.basicInformation.clubName}
                                            </div>
                                            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                                            <div className="row text-end">
                                                <Button className="col-7 rounded-4 w-20 fs-4">
                                                Participate
                                                </Button>
                                                <Button className="offset-1 col-4 rounded-4 w-20 fs-4">
                                                    Faq
                                                </Button>
                                            </div>
                                        </div>
                                </Card.Title>
                                <br />
                                <Card.Text className="fs-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <div className="position-end col-3 fs-5">
                            <Card>
                                <Card.Body>
                                    <Card.Header className="text-center">
                                        Event Details
                                    </Card.Header>
                                    Detailed Timeline

                                    <Card.Text>
                                        <ul className="list-unsettled">
                                            <li>
                                                Registrations & Team Formation Starts on: 25th June 2021
                                            </li>

                                            <li>
                                                Registrations & Team Formation Ends by: 26th July 2021
                                            </li>

                                            <li>
                                                Orientation Webinar: 31st July - Saturday - 11:30 AM to 1 PM
                                                Last Date for Concept Note Submissions: 2nd August 2021
                                            </li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
} 
export default Event
