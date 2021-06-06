
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

            <section>
                <div className="container">
                    <div className="row">
                        <Fade
                            className="col-lg-4 mb-4"
                            direction={isMobile?"left":"up"}
                            triggerOnce
                        >
                            <Card className="authenticatedHome_card_main text-secondary card">
                                <img
                                    alt=""
                                    className="card-img-top"
                                    height="220"
                                    src="https://images.unsplash.com/photo-1495653797063-114787b77b23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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
                            className="col-lg-4 mb-4"
                            direction={isMobile?"right":"up"}
                            triggerOnce
                        >
                            <Card className="card authenticatedHome_card_main text-secondary">
                                <SvgIcon
                                    height="220"
                                    src="5236.svg"
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
                            className="col-lg-4 mb-4"
                            direction={isMobile?"left":"up"}
                            triggerOnce
                        >
                            <Card className="card authenticatedHome_card_main text-secondary">
                                <img
                                    alt=""
                                    className="card-img-top"
                                    height="220"
                                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
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
            </section>
        </div>
        
    )    
} 

export default Index
