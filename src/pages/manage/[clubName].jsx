import React, {Component} from 'react';
import Clublist from 'components/ClubList/ClubList.js';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import {SvgIcon} from "common/SvgIcon";
import ClubAdminModal from "components/ClubAdmin/modal";
import axios from "utils/axios";

class ClubAdminPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentModal: null,
            basicInformation: {},
            competitions: [],
            announcements: [],
            basicInformationStatic: {
                // announcements: [{id: "1", content:"Welcome"}],
                logoLink: "http://tasveer.iiitd.edu.in/images/logo.png",
                coordinators: [
                    {
                        name: "Tushar Singh",
                        email: "shikhar@gmail.com",
                    },
                    {
                        name: "Prutyuy Singh",
                        email: "shikhar@gmail.com",
                    },
                ],
                joinDate: "26122020",
                clubBanners: ["https://via.placeholder.com/1600X480", "https://via.placeholder.com/1600X480", "https://via.placeholder.com/1600X480"],
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
        axios.get("club/club/Byld/?format=json").then((res) => {
            let announcements_list = []
            let competition_list = []
            this.setState({basicInformation: res.data});
            announcements_list = res.data.announcements

            competition_list = res.data.competitions

            console.log("lol", competition_list)

            for (let temp in announcements_list) {
                axios.get("club/announcements/" + announcements_list[temp] + "/?format=json").then((ress) => {
                    this.setState((prevState) => {
                        return (
                            {
                                ...(prevState.announcements),
                                announcements: [...(prevState.announcements), {
                                    id: ress.data.id,
                                    content: ress.data.content
                                }]
                            })
                    })
                });
            }
            for (let temp in competition_list) {
                axios.get("club/competition/" + competition_list[temp] + "/?format=json").then((r) => {
                    this.setState((prevState) => {
                        return (
                            {
                                ...(prevState.competitions),
                                competitions: [...(prevState.competitions), {
                                    id: r.data.id, club: r.data.club,
                                    name: r.data.name, description: r.data.description,
                                    on_going: r.data.on_going, disabled: r.data.disabled
                                }]
                            })
                    })
                });
            }

        });
    }

    shouldComponentUpdate() {
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
        const payload = {
            description: this.state.basicInformation.description
        }
        axios.patch("club/club/" + this.state.basicInformation.username + "/", payload)
            .then(() => this.setState(payload))
    }

    handleSubmitAnnouncements(values) {
        axios.post("club/announcements/", {
            club: "Byld",
            content: values[0]
        }).then((ress) => {
            this.setState((prevState) => {
                return (
                    {
                        ...(prevState.announcements),
                        announcements: [...(prevState.announcements), {id: ress.data.id, content: ress.data.content}]
                    })
            })
        });
        this.handleCloseModal()
    }

    handleSubmitPanel(values) {
        this.setState((prevState) => {
            return (
                {
                    ...prevState,
                    basicInformation: {
                        ...(prevState.basicInformation),
                        facebook: values[0],
                        instagram: values[1],
                        linkedin: values[2],
                        website: values[3],
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

    render() {
        console.log(this.state.basicInformation)
        console.log(this.state.competitions)
        console.log(this.state.announcements)
        return (
            <div className="row m-1">
                <div className="col-3 d-flex justify-content-around">
                    <div className="position-fixed">
                        <div className="row">
                            <Card
                                className="pt-2"
                                style={{width: '18rem'}}
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
                                    initialValues={[this.state.basicInformation.facebook,
                                        this.state.basicInformation.instagram,
                                        this.state.basicInformation.linkedin,
                                        this.state.basicInformation.website,
                                        this.state.basicInformation.tagline]}
                                    labels={['Facebook', 'Instagram', 'LinkedIn', 'Other website', 'Enter Your Clubs Catchphrase ']}
                                    show={this.state.currentModal === 'panel'}
                                />

                                <Card.Img
                                    src={this.state.basicInformationStatic.logoLink}
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

                        {/*                        {this.state.basicInformationStatic.coordinators[0].name}*/}

                        {/*                    </li>*/}

                        {/*                    <li>*/}

                        {/*                        {this.state.basicInformationStatic.coordinators[1].name}*/}

                        {/*                    </li>*/}

                        {/*                </ul>*/}

                        {/*                <br />*/}

                        {/*                Member Size:*/}

                        {/*                {" "}*/}

                        {/*                {this.state.basicInformationStatic.memberSize}*/}

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
                                            src={this.state.basicInformationStatic.clubBanners[0]}
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
                                            src={this.state.basicInformationStatic.clubBanners[1]}
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
                                            src={this.state.basicInformationStatic.clubBanners    [2]}
                                        />

                                        <Carousel.Caption>

                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                                <br />

                                <div>
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

                                        {this.state.basicInformationStatic.coordinators[0].name}
                                        ,

                                        {' '}

                                        {this.state.basicInformationStatic.coordinators[1].name}
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
                                                {this.state.announcements.map(item => (
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
                                        ItemList={this.state.basicInformationStatic.eventList}
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
