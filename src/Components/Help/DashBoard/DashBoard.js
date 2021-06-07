import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import './DashBoard.css'
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
                    <span className="material-icons pr-2">
                        dashboard
                    </span>
                    Dashboard
                </h1>

                <div className="container-fluid loql">
                    <div>
                        <div>
                            <Card className="mb-5 upper-text main-profile">
                                <Card.Body className="row">
                                    <div className="col-md-8 float-center">
                                        <h1 className="card-title display-4 fw-bold mt-3 ml-auto float-center row">
                                            {this.props.name}
                                        </h1>

                                        <div className="card-text col-auto row mt-5">

                                            <p className="ml-5 blockquote">
                                                Your time is limited, so dont waste it living someone elses life. Dont
                                                be trapped by dogma – which is living with the results of other peoples
                                                thinking. -Steve Jobs
                                            </p>
                                        </div>                                     
                                    </div>

                                    <div className="col-md-4 pt-4">
                                        <img
                                            className="rounded-circle float-center"
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                        />
                                    </div>

                                    
                                </Card.Body>

                                <Card.Footer className="mb-0 mt-3 card-hf-color-dasboard">
                                    <Card.Link
                                        className="float-left ml-2 mb-0"
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

                                    <h4 className="card-text float-right">
                                        <small className="text-muted">
                                            Since 31st May
                                        </small>
                                    </h4>   
                                </Card.Footer>
                            </Card>

                            <Card className="card_dashboard m-2 card main-profile">
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
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Card className="card_dashboard m-2 card card-empty">
                                <Card.Body>
                                    <Card.Title>
                                        Still thinking
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col">
                            <Card className="card_dashboard m-2 card card-votes">
                                <Card.Body className="card-body col-md-7">
                                    <Doughnut
                                        data={this.state.dataDoughnut}
                                        height={10}
                                        options={{ responsive: true, maintainAspectRatio: true}}
                                        width={10}
                                    />
                                </Card.Body>

                            </Card>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col">
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
                        </div>

                        <div className="col">
                            <Card className="card_dashboard m-2 card card-trending">
                                <Card.Body className="card-body">
                                    <Card.Title>
                                        Trending Skills
                                    </Card.Title>


                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
