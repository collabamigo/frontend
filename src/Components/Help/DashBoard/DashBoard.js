import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import './DashBoard.css'
import {Col, Container, Row} from "react-bootstrap";
import {SvgIcon} from "../../../common/SvgIcon";
import { Doughnut } from "react-chartjs-2";


class DashBoard extends React.Component {
    static propTypes = {
        // downvote:PropTypes.number.isRequired,
        git:PropTypes.string.isRequired,
        linkedin:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        upvote: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state={
            dataDoughnut: {
            labels: ["Up Votes","Down Votes"],
            datasets: [
                {
                    data: [1, 1],
                    backgroundColor: ["#F7464A", "#46BFBD"],
                    hoverBackgroundColor: [
                        "#FF5A5E",
                        "#5AD3D1",
                        ]
                    }
                ]
            }
        }
    }

    shouldComponentUpdate () {
        return false;
    }


    render () {
        console.log(this.props.upvote)
        return (
            <div className="">
                <h1 className="font-weight-bold">
                    Dashboard
                    <span className="material-icons">
                        dashboard
                    </span>
                </h1>

                <Container fluid>
                    <Row>
                        <Col>
                            <Card className="card main-profile">
                                <Card.Body className="card-body">
                                    <img
                                        className="rounded-circle float-right"
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                    />

                                    <div className="card-text col-auto">
                                        <h2 className="display-4 fw-bold p-3 float-left row">
                                            {this.props.name}
                                        </h2>

                                        <div className="display-5 col-lg-6 row">
                                            Your time is limited, so dont waste it living someone elses life. Dont
                                            be trapped by dogma – which is living with the results of other peoples
                                            thinking. -Steve Jobs
                                        </div>
                                    </div>

                                    <hr />

                                    <Card.Footer className="card-footer main-profile-footer" >
                                        <Card.Link
                                            className="float-left"
                                            href={"https://www.linkedin.com/in/"+ this.props.linkedin}
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="31px"
                                                src="linkedin.svg"
                                                width="44px"
                                            />
                                        </Card.Link>

                                        <Card.Link
                                            className="float-left"
                                            href={"https://www.github.com/"+ this.props.git}
                                            target="_blank"
                                        >
                                            <SvgIcon
                                                height="34px"
                                                src="github.svg"
                                                width="43px"
                                            />
                                        </Card.Link>
                                    </Card.Footer>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card className="card card-empty">
                                <Card.Body>
                                    <Card.Title>
                                        Still thinking
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="card card-votes">
                                <Card.Body className="card-body col-md-7">
                                    <Doughnut
                                        data={this.state.dataDoughnut}
                                        height={10}
                                        options={{ responsive: true, maintainAspectRatio: true}}
                                        width={10}
                                    />
                                </Card.Body>

                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col>


                            <div>
                                <br />

                                <br />

                                <h2>
                                    Skills
                                </h2>

                                <Chart
                                    chartType="PieChart"
                                    data={[
                                                ["hello", 'Percentage covered'],
                                                [this.props.skills[0], 53],
                                                [this.props.skills[1], 83],
                                              ]}
                                    height='25rem'
                                    loader={
                                        <div>
                                            Loading Chart
                                        </div>
                                            }
                                    options={{
                                                // title: 'Work Summary',
                                                legend: 'none',
                                                pieSliceText: 'label',
                                                slices: {
                                                  // 1: { offset: 0.2 },
                                                  // 2: { offset: 0.3 },
                                                  2: { offset: 0.2 },
                                                },
                                              }}
                                    rootProps={{ 'data-testid': '5' }}
                                    width='auto'
                                />
                            </div>                               
                        </Col>

                        <Col>
                            <Card className="card card-trending">
                                <Card.Body className="card-body">
                                    <Card.Title>
                                        Trending Skills
                                    </Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DashBoard;
