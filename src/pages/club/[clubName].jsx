import lodashMap from "lodash/map";
import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import BCarousel from 'react-bootstrap/Carousel'
import {SvgIcon} from "common/SvgIcon";
import Image from "react-bootstrap/Image";
import axios from "utilities/axios";
import {withRouter} from "next/router";
import PropTypes from "prop-types";
import {ListGroup} from "react-bootstrap";
import RCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import EventTalkCard from "../../common/HomePageCards/EventTalkCard";
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
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " +
            today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        this.state = {
            basicInformation: null,
            bannerLinks:null,
            competitions:null,
            announcements: null,
            currentDateTime : date,
            logoUrl: null,
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
            if (!this.state.logoUrl) {
                const storage = getStorage();
                getDownloadURL(ref(storage, "data/" + this.props.router.query.clubName + "/uneditable/logo.png"))
                    .then(url => this.setState({logoUrl: url}));
            }
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
            if (this.state.bannerLinks === null && this.state.basicInformation !== null) {
                const storage = getStorage();
                if(this.state.basicInformation.picture) {
                JSON.parse(this.state.basicInformation.picture).map((link, index) => {

                    getDownloadURL(ref(storage, link)).then((url) => {

                        this.setState((prevState) => ({
                            ...prevState,
                            bannerLinks: {
                                ...(prevState.bannerLinks),
                                [index]: url,
                            }
                        }))
                    })
                })}


            }
        }
    }

    renderFacebook(){
         if (this.state.basicInformation.facebook){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.facebook}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="facebook.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderInstagram(){
        if(this.state.basicInformation.instagram){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.instagram}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="instagram.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderDiscord(){
        if(this.state.basicInformation.discord){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.discord}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="discord.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderLinkedin(){
        if(this.state.basicInformation.linkedin){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.linkedin}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="linkedin.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }

    }

    renderTelegram(){
        if(this.state.basicInformation.telegram){
            return(
                <Card.Link
                    href={this.state.basicInformation.telegram}
                    target="_blank"
                >
                    <SvgIcon
                        height="25px"
                        src="telegram.svg"
                        width="25px"
                    />
                </Card.Link>
            )
        }
    }

    renderGithub(){
        if(this.state.basicInformation.github){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.github}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="github.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderMail(){
        if(this.state.basicInformation.mail){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.mail}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="mail.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    renderOther(){
        if(this.state.basicInformation.other){
            return(
                <Card.Link
                    className=""
                    href={this.state.basicInformation.other}
                    target="_blank"
                >
                    <SvgIcon
                        height="20px"
                        src="website.svg"
                        width="20px"
                    />
                </Card.Link>
            )
        }
    }

    getNotification(date1,date2){
        date1 = new Date(date1)
        date2 = new Date(date2.split("T")[0] +" " + date2.split("T")[1].split(".")[0])
        if (Math.floor((Math.abs(date2 - date1)) / (1000 * 60 * 60)) <= 1){
            return(
                <span
                    className="position-absolute start-93  p-1
                    bg-primary border border-light rounded-circle"
                >
                    <span className="visually-hidden">
                        New alerts
                    </span>
                </span>
            )
        }
    }

    getDate(date1,date2){
        let year1 = new Date (date2.split("T")[0])
        let year2 = new Date(date1.split(" ")[0])
        date1 = new Date(date1)
        date2 = new Date(date2.split("T")[0] +" " + date2.split("T")[1].split(".")[0])

        if (Math.floor((Math.abs(year2-year1))/(1000*60*60*24))>0){
            return(Math.floor((Math.abs(year2-year1))/(1000*60*60*24)) + " days ago")
        }

        else{
            if (Math.floor((Math.abs(date2-date1))/(1000*60))<=0 && Math.floor((Math.abs(date2-date1))/(1000*60*60))<=0){
                return(" seconds ago")
            }
            else if (Math.floor((Math.abs(date2-date1))/(1000*60*60)) <= 0 && Math.floor((Math.abs(date2-date1))/(1000*60)) > 0){
                return(Math.floor((Math.abs(date2-date1))/(1000*60)) + " mins ago")
            }
            else{
                return(Math.floor((Math.abs(date2-date1))/(1000*60*60))+ " hrs ago")
            }
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
                                src={this.state.logoUrl}
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
                                    {this.renderFacebook()}

                                    {this.renderInstagram()}

                                    {this.renderDiscord()}

                                    {this.renderLinkedin()}

                                    {this.renderTelegram()}

                                    {this.renderGithub()}

                                    {this.renderMail()}

                                    {this.renderOther()}

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
                                    {lodashMap(this.state.bannerLinks, link =>
                                        (
                                            <BCarousel.Item key={link}>
                                                <Image
                                                    alt="First slide"
                                                    className={"d-block w-100 "+styles.bannerImage}
                                                    fluid
                                                    rounded
                                                    src={link}
                                                />
                                            </BCarousel.Item>)
                                    )}
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


                                <div className={styles.mainBox + " row"}>
                                    <div className={styles.descriptionBox + " col"}>
                                        <div className={styles.descriptionHeading}>
                                            Description

                                            {" "}

                                        </div>

                                        <p className={styles.description}>
                                            {this.state.basicInformation.description}
                                        </p>

                                    </div>

                                    <div className={styles.announcementsBox + " col"}>
                                        <div className={styles.announcementsHeading}>
                                            Announcements
                                            {" "}
                                        </div>

                                        <div className="overflow-auto">
                                            <ul
                                                className="list p-0 m-0 pe-2"
                                                style={{ height: '250px'}}
                                            >
                                                {this.state.announcements.map(item => (
                                                    <ul
                                                        className="pe-2"
                                                        key={item}
                                                    >
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

                                                                    <div>
                                                                        {this.getDate(this.state.currentDateTime, item["timestamp"])}
                                                                    </div>

                                                                </div>

                                                                {this.getNotification(this.state.currentDateTime, item["timestamp"])}

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
                                        {this.state.competitions.map((option) => (
                                            <EventTalkCard
                                                element={option}
                                                key={option.description}
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
