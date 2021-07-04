// import Link from "../../common/Link";
import Card from "react-bootstrap/Card";
import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
// import axios from "axios";
// import backend from "../../env";
import Carousel from 'react-bootstrap/Carousel'
// import {Fade} from "react-awesome-reveal";
// import {isMobile} from "react-device-detect";
// import {SvgIcon} from "../../common/SvgIcon";
// import { Fragment } from 'react';
// import ScrollButton from './scroll/scrollbutton';



import './project.css';

class project extends React.Component {


    shouldComponentUpdate() {
        return true;
    }

    render() {

        return (
            <div >
                <Carousel className="container-fluid w-100 mb-4">
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            className="d-block container-fluid carousel-image-size"
                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/60d096c7dcd56_3.png"
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            alt="Second slide"
                            className="d-block container-fluid carousel-image-size"
                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/60d096aeab512_2.png"
                        />

                        
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            alt="Third slide"
                            className="d-block container-fluid carousel-image-size"
                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/60d09656e1b9b_1.png"
                        />

                        
                    </Carousel.Item>
                </Carousel>

                <div className="col-md-10 container-fluid mb-4"> 
                    <div className="row">
                        <Card style={{ width: '8rem' }}>
                            <Card.Img
                                classname="m-5"
                                src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/logo/150x150/60d16831f07e9_D2C__150-150.png"
                                variant="top"
                            />
                        </Card>

                        <div className="col">

                            <div className="container row h5">
                                #hello

                            </div>

                            <div className="container row h3">
                                hello

                            </div>

                            <div className=" container row h6">
                                21 Jun 2021 - 15 Dec 2021
                                50,524 Registrations
                                232,564 Views

                            </div>

                        </div>

                    </div>
                </div>

                <div className="text-background">
                    <Jumbotron className="container">
                        <h4 className="text-left">
                            Lets see, what Flipkart GRiD 3.0 is all about?
                        </h4>

                        <div className="text-left">
                            GRiD is Flipkart’s Flagship Engineering Campus Challenge which provides you the opportunity to apply your technical knowledge and skills, to compete and complete key challenges.
                            <br />
                            In its third edition, Flipkart GRiD becomes bigger  better, bringing Live Problem Statements from the world of E-Commerce to the brightest minds of India and lets you put your capabilities to the ultimate test.

                            <br />
                            So are you ready to enter the GRiD?

                            <br />
                            Stages:

                            The third edition of GRiD will have three distinct tracks for participants to choose from:
                            <br />
                            1 .Software Development Track

                            <br />
                            2 .Information Security Track

                            <br />
                            3 .Robotics Track

                            <br />
                            Each track will have multiple elimination rounds to test you on your technical, analytical, and ideation skills before the Grand Finale where the finalists will get to present their solutions to the panel of domain experts at Flipkart.

                            <br />
                            Eligibility: This competition is open to students pursuing B.Tech/B.E./M.Tech programs across ALL engineering colleges in India (Batch 2022,2023,2024  2025).

                            <br />
                            Note: 

                            <br />
                            :: One team or student can only register in either Software Development or Information Security Challenge.

                            <br />
                            ::Robotics Challenge is open for all students and teams including those who have already registered for either Software Development or Information Security Challenge.

                            <br />
                            The batch of 2021 is not eligible to participate in this competition.

                            <br />
                            Whats at stake - Rewards and Prizes?

                            <br />
                            Attractive prizes to be won along with PPIs for Tech Internships and Full-Time offers.

                            <br />
                            Prize pool of INR 6,00,000 is to be won

                            <br />
                            Top Teams from each track will get GRiD goodies!

                            <br />
                            PPI opportunities, tech internships, and a chance to appear for Flipkart Hiring Process to all top-performing students

                            <br />
                            Certificate of Merit to the top-performing teams in each track

                            <br />
                        </div>


                    </Jumbotron>
                </div>

                <div className="col-md-10 container-fluid">
                    <div className="row h4">
                        || Opportunities under Flipkart GRiD 3.0
                    </div>

                    <div className="row container-fluid col-md-12 m-3">

                        <Card
                            className="col zoom-my-card m-4 card-min-size" 
                            style={{ width: '18rem' }}
                        >
                            <Card.Body>
                                <Card.Title>
                                    Card Title
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the cards content.
                                </Card.Text>

                                <Card.Link href="#">
                                    Card Link
                                </Card.Link>

                                <Card.Link href="#">
                                    Another Link
                                </Card.Link>
                            </Card.Body>
                        </Card>

                        <Card
                            className="col zoom-my-card m-4 card-min-size" 
                            style={{ width: '18rem' }}
                        >
                            <Card.Body>
                                <Card.Title>
                                    Card Title
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the cards content.
                                </Card.Text>

                                <Card.Link href="#">
                                    Card Link
                                </Card.Link>

                                <Card.Link href="#">
                                    Another Link
                                </Card.Link>
                            </Card.Body>
                        </Card>

                        <Card
                            className="col zoom-my-card m-4 card-min-size" 
                            style={{ width: '18rem' }}
                        >
                            <Card.Body>
                                <Card.Title>
                                    Card Title
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the cards content.
                                </Card.Text>

                                <Card.Link href="#">
                                    Card Link
                                </Card.Link>

                                <Card.Link href="#">
                                    Another Link
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                {/* 
                <ScrollButton /> */}
            </div>
        )
    }
}
export default project