
import {Link, Route, Switch} from "react-router-dom";
import Card from "react-bootstrap/Card";
import React from "react";
import {Fade} from "react-awesome-reveal";
import {isMobile} from "react-device-detect";
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

            <section className=" container lowl ">
                <div className="row justify-content-center">
                    <Fade
                        className=""
                        direction={isMobile?"left":"up"}
                        triggerOnce
                    >
                        <Card className="authenticatedHome_card_main text-secondary card ml-3 mb-5 mr-3 zoom-my-card">

                            <SvgIcon
                                className=" card-img-top card-img-topy clsImg "
                                height="400"
                                src="help_others.svg"
                                width="520"
                            />

                            <Card.Body>
                                <Card.Title className="card-title font-weight-bold">
                                    HELP OTHERS
                                </Card.Title>

                                <Card.Text className="card-text masthead">
                                    Solve other&apos;s doubts and be the mentor
                                    <br />
                                    you always wanted.
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
                        <Card className="card authenticatedHome_card_main text-secondary ml-3 mb-5 mr-3 zoom-my-card">
                            <SvgIcon
                                className="container card-img-top"
                                height="400"
                                src="ask_for_help.svg"
                                width="460"
                            />

                            <Card.Body className="card-body">
                                <Card.Title className="card-title font-weight-bold">
                                    ASK FOR HELP
                                </Card.Title>


                                <Card.Text className="card-text">
                                    <b>
                                        Stack Overflow:404!
                                    </b>

                                    {" "}
                                    Answer not found,

                                    <br />
                                    The button below can

                                    <br />
                                    solve it
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="custom-modal-footer pb-4">
                                <Link
                                    className="col-auto btn btn-primary"
                                    to="/ask"
                                >
                                    Ask for help
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Fade>

                    <Fade
                        className=""
                        direction={isMobile?"left":"up"}
                        triggerOnce
                    >
                        <Card className="card authenticatedHome_card_main text-secondary ml-3 mb-5 zoom-my-card">
                            <SvgIcon
                                height="400"
                                src="collaborate.svg"
                                width="450"
                            />

                            <Card.Body className="card-body">
                                <Card.Title className="card-title font-weight-bold">
                                    LET&apos;S  COLLABORATE
                                </Card.Title>

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
            </section>
        </div>
        
    )    
} 

export default Index;
// TODO: Attribution to freepik.com pending
