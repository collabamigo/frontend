import {Link} from "gatsby";
import Card from "react-bootstrap/Card";
import Clublist from '../ClubList/ClubList.js';
import React from "react";
import axios from "axios";
import backend from "../../env";
import { Fade } from "react-awesome-reveal";
import { isMobile } from "react-device-detect";

import { SvgIcon } from "../../common/SvgIcon";
import "./index.css";

class AuthenticatedHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "BECOME A CONTRIBUTOR",
            second: "Contribute",
            third:
                "Solve other's doubts and be the mentor you always wanted.\n" +
                "Using our platform you can reach a larger community.",
            clubList: [
                {name: "Tasveer", logo : "https://via.placeholder.com/70X70"},
                {name: "MicDrop", logo : "https://via.placeholder.com/70X70"},
                {name: "Byld", logo : "https://via.placeholder.com/70X70"},
                {name: "D4rkcode", logo : "https://via.placeholder.com/70X70"},
                {name: "Litsoc", logo : "https://via.placeholder.com/70X70"},
                {name: "Meraki", logo : "https://via.placeholder.com/70X70"},
                {name: "MUSE", logo : "https://via.placeholder.com/70X70"},
                {name: "Philsoc", logo : "https://via.placeholder.com/70X70"},
                {name: "Electroholics", logo : "https://via.placeholder.com/70X70"},
                {name: "Cyborg", logo : "https://via.placeholder.com/70X70"},
                {name: "Astronuts", logo : "https://via.placeholder.com/70X70"},
                {name: "D4rkcode", logo : "https://via.placeholder.com/70X70"},
            ],
        };
    }

    componentDidMount() {
        axios.get(backend + "connect/teacher?format=json").then((res) => {
            if (res.data.length)
                this.setState({
                    first: "VIEW DASHBOARD",
                    second: "Dashboard",
                    third:
                        "Hi Collaborator," +
                        "\nView and edit your skills here. You can also see your " +
                        "work summary and the hot trending skills on the platform ",
                });
        });
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div>

                <div className=" h-75 w-100 justify-content-center card-group ">
                    <div className="row ">
                        <Fade
                            className="col-lg-4 col-md-6 col-sm-12 h-auto mt-2 mb-3 card-group"
                            direction={isMobile ? "left" : "up"}
                            triggerOnce
                        >
                            <Card className="h-auto card ml-4 mr-1 zoom-my-card min-vh-80 justify-content-center mb-3">
                                <div className="justify-content-center">
                                    <SvgIcon
                                        src="help_others.svg"
                                        width="97%"
                                    />
                                </div>

                                <Card.Body className="mt-3">
                                    <Card.Title className="font-weight-bold header-color">
                                        {this.state.first}
                                    </Card.Title>

                                    <br />

                                    <Card.Text className="card-text text-muted h5">
                                        {this.state.third}
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer className="footer-custom pb-4">
                                    <Link
                                        className="col-auto btn btn-primary"
                                        to="/app/help"
                                    >
                                        {this.state.second}
                                    </Link>
                                </Card.Footer>
                            </Card>

                            <Card className="card h-auto mx-2 zoom-my-card mb-3">
                                <SvgIcon
                                    height="56%"
                                    src="ask_for_help.svg"
                                    width="100%"
                                />

                                <Card.Body className="mt-3">
                                    <Card.Title className="font-weight-bold header-color">
                                        GET SOLUTIONS
                                    </Card.Title>

                                    <br />

                                    <Card.Text className="card-text h5 text-muted ">
                                        <span>
                                            Stack Overflow:404!
                                        </span>
                                        Answer not found,

                                        <br />
                                        The button below can solve it.
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer className="footer-custom pb-4">
                                    <Link
                                        className="col-auto btn btn-primary"
                                        to="/ask"
                                    >
                                        Ask for help
                                    </Link>
                                </Card.Footer>
                            </Card>

                            <Card className="card h-auto mx-2 zoom-my-card mb-3">
                                <SvgIcon
                                    height="56%"
                                    src="collaborate.svg"
                                    width="100%"
                                />

                                <Card.Body className="mt-3">
                                    <Card.Title className="card-title font-weight-bold header-color">
                                        LET&apos;S COLLABORATE
                                    </Card.Title>

                                    <br />

                                    <Card.Text className="card-text h5 text-muted">
                                        Find new projects to work. Apply for teams
                                        and Collaborations. Lets keep the learning
                                        and helping community alive.
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer className="footer-custom pb-4">
                                    <Link
                                        className="col-auto btn btn-primary"
                                        to="/app/project"
                                    >
                                        Project
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Fade>
                    </div>

                    <div className="row">
                        <Fade
                            className=" h-auto mt-2 mb-3 "
                            direction={isMobile ? "left" : "up"}
                            triggerOnce
                        >
                            <Card className="card h-auto mx-2 zoom-my-card mb-3">

                                <Card.Body className="mt-3">
                                    <Card.Title className="card-title font-weight-bold header-color text-left">
                                        Associated Clubs
                                    </Card.Title>

                                    <br />

                                    <Card.Text className="card-text h5 text-muted">
                                        <div>
                                            Find new projects to work. Apply for teams
                                            and Collaborations. Lets keep the learning
                                            and helping community alive.ggffyyfyt
                                        </div>

                                        <br />
        
                                        <br />

                                        <div>
                                            <Clublist clubList={this.state.clubList} />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Fade>

                    </div>
                </div>
            </div>
        );
    }
}
export default AuthenticatedHome;
// TODO: Attribution to freepik.com pending
