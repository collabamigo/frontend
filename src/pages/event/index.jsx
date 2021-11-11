
import React from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import {floating_right_card} from "./event.module.scss";

export default function Event (){

        const state = {
            basicInformation: {
                poster: "https://via.placeholder.com/500X580",
                clubName: "Club Name",
                eventName: "Event Name"
            }
        }


        return (
            <>
                <Container className="text-lg-center display-4 position-sticky my-3 bg-primary text-white">
                    {state.basicInformation.clubName}
                </Container>

                <Container className="pt-3 pb-3">
                    <div className="row flex-lg-row-reverse">

                        <div className="col-lg-3 col-12 mx-sm-2 ">
                            <Card
                                className={floating_right_card}
                            >
                                <Card.Body>
                                    <Card.Header className="text-center">
                                        Event Details
                                    </Card.Header>
                                    Detailed Timeline

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
                                </Card.Body>
                            </Card>

                            <br />
                        </div>

                        <div className="col-lg-9 col-12 mx-sm-2">
                            <Card
                                bg="light"
                                className="px-2"
                            >
                                <div className="row text-left p-3">
                                    <div className="col-12 col-lg text-start">
                                        <Image
                                            className="rounded-3"
                                            fluid
                                            src={state.basicInformation.poster}
                                        />
                                    </div>

                                    <div className="col d-table">
                                        <div className="d-table-cell align-middle">
                                            <h3 className="text-center display-3 fw-bold my-4 my-lg-0 ">
                                                {state.basicInformation.eventName}
                                            </h3>

                                            <div className="text-end text-primary pb-lg-5 fs-5 mb-lg-5">
                                                ~By
                                                {' '}

                                                {state.basicInformation.clubName}
                                            </div>



                                            <div className="d-flex justify-content-around text-end pt-5">

                                                <Button
                                                    className="rounded-4 w-20 fs-4 px-5"
                                                    variant="outline-primary"
                                                >
                                                    FAQ
                                                </Button>

                                                <Button className="rounded-4 w-20 fs-4 px-3">
                                                    Participate
                                                </Button>


                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <p className="fs-lg-5">
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
                                    of Letraset sheets Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                    Lorem Ipsum has been the standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets
                                </p>
                            </Card>
                        </div>

                    </div>
                </Container>
            </>
        )
}
