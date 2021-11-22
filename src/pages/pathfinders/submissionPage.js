/* eslint-disable react/jsx-sort-props */
// import {navbar} from "./submissionPage.module.css";
import {static_left} from "./submissionPage.module.css";
import {box, } from "./submissionPage.module.css";
import {center, center2} from "./submissionPage.module.css";
import UserForm from "../../common/UserForm/UserForm.js";
import {dynamic_right} from "./submissionPage.module.css";
import Carousel from 'react-bootstrap/Carousel'


import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Card} from "react-bootstrap";

export default class submissionPage extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }


    constructor(props) {
        super(props);

        this.state = {

            project_name: "",
            project_description:"",
            project_tags:["Example Tag"],

            // team_size: 0,
            team_members: [],
            // team_member_emails: [],
            date_of_est: new Date(),

            visible: false,
            stage: "i"


        }

        this.handleChange = this.handleChange.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeteam = this.onChangeteam.bind(this);
        this.onDeleteteam = this.onDeleteteam.bind(this);
        this.removeClick = this.removeClick.bind(this);
        this.addClick = this.addClick.bind(this);




    }

    shouldComponentUpdate(){
        return true;
    }

    onChangeTags(tags){
        this.setState({
            project_tags: tags
        })
    }

    onChangeDate(date){

        console.log(typeof(date))


        this.setState({
            date_of_est: date
        })
    }

    // handleChangeTS(size){
    //     this.setState({
    //         team_size: size
    //     })
    // }

    removeClick(i){
        this.setState((prevState) => {
            let items = prevState.team_members;
            items.splice(i,1);
            return ({
                ...prevState,
                team_members:items
            })
        });

        console.log(i);
        this.onChangeteam(i);

    }

    addClick(){
        console.log("hi",this.state.team_members)
        this.setState(prevState => ({ team_members: [...prevState.team_members,  {name:"",email:""}]}))
        // this.props.handleChangeTS(this.state.items.length);
    }

    handleChange = input => e => {

        console.log(1111111111111111)

        console.log(input,e.target.value, this.state.visible);

        if(input === "visible"){
            if(e.target.value === "on"){
                this.setState({ [input]: true });
            }
            else{
                this.setState({ [input]: false });
            }
        }
        else{
            this.setState({ [input]: e.target.value });
        }

    };

    onProjectVisibilityChange = (e) => {
        this.setState({
            visible: e.target.checked
        })
    }

    onDeleteteam(val){

        if(val < this.state.team_members.length){
            this.setState((prevState) => {team_members: prevState.team_members.splice(val,1)})
        }
        console.log(this.state.team_members, "hiii");
    }

    onChangeteam(varr, val, e){

        if(val >= this.state.team_members.length){
            this.setState((prevState) => {
                let va = prevState.team_members;
                va[val] = {name:"",email:""};
                return ({
                    ...prevState,
                    team_members: va
                })
            });
        }

        console.log(this.state.team_members);
        if(varr === "name"){
            this.setState((prevState) => {
                let va = prevState.team_members;
                va[val].name = e.target.value;
                return ({
                    ...prevState,
                    team_members: va
                })
            });
        }
        else if(varr === "email"){
            this.setState((prevState) => {
                let va = prevState.team_members;
                va[val].email = e.target.value;
                return ({
                    ...prevState,
                    team_members: va
                })
            });
        }
    }


    render() {
        return (
            <section className={box}>
                <Card className={center + " container text-center mt-5"}>
                    <div className={center2 + " row content fs-5"}>

                        <div className={static_left +"  col-sm-8 text-left p-3"}>
                            <div className="h1 text-decoration-underline">
                                Register and Feel safe
                            </div>

                            <div className="bg-white m-3 p-3">

                                <Carousel
                                    className=""
                                    nextIcon={
                                        <span
                                            aria-hidden="true"
                                            className="carousel-control-next-icon"
                                            style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='blue'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`,}}
                                        />
                                    }
                                    prevIcon={
                                        <span
                                            aria-hidden="true"
                                            className="carousel-control-prev-icon "
                                            style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='blue'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")`,}}
                                        />
                                    }
                                >
                                    <Carousel.Item>
                                        <img
                                            className=" w-100"
                                            src="https://via.placeholder.com/350x150"
                                            alt="First slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>
                                                First slide label
                                            </h3>

                                            <p>
                                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                                            </p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className=" w-100"
                                            src="https://via.placeholder.com/350x150"
                                            alt="Second slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>
                                                Second slide label
                                            </h3>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className="w-100"
                                            src="https://via.placeholder.com/350x150"
                                            alt="Third slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>
                                                Third slide label
                                            </h3>

                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>


                                </Carousel>
                            </div>
                        </div>

                        <br />

                        <div className={dynamic_right + " col-sm-4 sidenav p-3"}>
                            <div className="well mt-2">
                                <span className="h2 text-decoration-underline">
                                    Guidlines to keep in mind
                                </span>
                            </div>

                             <div className="well bg-white p-3">

                                <h4 className="d-flex">
                                    Form Fill-up
                                </h4>

                                <hr />

                                <UserForm
                                    project_name={this.state.project_name}
                                    project_description={this.state.project_description}
                                    project_tags={this.state.project_tags}
                                    // team_size={this.state.team_size}
                                    team_members={this.state.team_members}
                                    // team_member_names={this.state.team_member_names}
                                    // team_member_emails={this.state.team_member_emails}
                                    date_of_est={this.state.date_of_est}
                                    visible={this.state.visible}
                                    stage={this.state.stage}
                                    // eslint-disable-next-line react/jsx-handler-names
                                    handleChange={this.handleChange}
                                    handleChangeTags={this.onChangeTags}
                                    handleChangeDate={this.onChangeDate}
                                    handleChangeteam={this.onChangeteam}
                                    handleDeleteteam={this.onDeleteteam}
                                    handleProjectVisibilityChange={this.onProjectVisibilityChange.bind(this)}
                                    removeClick={this.removeClick}
                                    addClick={this.addClick}
                                />

                            </div>
                        </div>

                            <br />

                        </div>
                </Card>

            </section>
        )
    }
}
