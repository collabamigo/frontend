import React, { Component } from 'react';
// import axios from "axios";
// import backend from "../../env";
import Image from 'react-bootstrap/Image'
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class ClubHomePage extends Component {
    static propTypes = {
        clubName : PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        this.state={
            basicInformation : {
                Name: "Demo Club",
                logoLink: "https://via.placeholder.com/50X50",
                tagline: "bleh bleh bleh",
                description: "bleh bleh bleh * 2",
                socialmediaLink: {
                    instagram : "https://www.instagram.com/heemank_v",
                    linkedin : "https://www.linkedin.com/heemank_v",
                    facebook : "https://www.facebook.com/heemank_v",
                    website : "https://www.collabconnect.com/404",
                },
                joinDate:"26122020",
                clubBanners:["https://via.placeholder.com/1280X480","https://via.placeholder.com/1280X480","https://via.placeholder.com/1280X480"]
            }
        }


    }

    componentDidMount() {
        console.log(this.props.clubName)
        // axios.get(backend+"/club/" + this.props.clubName)
        //     .then((res) => {
        //         console.log("axios call executed")
        //         console.log(res)
        //         }
        //     )
        }

    shouldComponentUpdate () {
        return true;
    }

    render(){
        console.log(this.state.basicInformation)
        console.log(this.props.clubName)


        return (
            <div>
                <hr />

                <section className="">
                    <div>
                        <div className="">
                            <div className="d-flex justify-content-start ml-3 "> 
                                <Image 
                                    fluid
                                    src={this.state.basicInformation.logoLink}
                                />

                                <span className="">
                                    {this.state.basicInformation.Name}
                                </span>

                                <Row
                                    md={2}
                                    xs={1}
                                >
                                    <Col>
                                        {"  "}

                                        <br />
                                    </Col>

                                    <Col>
                                        {"  "}
                                    </Col>

                                    {/* <Col>
                                        {this.state.basicInformation.tagline}
                                    </Col> */}
                                </Row>
                            </div>
                        </div>

                        <Row>
                            <Card
                                className=""
                                style={{ width: '18rem' }}
                            >
                                <Card.Body>
                                    
                                    <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text>

                                    <Card.Link href="#">
                                        W
                                    </Card.Link>

                                    <Card.Link href="#">
                                        I
                                    </Card.Link>

                                    <Card.Link href="#">
                                        F
                                    </Card.Link>

                                    <Card.Link href="#">
                                        L
                                    </Card.Link>
                                </Card.Body>

                                <Card.Footer className="d-flex justify-content-end">
                                    here since 
                                    {' '}

                                    {this.state.basicInformation.joinDate}
                                </Card.Footer>
                            </Card>

                            <Card
                                className=""
                                style={{ width: '18rem' }}
                            >
                                <Card.Body>
                                    
                                    <Card.Title>
                                        Top Events
                                    </Card.Title>


                                    {/* Implement mapping function */}

                                    {/* <Card.Text>
                                        {this.state.basicInformation.description}
                                    </Card.Text> */}

                                    {/*  */}
                                </Card.Body>

                            </Card>
                        </Row>
                        
                        <hr />

                        <Carousel className="container-fluid w-50 mb-4">
                            <Carousel.Item>
                                <img
                                    alt="First slide"
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/720X480"
                                />

                                <Carousel.Caption>
                                    <h3>
                                        First slide label
                                    </h3>

                                    <p>
                                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    alt="Second slide"
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/720X480"
                                />

                                <Carousel.Caption>
                                    <h3>
                                        Second slide label
                                    </h3>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    alt="Third slide"
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/720X480"
                                />

                                <Carousel.Caption>
                                    <h3>
                                        Third slide label
                                    </h3>

                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        
                        <hr />


                    </div>

                </section>
            </div>

        );
    }
}

export default ClubHomePage;