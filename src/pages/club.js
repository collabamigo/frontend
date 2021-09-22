import React, { Component } from 'react';
// import axios from "utils/axios";
// import backend from "../../env";
import Image from 'react-bootstrap/Image'
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import {logo, clubName} from './club.module.css';
import {isBrowser} from "../utils/auth";

function useQuery() {
    if (isBrowser())
        return new URLSearchParams(window.location.search);
    return null
}

class ClubHomePage extends Component {
    static propTypes = {
        clubName : PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        this.query = useQuery()

        if (this.query)
            this.name = this.query.get("name")


        this.state={
            basicInformation : {
                Name: "Demo Club",
                logoLink: "https://via.placeholder.com/60X60",
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
        var caller = null;
        if(isBrowser())
        {
            caller = this.query.get("name");
        }
        console.log(caller,"hellooo")
        // axios.get(backend+"/club/" + caller)
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
            <>
                <div>
                    <hr />

                    <section className="clubDetails">
                        <div>
                            <div className="clubHeader row">
                                <div className="col-4 offset-0">
                                    <Image
                                        className={logo}
                                        fluid
                                        src={this.state.basicInformation.logoLink}
                                    />

                                    <span className={clubName + ' ' + 'offset-1'}>
                                        {this.state.basicInformation.Name}
                                    </span>
                                </div>

                                <div className="row my-custom-row justify-content-start align-content-end">
                                    {this.state.basicInformation.tagline}
                                </div>
                            </div>

                            <div className="row p-3">
                                <Card
                                    className="card1 col-4 offset-1"
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

                                    <Card.Footer className=" cardFooter d-flex justify-content-end">
                                        here since
                                        {' '}

                                        {this.state.basicInformation.joinDate}
                                    </Card.Footer>
                                </Card>

                                <Card
                                    className="card2 col-4 offset-2"
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
                            </div>

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
            </>

        );
    }
}

export default ClubHomePage;
