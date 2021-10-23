import React, { Component } from 'react';
// import axios from "utils/axios";
// import backend from "../../env";
// import Image from 'react-bootstrap/Image'
import Clublist from 'components/ClubList/ClubList.js';
import {clubDetails} from "./club.module.css"
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import {isBrowser} from "../utils/auth";
import {SvgIcon} from "../common/SvgIcon";
import Faq from "./faq";
// import Figure from 'react-bootstrap/Figure';


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
                Name: "Salt & Pepper",
                logoLink: "http://tasveer.iiitd.edu.in/images/logo.png",
                tagline: "The Photography Society of IIITD",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                coordinators:[
                    {
                        name:"Tushar Singh",
                        email:"heemankv@gmail.com",
                    },
                    {
                        name:"Prutyuy Singh",
                        email:"heemankv@gmail.com",
                    },
                ],
                memberSize: 10,
                socialmediaLink: {
                    instagram : "https://www.instagram.com/heemank_v",
                    linkedin : "https://www.linkedin.com/heemank_v",
                    facebook : "https://www.facebook.com/heemank_v",
                    website : "https://www.collabconnect.com/404",
                },
                joinDate:"26122020",
                clubBanners:["https://via.placeholder.com/1600X480","https://via.placeholder.com/1600X480","https://via.placeholder.com/1600X480"],
                eventList: [
                    {name: "Event1", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event2", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event3", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event3", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event4", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event5", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event6", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event7", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event8", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event9", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event10", logo: "https://via.placeholder.com/70X70"},
                    {name: "Event11", logo: "https://via.placeholder.com/70X70"},
                ],
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
        // axios.get("/club/" + caller)
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
            <div className="row m-1">
                <div className="col-3 d-flex justify-content-around">
                    <div className="position-fixed">
                        <div className="row">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img
                                    src={this.state.basicInformation.logoLink}
                                    variant="top"
                                />

                                <Card.Body>
                                    <Card.Title className='fs-2 fw-bold text-start pb-2'>
                                        {this.state.basicInformation.Name}
                                    </Card.Title>


                                    <Card.Subtitle className=" text-start pb-2">
                                        {this.state.basicInformation.tagline}
                                    </Card.Subtitle>

                                    <br />

                                    <div className="col text-center">
                                        <Card.Link
                                            className=""
                                            href="https://www.linkedin.com/in/"
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="20px"
                                                src="linkedin.svg"
                                                width="20px"
                                            />
                                        </Card.Link>

                                        <Card.Link
                                            className=""
                                            href="https://www.linkedin.com/in/"
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="20px"
                                                src="linkedin.svg"
                                                width="20px"
                                            />
                                        </Card.Link>

                                        <Card.Link
                                            href="https://www.github.com/"
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="25px"
                                                src="github.svg"
                                                width="25px"
                                            />
                                        </Card.Link>

                                        <Card.Link
                                            className=""
                                            href="https://www.linkedin.com/in/"
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="20px"
                                                src="linkedin.svg"
                                                width="20px"
                                            />
                                        </Card.Link>

                                        <Card.Link
                                            href="https://www.github.com/"
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="25px"
                                                src="github.svg"
                                                width="25px"
                                            />
                                        </Card.Link>
                                    </div>

                                    {/* <Button variant="primary">
                                    Go somewhere
                                </Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="col-9">
                    <Card>

                        <Card.Header className="text-start">
                            About the Club
                        </Card.Header>

                        <Card.Body>
                            <div className="">
                                <Carousel
                                    nextIcon={
                                        <span 
                                            aria-hidden="true"
                                            className="carousel-control-next-icon"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='blue'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`,
                                            }}

                                        />
                                    }
                                    prevIcon={
                                        <span 
                                            aria-hidden="true"
                                            className="carousel-control-prev-icon "
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='blue'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")`,
                                            }}
                                        />
                                    }
                                >
                                    <Carousel.Item>
                                        <img
                                            alt="First slide"
                                            className="d-block w-100"
                                            src={this.state.basicInformation.clubBanners[0]}
                                        />

                                        <Carousel.Caption>

                                            <p>
                                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            alt="Second slide"
                                            className="d-block w-100"
                                            src={this.state.basicInformation.clubBanners[1]}
                                        />

                                        <Carousel.Caption>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            alt="Third slide"
                                            className="d-block w-100"
                                            src={this.state.basicInformation.clubBanners[2]}
                                        />

                                        <Carousel.Caption>

                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                                <br />

                                <div className={clubDetails}>
                                    <div>
                                        Coordinators:
                                        {' '}

                                        {this.state.basicInformation.coordinators[0].name}
                                        ,

                                        {' '}

                                        {this.state.basicInformation.coordinators[1].name}
                                    </div>

                                    <div>
                                        Member Size:
                                        {' '}

                                        {this.state.basicInformation.memberSize}
                                    </div>
                                </div>

                                <hr />

                                <div className="d-flex">
                                    <div className="col-5">
                                        <div className="text-center h2">
                                            Description
                                        </div>

                                        <p className="text-start h6">
                                            {this.state.basicInformation.description}
                                        </p>

                                    </div>

                                    <div className="offset-2 col-5">
                                        <div className="text-center h2">
                                            Announcements
                                        </div>

                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li >
                                                    <span className="material-icons-outlined">
                                                        notifications
                                                    </span>

                                                    <span>
                                                        hellloooo
                                                    </span>
                                                </li>

                                                <li>
                                                    <span className="material-icons-outlined">
                                                        last_page
                                                    </span>

                                                    <span>
                                                        hellloooo
                                                    </span>
                                                </li>

                                                <li>
                                                    <span>
                                                        hellloooo
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>

                    <br />

                    <Card className="row">
                        <Card.Body className="mt-3">
                            <Card.Title className="card-title fs-3 header-color text-left">
                                Events
                            </Card.Title>

                            <br />

                            <Card.Text className="card-text h5 text-muted col-12">
                                <div>
                                    <Clublist
                                        ItemList={this.state.basicInformation.eventList}
                                        Type="Event"
                                    />
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <br />

                    <br />

                    <br />

                    <Faq />

                </div>
            </div>

        );
    }
}

export default ClubHomePage;
