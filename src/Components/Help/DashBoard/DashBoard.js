import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import './DashBoard.css'
import {SvgIcon} from "../../../common/SvgIcon";
import { Doughnut } from "react-chartjs-2";
import backend from "../../../env";
import axios from "axios";
import Odal from "./modaldelete";
import Oadd from "./modaladd"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function dateParsor(props){
    console.log(typeof props)
    if (props === "01")
     return (props.slice(1) + "st ")

    else if (props === "02"){
        return (props.slice(1)+ "nd ")
    }
    else if (props.slice(0,1) === "03"){
        return (props.slice(1)+ "rd ")
    }
    else if (props.slice(0,1) === "0"){
        return (props.slice(1)+ "th ")
    }
    else{
        return (props + "th ")
    }
}


class DashBoard extends React.Component {
    // TODO: image link not working
    // TODO: upvote ,downvote chart not working

    static propTypes = {
        created: PropTypes.string.isRequired,
        downvote:PropTypes.number.isRequired,
        git:PropTypes.string.isRequired,
        help_history:PropTypes.arrayOf(PropTypes.object).isRequired,
        image:PropTypes.string.isRequired,
        linkedin:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        onCreate:PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired,
        setSkills: PropTypes.func.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        upvote: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state={
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            trendingSkills:[],
            pi:[],
            // piTemp:[],
            dataDoughnut: {
            labels: ["Up Votes","Down Votes"],
            datasets: [
                {
                    data: [0+props.upvote,0+props.downvote],
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
        this.handleGet()
    }

    shouldComponentUpdate () {
        return true;
    }

    handleGet() {
        axios.get(backend+"connect/statistics/skills")
            .then((res) => {
                this.setState({trendingSkills:res.data})}
            )
        this.handleGetPi()
    }

    handleGetPi(){
        const temp=[]
        temp.push(["skill", 'Percentage covered'])
        for (let i=0; i < this.props.help_history.length ; ++i)
            temp.push([this.props.help_history[i]["name"], this.props.help_history[i]["count"]]);
        this.setState({pi:temp})
    }

    handleDoughnut () {
        if (this.props.upvote > 0 || this.props.downvote>0){
            return(
                <Doughnut 
                    cutoutPercentage={50}
                    data={this.state.dataDoughnut}
                    options={{ responsive: true, maintainAspectRatio: false}}
                />
            )
        }
        else{
            return (

                <Card.Title className="text-center pt-5 container">
                    {' '}
                    No one has voted you yet , ask your peers to vote you to the the assessment to see your Voting
                </Card.Title>
            )
        }
    }
    
    handlePieChart(){
        if (this.props.help_history.length > 0) {
            return(
                <Chart
                    chartType="PieChart"
                    data={this.state.pi}
                    // data={[
                    //             ["skill", 'Percentage covered'],
                    //             [this.props.skills[0], 53],
                    //             [this.props.skills[1], 83],
                    //           ]}
                    height='80%'
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
                              0: { offset: 0.1 },
                              1: { offset: 0.15 },
                              // 3: { offset: 0.25 },
                            },
                    }}
                    rootProps={{ 'data-testid': '5' }}
                    width='auto'
                />
            )
        }
        else{
            return(
                <div>
                    Help others to see your work graph and your most used skills!!
                </div>
            )
        }
    }

    render () {
        return (
            <div className="">
                <h1 className="font-weight-light display-4">
                    <span className="material-icons icon-dashboard pr-2">
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
                                        <div className="card-title mt-3 ml-3 row h1">
                                            {this.props.name}
                                        </div>

                                        <div className="card-text col-auto row mt-3 float-left">

                                            <blockquote className="blockquote text-center pl-5">
                                                <p className="mb-0">
                                                    “I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.”  
                                                </p>

                                                <footer className="blockquote-footer">
                                                    <cite title="Source Title">
                                                        Michael Phelps
                                                    </cite>
                                                </footer>
                                            </blockquote>
                                        </div>                                     
                                    </div>

                                    <div className="col-md-4 pt-4 display-pic">
                                        <a title="Profile picture taken from Google">
                                            <img
                                                alt="profile_pic"
                                                className="rounded-circle float-center h-75 w-auto"
                                                src={this.props.image}
                                            />

                                        </a>
                                    </div>

                                </Card.Body>

                                <Card.Footer className="mb-0 mt-3 pb-3 card-hf-color-dasboard">
                                    <Card.Link
                                        className="float-left ml-2 mb-0"
                                        href={"https://www.linkedin.com/in/"+ this.props.linkedin}
                                        target="_blank"
                                    >
                                        <SvgIcon
                                            height="34px"
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
                                            height="36px"
                                            src="github.svg"
                                            width="43px"
                                        />
                                    </Card.Link>

                                    <h4 className="card-text float-right">
                                        <small className="text-muted h4">
                                            {"- Since  "}

                                            {dateParsor(this.props.created.slice(8,10))}

                                            {this.state.months[parseInt(this.props.created.slice(5,7))-1] + ", "}

                                            {" "}

                                            {this.props.created.slice(0,4)}

                                        </small>
                                    </h4>   
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>

                    <div className="pb-5">
                        <div className="row">
                            <div className="col">
                                <div className="pieChart">
                                    <br />

                                    <h2>
                                        Work Summary
                                    </h2>

                                    {this.handlePieChart()}

                                </div>
                            </div>

                            <div className="col">
                                <Card className="card_dashboard m-2 card card-trending">
                                    <Card.Header className="h2 header-custom">
                                        Trending Skills
                                    </Card.Header>

                                    <Card.Body className="card-body col-md-12 mt-4 overflow-auto">
                                    

                                        {this.state.trendingSkills.map(item => (
                                            <div
                                                className="col-auto container-fluid lool"
                                                key={item}
                                            >
                                                <ol 
                                                    className="list-group mt-1"
                                                    key={item}
                                                >
                                                    <li className="d-flex justify-content-between align-items-start fsxxl container-fluid">
                                                        <div className="ms-2 me-auto">
                                                            <div className="fssm">
                                                                {capitalizeFirstLetter(item["name"])}
                                                            </div>
                                                        </div>

                                                        <span className="badge rounded-pill">
                                                            <span >
                                                                <SvgIcon
                                                                    height="34px"
                                                                    src="trending_up_black_48dp.svg"
                                                                    width="43px"
                                                                />
                                                            </span>

                                                            {item["count"]}
                                                        </span>
                                                    </li>
                                                </ol>
                                            </div>
                                        ))}
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <Card className="card_dashboard m-2 card card-trending">
                                    <Card.Header className="h2 header-custom">
                                        Skill Bar
                                        <Oadd
                                            onCreate={this.props.onCreate}
                                            setSkills={this.props.setSkills}
                                            skills={this.props.skills}
                                        />
                                    </Card.Header>

                                    <Card.Body className="overflow-auto">
                                    

                                        {this.props.skills.map(item => (
                                            <div
                                                className="container-fluid lool"
                                                key={item}
                                            >

                                                <ol
                                                    className="list-group"
                                                    key={item}
                                                >
                                                    <li className="d-flex justify-content-between flex-lg-row pb-3">
                                                        <div className="ms-2 me-auto">
                                                            <div className="fsxxl">
                                                                {capitalizeFirstLetter(item)}
                                                            </div>
                                                        </div>

                                                        <Odal
                                                            item={item}
                                                            onDelete={this.props.onDelete}
                                                        />
                                                    </li>
                                                </ol>
                                            </div>
                                        ))}

                                    
                                    </Card.Body>
                                </Card>


                            </div>

                            <div className="col">
                                <Card className="card_dashboard m-2 card card-votes">
                                    <Card.Body className="container col-md-12 ">

                                        {this.handleDoughnut()}

                                    </Card.Body>

                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DashBoard;
