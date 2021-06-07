import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import './DashBoard.css'
import {SvgIcon} from "../../../common/SvgIcon";
import { Doughnut } from "react-chartjs-2";
import backend from "../../../env";
import axios from "axios";


class DashBoard extends React.Component {
    static propTypes = {
        // downvote:PropTypes.number.isRequired,
        created: PropTypes.arrayOf(PropTypes.string).isRequired,
        git:PropTypes.string.isRequired,
        linkedin:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        // upvote: PropTypes.number.isRequired,
        
    }

    constructor(props) {
        super(props);
        this.state={
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            trendingSkills:[],
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

    componentDidMount() {
        this.handleTrending()
    }

    shouldComponentUpdate () {
        return true;
    }

    handleTrending() {
        axios.get(backend+"connect/statistics/skills").then((res) => {this.setState({trendingSkills:res.data})})
    }
// year month day
    render () {
        console.log(this.props.created)
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
                                            {this.props.created.slice(8,10) + "th "}

                                            {this.state.months[parseInt(this.props.created.slice(5,7))] + ", "}

                                            {" "}

                                            {this.props.created.slice(0,4)}

                                        </small>
                                    </h4>   
                                </Card.Footer>
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
                            <div className="pieChart">
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
                                    <Card.Title className="pd-4">
                                        Trending Skills
                                    </Card.Title>

                                    {this.state.trendingSkills.map(item => (
                                        <div
                                            className="col-auto"
                                            key={item}
                                        >
                                            <li
                                                className="trending"
                                                key={item}
                                            >
                                                <ol className="un-list">
                                                    {item}
                                                </ol>
                                            </li>
                                        </div>
                                        ))}
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
