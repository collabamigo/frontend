
import Link from "../../common/Link";
import Card from "react-bootstrap/Card";
import React from "react";
import {Fade} from "react-awesome-reveal";
import {isMobile} from "react-device-detect";
import {SvgIcon} from "../../common/SvgIcon";
import './index.css';

function AuthenticatedHome() {
    return (
        <div className="row container-fluid h-75 w-100 justify-content-center">
            <Fade
                className="col-lg-4 col-md-6 col-sm-12 h-100 mt-2 mb-3"
                direction={isMobile?"left":"up"}
                triggerOnce
            >
                <Card className="h-100 card ml-4 mr-1 zoom-my-card">
                    <SvgIcon
                        height="56%"
                        src="help_others.svg"
                        width="100%"
                    />

                    <Card.Body className="mt-3">
                        <Card.Title className="font-weight-bold">
                            BECOME A CONTRIBUTOR
                        </Card.Title>

                        <br />

                        <Card.Text className="card-text h5 text-muted ">
                            Solve other&apos;s doubts and be the mentor you always wanted.
                            Using our platform you can reach a larger curious community.
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer className="footer-custom mb-4">
                        <Link
                            className="col-auto btn btn-primary"
                            to="/help"
                        >
                            Help others
                        </Link>
                    </Card.Footer>
                    
                </Card>
            </Fade>

            <Fade
                className="col-lg-4 col-md-6 col-sm-12 h-100 mt-2 mb-3"
                direction={isMobile?"right":"up"}
                triggerOnce
            >
                <Card className="card h-100 mx-2 zoom-my-card">
                    <SvgIcon
                        height="56%"
                        src="ask_for_help.svg"
                        width="100%"
                    />

                    <Card.Body className="mt-3">
                        <Card.Title className="card-title font-weight-bold">
                            GET SOLUTIONS
                        </Card.Title>

                        <br />

                        <Card.Text className="card-text h5 text-muted ">
                            <span>
                                Stack Overflow:404!
                            </span>

                            {" "}
                            Answer not found,

                            <br />
                            The button below can solve it.
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer className="footer-custom mb-4">
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
                className="col-lg-4 col-md-6 col-sm-12 h-100 mt-2 mb-3"
                direction={isMobile?"left":"up"}
                triggerOnce
            >
                <Card className="card h-100 mx-2 zoom-my-card">
                    <SvgIcon
                        height="56%"
                        src="collaborate.svg"
                        width="100%"
                    />

                    <Card.Body className="mt-3">
                        <Card.Title className="card-title font-weight-bold">
                            LET&apos;S  COLLABORATE
                        </Card.Title>

                        <br />

                        <Card.Text className="card-text h5 text-muted">
                            Find new projects to work.
                            Apply for teams and Collaborations.
                            Lets keep the learning and helping community alive.
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer className="footer-custom mb-4">
                        <div
                            className="col-auto btn btn-primary disabled"
                        >
                            Coming Soon...
                        </div>
                    </Card.Footer>

                </Card>
            </Fade>
        </div>
        
    )    
} 

export default AuthenticatedHome;
// TODO: Attribution to freepik.com pending
