/* eslint-disable react/no-array-index-key */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "react-bootstrap/Image";
import axios from "utils/axios";

import styles from "styles/index.module.css";
import ClubCard from "../common/HomePageCards/ClubCard.js";
import EventTalkCard from "../common/HomePageCards/EventTalkCard.js";


export default class AuthenticatedHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clubList: [],
            eventList: [],
            // eslint-disable-next-line react/no-unused-state
            talkList: [],
        };
    }

    componentDidMount() {
        axios.get("/club/feed").then((res) => {
            this.setState({
                clubList:res.data.clubs,
                eventList:res.data.competitions
            });
        }).then(console.log(this.state.clubList));
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {

        const responsive = {
                        superLargeDesktop: {
                          // the naming can be any, depends on you.
                          breakpoint: { max: 4000, min: 3000 },
                          items: 5
                        },
                        desktop: {
                          breakpoint: { max: 3000, min: 1024 },
                          items: 3
                        },
                        tablet: {
                          breakpoint: { max: 1024, min: 464 },
                          items: 2
                        },
                        mobile: {
                          breakpoint: { max: 464, min: 0 },
                          items: 1
                        }
                      };

        const responsive2 = {
                        superLargeDesktop: {
                          // the naming can be any, depends on you.
                          breakpoint: { max: 4000, min: 3000 },
                          items: 5
                        },
                        desktop: {
                          breakpoint: { max: 3000, min: 1024 },
                          items: 5
                        },
                        tablet: {
                          breakpoint: { max: 1024, min: 464 },
                          items: 2
                        },
                        mobile: {
                          breakpoint: { max: 464, min: 0 },
                          items: 1
                        }
                      };

        return (
            <div>
                <div>
                    <div className={styles.firstSection}>
                        <div className={styles.firstsectionInner + " row"}>
                            <div className={styles.firstsectionInnerleft}>
                                <Image
                                    alt="Front Photo"
                                    className={styles.firstsectionInnerleftImage}
                                    fluid
                                    rounded
                                    src="/img/jpg/IntroImage.png"
                                />
                            </div>

                            <div className={styles.firstsectionInnerright}>
                                <span className={styles.firstsectionInnerheading + " display-2 fw-bold text-primary"}>
                                    Welcome to CollabAmigo!
                                </span>

                                <br />

                                <span className={styles.firstsectionInnertext + " text-primary"}>
                                    Participate in competitions in college,
                                </span>

                                <span className={styles.firstsectionInnertext + " text-primary"}>
                                    have lots of fun!
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.secondSection}>
                        <div className={styles.secondsectionInner}>
                            <div className={styles.secondsectionHeading + " text-primary"}>
                                Competitions
                            </div>

                            <br />


                            <div className={styles.secondsectionMiddle}>
                                <Carousel responsive={responsive}>

                                    {this.state.eventList.map((option, index) => (
                                        <EventTalkCard
                                            element={option}
                                            key={index}
                                        />
                                    ))}

                                </Carousel>
                            </div>

                            <div className={styles.secondsectionfooter +" d-flex flex-row-reverse bd-highlight"}>
                                <div className="p-2 bd-highlight" />

                                <div className="p-2 bd-highlight" />

                                {/* <div className="p-2 bd-highlight">
                                    See More
                                </div> */}
                            </div>

                        </div>
                    </div>

                    <div className="thirdsection">
                        <div className={styles.thirdsectionInner}>
                            <div className={styles.thirdsectionHeading + " text-primary"}>
                                {' '}
                                Clubs & Organizations

                            </div>

                            <br />

                            <div className={styles.thirdsectionMiddle}>
                                <Carousel responsive={responsive2}>

                                    {this.state.clubList.map((option, index) => (
                                        <ClubCard
                                            key={index}
                                            value={option}
                                        />
                                        ))}
                                </Carousel>
                            </div>

                            <div className={styles.thirdsectionfooter +" d-flex flex-row-reverse bd-highlight"}>
                                <div className="p-2 bd-highlight" />

                                <div className="p-2 bd-highlight" />

                                {/* <div className="p-2 bd-highlight">
                                    See More
                                </div> */}
                            </div>

                        </div>
                    </div>

                    {/* <div className="fourthsection">
                        <div className={styles.fourthsectionInner}>
                            <div className={styles.fourthsectionHeading}>
                                {' '}
                                Talks , WorkShops and Seminars
                            </div>

                            <br />


                            <div className={styles.fourthsectionMiddle}>
                                <Carousel responsive={responsive}>
                                    {this.state.talkList.map((option, index) => (
                                        <EventTalkCard
                                            key={option}
                                            value={index}
                                        />
                                    ))}

                                </Carousel>
                            </div>

                            <div className={styles.fourthsectionfooter +" d-flex flex-row-reverse bd-highlight"}>
                                <div className="p-2 bd-highlight" />

                                <div className="p-2 bd-highlight" />

                                <div className="p-2 bd-highlight">
                                    See More
                                </div>
                            </div>

                        </div>
                    </div> */}

                </div>
            </div>

            // <div className=" h-75 w-100 justify-content-center card-group ">
            //     <div className="row ">
            //         <Fade
            //             className="col-lg-4 col-md-6 col-sm-12 h-auto mt-2 mb-3 card-group"
            //             direction={isMobile ? "left" : "up"}
            //             triggerOnce
            //         >
            //             <Card className="h-auto card ms-4 mr-1 zoom-my-card min-vh-80 justify-content-center mb-3">
            //                 <div className="justify-content-center">
            //                     <SvgIcon
            //                         src="help_others.svg"
            //                         width="97%"
            //                     />
            //                 </div>

            //                 <Card.Body className="mt-3">
            //                     <Card.Title className="fw-bold header-color">
            //                         {this.state.first}
            //                     </Card.Title>

            //                     <br />

            //                     <Card.Text className="card-text text-muted h5">
            //                         {this.state.third}
            //                     </Card.Text>
            //                 </Card.Body>

            //                 <Card.Footer className="footer-custom pb-4">
            //                     <Link
            //                         className="col-auto btn btn-primary"
            //                         to="/help"
            //                     >
            //                         {this.state.second}
            //                     </Link>
            //                 </Card.Footer>
            //             </Card>

            //             <Card className="card h-auto mx-2 zoom-my-card mb-3">
            //                 <SvgIcon
            //                     height="56%"
            //                     src="ask_for_help.svg"
            //                     width="100%"
            //                 />

            //                 <Card.Body className="mt-3">
            //                     <Card.Title className="fw-bold header-color">
            //                         GET SOLUTIONS
            //                     </Card.Title>

            //                     <br />

            //                     <Card.Text className="card-text h5 text-muted ">
            //                         <span>
            //                             Stack Overflow:404!
            //                         </span>
            //                         Answer not found,

            //                         <br />
            //                         The button below can solve it.
            //                     </Card.Text>
            //                 </Card.Body>

            //                 <Card.Footer className="footer-custom pb-4">
            //                     <Link
            //                         className="col-auto btn btn-primary"
            //                         to="/ask"
            //                     >
            //                         Ask for help
            //                     </Link>
            //                 </Card.Footer>
            //             </Card>

            //             <Card className="card h-auto mx-2 zoom-my-card mb-3">
            //                 <SvgIcon
            //                     height="56%"
            //                     src="collaborate.svg"
            //                     width="100%"
            //                 />

            //                 <Card.Body className="mt-3">
            //                     <Card.Title className="card-title fw-bold header-color">
            //                         LET&apos;S COLLABORATE
            //                     </Card.Title>

            //                     <br />

            //                     <Card.Text className="card-text h5 text-muted">
            //                         Find new projects to work. Apply for teams
            //                         and Collaborations. Lets keep the learning
            //                         and helping community alive.
            //                     </Card.Text>
            //                 </Card.Body>

            //                 <Card.Footer className="footer-custom pb-4">
            //                     <Link
            //                         className="col-auto btn btn-primary"
            //                         to="/event"
            //                     >
            //                         Event Page
            //                     </Link>
            //                 </Card.Footer>
            //             </Card>
            //         </Fade>
            //     </div>

            //     <div className="row">
            //         <Fade
            //             className=" h-auto mt-2 mb-3 "
            //             direction={isMobile ? "left" : "up"}
            //             triggerOnce
            //         >
            //             <Card className="card h-auto mx-2 zoom-my-card mb-3">

            //                 <Card.Body className="mt-3">
            //                     <Card.Title className="card-title fw-bold header-color text-left">
            //                         Associated Clubs
            //                     </Card.Title>

            //                     <br />

            //                     <Card.Text className="card-text h5 text-muted">
            //                         <div>
            //                             Find new projects to work. Apply for teams
            //                             and Collaborations. Lets keep the learning
            //                             and helping community alive.ggffyyfyt
            //                         </div>

            //                         <br />

            //                         <br />

            //                         <div>
            //                             <ClubList
            //                                 ItemList={this.state.clubList}
            //                                 Type="Club"
            //                             />
            //                         </div>
            //                     </Card.Text>
            //                 </Card.Body>
            //             </Card>
            //         </Fade>

            //     </div>


            // </div>
        );
    }
}

// TODO: Attribution to freepik.com pending
