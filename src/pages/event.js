
import React from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";


class Event extends React.Component{
    constructor(props) {
        super(props)

        // this.state={
        //     basicInformation : {
        //         Name: "Event Name",
        //         logoLink: "https://via.placeholder.com/60X60",
        //         poster: "https://via.placeholder.com/640X640",
        //         description: "bleh bleh bleh",
        //         clubName: "Club Name"
        //     }
        // }
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div >
                <Container className="text-lg-center display-4 position-sticky my-3 bg-info text-white">
                    BYLD CLub
                </Container>

                <Container className="pt-3">
                    <Row>
                        <Col xs={8}>
                            <Card bg="light">
                                <Card.Body>
                                    <Card.Title className="text-left pt-3 text-center display-6 ">
                                        Excited Much !!
                                    </Card.Title>

                                    <Card.Text>
                                        Check bro
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the release
                                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <div>
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

                                <Button className="w-100">
                                    Participate
                                </Button>

                                <br />

                                <br />

                                <Button className="w-100">
                                    Faq
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
} 
export default Event
