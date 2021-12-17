import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import BCarousel from 'react-bootstrap/Carousel'
import {SvgIcon} from "common/SvgIcon";
import axios from "utils/axios";
import {withRouter} from "next/router";
import PropTypes from "prop-types";
import {ListGroup} from "react-bootstrap";
import RCarousel from "react-multi-carousel";
import ClubCard from "components/ClubList/ClubCard";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.scss";
import Loading from "components/Loading";
import isEmpty from "lodash/isEmpty";

class ClubHomePage extends Component {

    static propTypes = {
        clubName: PropTypes.string.isRequired,
        router: PropTypes.shape(
            {
                isReady: PropTypes.bool.isRequired,
                query: PropTypes.shape({
                    clubName: PropTypes.string.isRequired
                }),

            }
        ).isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            basicInformation: [],
            competitions:null,
            announcements: null,
            basicInformationStatic:{
                logoLink: "http://tasveer.iiitd.edu.in/images/logo.png",
                clubBanners:[
                    "https://via.placeholder.com/1600X480",
                    "https://via.placeholder.com/1600X480",
                    "https://via.placeholder.com/1600X480"
                ],
            },
        }
    }

    componentDidMount() {
        this.componentDidUpdate()
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate () {
        if (this.props.router.isReady){
            if (isEmpty(this.state.basicInformation))
                axios.get("club/club/"+ this.props.router.query.clubName +"/").then((res) => {
                    this.setState({basicInformation: res.data});
            if (this.state.announcements === null)
                axios.get("club/clubannouncements/" + this.props.router.query.clubName + "/").
                    then((res) => {
                        this.setState({announcements : res.data})
                    });
            if (this.state.competitions === null)
                axios.get("club/clubcompetitions/" + this.props.router.query.clubName + "/").
                    then((res) => {
                        this.setState({competitions: res.data})
                    });
            });
        }
    }




    render(){
        const isLoading = isEmpty(this.state.basicInformation);
        if (isLoading || this.state.announcements === null || this.state.competitions === null){
            return <Loading />; // LOADING SCREEN
        }


        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: {max: 4000, min: 3000},
                items: 5
            },
            desktop: {
                breakpoint: {max: 3000, min: 1024},
                items: 3
            },
            tablet: {
                breakpoint: {max: 1024, min: 464},
                items: 2
            },
            mobile: {
                breakpoint: {max: 464, min: 0},
                items: 1
            }
        };


        return (
            <div className="row m-md-3">
                <div className="mx-3 col-md-2 col-lg-2 col-sm-12 d-flex justify-content-around">
                    <div className={styles.clubcard}>
                        <Card
                            className="pt-2"
                            style={{ width: '18rem' }}
                        >

                            <Card.Img
                                src={this.state.basicInformationStatic.logoLink}
                                variant="top"
                            />

                            <Card.Body>
                                <Card.Title className='fs-2 fw-bold text-start pb-2'>
                                    {this.state.basicInformation.name}
                                </Card.Title>


                                <Card.Subtitle className={styles.tagline}>
                                    {this.state.basicInformation.tagline}
                                </Card.Subtitle>

                                <br />

                                <div className="col text-center">
                                    <Card.Link
                                        className=""
                                        href={this.state.basicInformation.facebook}
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
                                        href={this.state.basicInformation.instagram}
                                        target="_blank"
                                    >
                                        <SvgIcon
                                            height="20px"
                                            src="linkedin.svg"
                                            width="20px"
                                        />
                                    </Card.Link>

                                    <Card.Link
                                        href={this.state.basicInformation.linkedin}
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
                                        href={this.state.basicInformation.website}
                                        target="_blank"
                                    >
                                        <SvgIcon
                                            height="20px"
                                            src="linkedin.svg"
                                            width="20px"
                                        />
                                    </Card.Link>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className={styles.clubBox + " col-md-9 col-lg-9 col-sm-12 justify-content-around"}>
                    <Card className={styles.leftCard1}>
                        <Card.Body>
                            <div className="">
                                <BCarousel
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
                                    <BCarousel.Item>
                                        <img
                                            alt="First slide"
                                            className="d-block w-100"
                                            src={this.state.basicInformationStatic.clubBanners[0]}
                                        />

                                        <BCarousel.Caption>

                                            <p>
                                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                                            </p>
                                        </BCarousel.Caption>
                                    </BCarousel.Item>

                                    <BCarousel.Item>
                                        <img
                                            alt="Second slide"
                                            className="d-block w-100"
                                            src={this.state.basicInformationStatic.clubBanners[1]}
                                        />

                                        <BCarousel.Caption>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </BCarousel.Caption>
                                    </BCarousel.Item>

                                    <BCarousel.Item>
                                        <img
                                            alt="Third slide"
                                            className="d-block w-100"
                                            src={this.state.basicInformationStatic.clubBanners    [2]}
                                        />

                                        <BCarousel.Caption>

                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </BCarousel.Caption>
                                    </BCarousel.Item>
                                </BCarousel>

                                <br />

                                <div>
                                    <div className={styles.coordinators}>
                                        Coordinators:
                                        {' '}

                                        {this.state.basicInformation.admins.join(", ")}
                                    </div>

                                    <div className={styles.memberSize}>
                                        Member Size:
                                        {' '}

                                        {this.state.basicInformation.memberSize}
                                    </div>
                                </div>

                                <hr />


                                <div className="d-flex">
                                    <div className={styles.descriptionBox + " col-md-5 col-lg-5 col-sm-6"}>
                                        <div className={styles.descriptionHeading}>
                                            Description

                                            {" "}

                                        </div>

                                        <p className={styles.description}>
                                            {this.state.basicInformation.description}
                                        </p>

                                    </div>

                                    <div className="offset-1 col-md-5 col-lg-5 col-sm-9">
                                        <div className={styles.announcementsHeading}>
                                            Announcements
                                            {" "}

                                        </div>

                                        <div className="overflow-auto">
                                            <ul
                                                className="list"
                                                style={{ height: '250px'}}
                                            >
                                                {this.state.announcements.reverse().map(item => (
                                                    <ul key={item}>
                                                        <ListGroup
                                                            as="ol"
                                                        >
                                                            <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start my-2"
                                                            >
                                                                <div className={styles.notifications}>
                                                                    <div className={styles.notificationHeading}>
                                                                        {item["content"]}
                                                                    </div>

                                                                    {/*{this.state.currentTime}*/}

                                                                    {/*{item["timestamp"].split("T")[1].split(".")[0]}*/}
                                                                </div>

                                                                <span
                                                                    className="position-absolute start-95  p-1
                                                                    bg-primary border border-light rounded-circle"
                                                                >
                                                                    <span className="visually-hidden">
                                                                        New alerts
                                                                    </span>
                                                                </span>
                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                    </ul>
                                                ))}

                                            </ul>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>

                    <br />

                    <Card className={styles.leftCard2}>
                        <Card.Body className="mt-3">
                            <Card.Title className="card-title fs-2 header-color text-left">
                                Events
                                {" "}
                            </Card.Title>

                            <br />

                            <Card.Text className="card-text h5 col-12">
                                <div>
                                    <RCarousel responsive={responsive}>
                                        {this.state.competitions.map((option, index) => (
                                            <ClubCard
                                                Type="Event"
                                                element={option}
                                                key={option.description}
                                                value={index}
                                            />
                                        ))}

                                    </RCarousel>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <br />
                </div>
            </div>

        );
    }
}

export default withRouter(ClubHomePage);
