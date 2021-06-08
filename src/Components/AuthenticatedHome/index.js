
import {Link, Route, Switch} from "react-router-dom";
import Card from "react-bootstrap/Card";
import React from "react";
// import {Fade} from "react-awesome-reveal";
// import {isMobile} from "react-device-detect";
import {SvgIcon} from "../../common/SvgIcon";
import './index.css'

function Index() {
    return (
        <div>

            <Switch>
                <Route
                    exact
                    path="/"
                >

                    {/*<DarkMode />*/}
                </Route>
            </Switch>


            <div className="container-fluid lowl">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col card-stype">
                        <Card>
                            <SvgIcon 
                                className="image-setting-1"
                                src="help_others.svg"
                            />

                            <Card.Body>
                                <Card.Title className="card-title font-weight-bold">
                                    HELP OTHERS
                                </Card.Title>

                                <br />

                                <Card.Text className="card-text masthead">
                                    Solve other&apos;s doubts and be the mentor you always wanted.
                                    Using our platform you can reach a larger curious community.
                                </Card.Text>

                                <Link
                                    className="col-auto btn btn-primary"
                                    to="/help"
                                >
                                    Help others
                                </Link>

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col  card-stype">
                        <Card>
                            <SvgIcon
                                className="image-setting-2"
                                src="ask_for_help.svg"
                            />

                            <Card.Body className="card-body">
                                <Card.Title className="card-title font-weight-bold">
                                    ASK FOR HELP
                                </Card.Title>

                                <br />

                                <Card.Text className="card-text">
                                    <b>
                                        Stack Overflow:404!
                                    </b>

                                    {" "}
                                    Answer not found,

                                    <br />
                                    The button below can solve it
                                </Card.Text>

                                <br />

                                <Link
                                    className="col-auto btn btn-primary"
                                    to="/ask"
                                >
                                    Ask for help
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col card-stype">
                        <Card>
                            <SvgIcon
                                className="image-setting-3"
                                src="collaborate.svg"
                            />

                            <Card.Body className="card-body">
                                <Card.Title className="card-title font-weight-bold">
                                    LET&apos;S  COLLABORATE
                                </Card.Title>

                                <br />

                                <Card.Text className="card-text">
                                    Find new projects to work.
                                    Apply for teams and Collaborations.
                                    Lets keep the learning and helping community alive.
                                </Card.Text>

                                <div
                                    className="col-auto btn btn-primary disabled"
                                    to="/collab_connect"
                                >
                                    Coming Soon...
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>









            {/* <section className=" lowl container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div
                                className="card stype"
                            >
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="..."
                                />

                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the cards content.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <Fade
                            className=""
                            direction={isMobile?"left":"up"}
                            triggerOnce
                        >
                            <Card className="authenticatedHome_card_main text-secondary card">
                                <SvgIcon
                                    height="220"
                                    src="help_others.svg"
                                />

                                <Card.Body>
                                    <Card.Title className="card-title font-weight-bold">
                                        HELP OTHERS
                                    </Card.Title>

                                    <br />

                                    <Card.Text className="card-text masthead">
                                        Solve other&apos;s doubts and be the mentor you always wanted.
                                        Using our platform you can reach a larger curious community.
                                    </Card.Text>

                                    <Link
                                        className="col-auto btn btn-primary"
                                        to="/help"
                                    >
                                        Help others
                                    </Link>

                                </Card.Body>
                            </Card>
                        </Fade>

                        <Fade
                            className=""
                            direction={isMobile?"right":"up"}
                            triggerOnce
                        >
                            <Card className="card authenticatedHome_card_main text-secondary">
                                <SvgIcon
                                    height="210"
                                    src="ask_for_help.svg"
                                    width="300"
                                />

                                <Card.Body className="card-body">
                                    <Card.Title className="card-title font-weight-bold">
                                        ASK FOR HELP
                                    </Card.Title>

                                    <br />

                                    <Card.Text className="card-text">
                                        <b>
                                            Stack Overflow:404!
                                        </b>

                                        {" "}
                                        Answer not found,

                                        <br />
                                        The button below can solve it
                                    </Card.Text>

                                    <br />

                                    <Link
                                        className="col-auto btn btn-primary"
                                        to="/ask"
                                    >
                                        Ask for help
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Fade>

                        <Fade
                            className=""
                            direction={isMobile?"left":"up"}
                            triggerOnce
                        >
                            <Card className="card authenticatedHome_card_main text-secondary">
                                <SvgIcon
                                    height="220"
                                    src="collaborate.svg"
                                />

                                <Card.Body className="card-body">
                                    <Card.Title className="card-title font-weight-bold">
                                        LET&apos;S  COLLABORATE
                                    </Card.Title>

                                    <br />

                                    <Card.Text className="card-text">
                                        Find new projects to work.
                                        Apply for teams and Collaborations.
                                        Lets keep the learning and helping community alive.
                                    </Card.Text>

                                    <div
                                        className="col-auto btn btn-primary disabled"
                                        to="/collab_connect"
                                    >
                                        Coming Soon...
                                    </div>

                                </Card.Body>
                            </Card>
                        </Fade>
                    </div>
                </div>
            </section> */}
        </div>
        
    )    
} 

export default Index;
// TODO: Attribution to freepik.com pending
