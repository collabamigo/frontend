import React, {Component} from 'react';
import Clublist from 'components/ClubList/ClubList.js';
// import {edit_button} from "./clubadmin.module.css";
import {clubDetails} from "./club.module.css"
// import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import {SvgIcon} from "common/SvgIcon";
import ClubAdminModal from "components/ClubAdmin/modal";


class ClubAdminPage extends Component {
    // static propTypes = {
    //     clubName : PropTypes.string.isRequired,
    // }

    constructor(props) {
        super(props)
        this.state = {
            currentModal: null,
            basicInformation : {
                name: "Salt & Pepper",
                announcements: [{id: "1", content:"Welcome"}],
                logoLink: "http://tasveer.iiitd.edu.in/images/logo.png",
                tagline: "The Photography Society of IIITD",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                coordinators:[
                    {
                        name:"Tushar Singh",
                        email:"shikhar@gmail.com",
                    },
                    {
                        name:"Prutyuy Singh",
                        email:"shikhar@gmail.com",
                    },
                ],
                memberSize: 10,
                socialmediaLink: {
                    instagram : "https://www.instagram.com/shikhar",
                    linkedin : "https://www.linkedin.com/shikhar",
                    facebook : "https://www.facebook.com/shikhar",
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
            },

        }
    }

    componentDidMount() {
        let caller = null;
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

    handleSubmitDescription(values) {
        const description = values[0]
        this.setState((prevState) => {
            return (
                {
                    ...prevState,
                    basicInformation: {
                        ...(prevState.basicInformation),
                        description: description
                    }
                })
        })
        this.handleCloseModal()
    }

    handleSubmitAnnouncements(values){
        const announcement_id=-1;
        // axios.get("connect/profile/").then(
        //     (res) => this.setState({
        //         handle: res.data[0].handle
        //     })
        // )
        this.setState((prevState) => {
            return (
                {
                    ...prevState,
                    basicInformation: {
                        ...(prevState.basicInformation),
                        announcements: [...(prevState.basicInformation.announcements) , {id:announcement_id, content:values[0]}]
                    }
                })
        })
        this.handleCloseModal()
    }

    handleSubmitPanel(values){
        this.setState((prevState) => {
            return (
                {
                    ...prevState,
                    basicInformation: {
                        ...(prevState.basicInformation),
                        socialmediaLink: {
                            facebook: values[0],
                            instagram: values[1],
                            linkedin: values[2],
                            website: values[3],
                        },
                        tagline: values[4]
                    }
                })
        })
        this.handleCloseModal()
    }

    handleCloseModal() {
        this.setState({
            currentModal: null,
        })
    }


    render(){
        console.log(this.state.basicInformation)
        return (
            <div className="row m-1">
                <div className="col-3 d-flex justify-content-around">
                    <div className="position-fixed">
                        <div className="row">
                            <Card
                                className="pt-2"
                                style={{ width: '18rem' }}
                            >

                                <button
                                    className="align-self-end btn btn-outline-warning col-2 material-icons"
                                    onClick={() => {
                                            this.setState({
                                                currentModal: "panel",
                                            });
                                        }}
                                    type="button"
                                >
                                    edit
                                </button>

                                <ClubAdminModal
                                    handleClose={this.handleCloseModal.bind(this)}
                                    handleSubmit={this.handleSubmitPanel.bind(this)}
                                    initialValues={[this.state.basicInformation.socialmediaLink.facebook,
                                    this.state.basicInformation.socialmediaLink.instagram,
                                    this.state.basicInformation.socialmediaLink.linkedin,
                                    this.state.basicInformation.socialmediaLink.website,
                                    this.state.basicInformation.tagline]}
                                    labels={['Facebook','Instagram','LinkedIn','Other website','Enter Your Clubs Catchphrase ']}
                                    show={this.state.currentModal === 'panel'}
                                />

                                <Card.Img
                                    src={this.state.basicInformation.logoLink}
                                    variant="top"
                                />

                                <Card.Body>
                                    <Card.Title className='fs-2 fw-bold text-start pb-2'>
                                        {this.state.basicInformation.name}
                                    </Card.Title>


                                    <Card.Subtitle className=" text-start pb-2">
                                        {this.state.basicInformation.tagline}
                                    </Card.Subtitle>

                                    <br />

                                    <div className="col text-center">
                                        <Card.Link
                                            className=""
                                            href={this.state.basicInformation.socialmediaLink.facebook}
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
                                            href={this.state.basicInformation.socialmediaLink.instagram}
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="20px"
                                                src="linkedin.svg"
                                                width="20px"
                                            />
                                        </Card.Link>

                                        <Card.Link
                                            href={this.state.basicInformation.socialmediaLink.linkedin}
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
                                            href={this.state.basicInformation.socialmediaLink.website}
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

                        {/*<div className="row">*/}

                        {/*    <Card>*/}

                        {/*        <button*/}

                        {/*            className="btn btn-outline-warning col-2 pt-2"*/}

                        {/*            onClick={this.handleEditPanel}*/}

                        {/*            type="button"*/}

                        {/*        >*/}

                        {/*            <span*/}

                        {/*                className="material-icons"*/}

                        {/*            >*/}

                        {/*                edit*/}

                        {/*            </span>*/}

                        {/*        </button>*/}

                        {/*        <Card.Title className='fs-2 text-start'>*/}

                        {/*            Coordinators:*/}

                        {/*        </Card.Title>*/}

                        {/*        <CardBody>*/}

                        {/*            <div>*/}

                        {/*                <ul>*/}

                        {/*                    <li>*/}

                        {/*                        {this.state.basicInformation.coordinators[0].name}*/}

                        {/*                    </li>*/}

                        {/*                    <li>*/}

                        {/*                        {this.state.basicInformation.coordinators[1].name}*/}

                        {/*                    </li>*/}

                        {/*                </ul>*/}

                        {/*                <br />*/}

                        {/*                Member Size:*/}

                        {/*                {" "}*/}

                        {/*                {this.state.basicInformation.memberSize}*/}

                        {/*            </div>*/}

                        {/*        </CardBody>*/}

                        {/*    </Card>*/}

                        {/*</div>*/}
                    </div>
                </div>

                <div className="col-9 justify-content-around">
                    <Card>
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
                                            src={this.state.basicInformation.clubBanners    [2]}
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
                                    <ClubAdminModal
                                        handleClose={this.handleCloseModal.bind(this)}
                                        handleSubmit={this.handleSubmitDescription.bind(this)}
                                        initialValues={[this.state.basicInformation.description]}
                                        labels={['Description']}
                                        show={this.state.currentModal === 'description'}
                                    />

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

                                            {" "}

                                        </div>

                                        <p className="text-start h6">
                                            {this.state.basicInformation.description}
                                        </p>

                                    </div>

                                    <div className="col-auto">
                                        <button
                                            className="btn btn-outline-warning material-icons col-auto"
                                            onClick={() => {
                                                    this.setState({
                                                        currentModal: "description",
                                                    });
                                                }}
                                            type="button"
                                        >
                                            edit
                                        </button>
                                    </div>

                                    <div className="offset-1 col-5">
                                        <div className="text-center h2">
                                            Announcements
                                            {" "}

                                            <button
                                                className="align-self-end  btn btn-outline-success material-icons"
                                                onClick={() => {
                                                    this.setState({
                                                        currentModal: "Announcements",
                                                    });
                                                }}
                                                type="button"
                                            >
                                                add_circle
                                            </button>

                                            <ClubAdminModal
                                                handleClose={this.handleCloseModal.bind(this)}
                                                handleSubmit={this.handleSubmitAnnouncements.bind(this)}
                                                initialValues={["Add here"]}
                                                labels={['Add Announcements']}
                                                show={this.state.currentModal === 'Announcements'}
                                            />
                                        </div>

                                        <div className="">
                                            <ul className="list">
                                                {this.state.basicInformation.announcements.map(item => (
                                                    <ul key={item}>
                                                        <span className="material-icons-outlined">
                                                            notifications
                                                        </span>

                                                        {item["content"]}
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

                    <Card className="row">
                        <Card.Body className="mt-3">
                            <Card.Title className="card-title fs-2 header-color text-left">
                                Events

                                {" "}

                                <button
                                    className="align-self-end  btn btn-outline-success material-icons"
                                    onClick={() => {
                                        this.setState({
                                            currentModal: "Announcements",
                                        });
                                    }}
                                    type="button"
                                >
                                    edit
                                </button>
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
                </div>
            </div>

        );
    }
}

export default ClubAdminPage;
