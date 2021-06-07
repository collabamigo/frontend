import React from 'react'
import "./Profile.css";
import axios from "axios";
import backend from "../../env";
import './Profile.css';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {Tooltip,Popover} from 'react-bootstrap';

const popover = (
    <Tooltip
        id="popover-basic"
    >
        <Popover.Title as="h3">
            <strong>
                My name is not right!
            </strong>
        </Popover.Title>

        <Popover.Content>
            Feel free to contact us at our email 

            {' '}

            <strong>
                watsonhex@gmail.com
            </strong>

            {' '}
            and we will get it right.

            <br />
            
            Thank you.

            {' '}

        </Popover.Content>
    </Tooltip>
  );
class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleChangeHandle = this.handleChangeHandle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state ={
            First_Name: '',
            Last_Name:'',
            degree: '',
            course:'',
            Handle:'',
            loading: true }

        axios.get(backend+"connect/profile?format=json")
            .then(res => {
                const data = res.data[0];
                this.setState({...data,
                loading: false});
            })
    }

    shouldComponentUpdate () {
        return true;
    }


    handleChangeDegree(e) {
        this.setState({ degree: e.target.value })
    }

    handleChangeCourse(e) {
        this.setState({ course: e.target.value })
    }

    handleChangeHandle(e) {
        this.setState({ Handle: e.target.value })
    }

    handleSubmit(e) {

        let payload = {
            degree:this.state.degree,
            course:this.state.course,
            Handle:this.state.Handle, }
        this.setState({loading:true})
        axios.patch(backend+"connect/profile/"+this.state.id+"/", payload)
            .then(() => {
                this.setState({loading:false})
                alert("Profile update successful")
          })

        e.preventDefault();

    }



  render() {
        if (this.state.loading)
            return(
                <div>
                    <div
                        className="spinner-border"
                        role="status"
                    >
                        <span className="sr-only">
                            Loading...
                        </span>
                    </div>
                </div>
                )
        else
            return (
                <section className=" lowl container sectionn">
                    <div className="container-fluid">
                        <div className="row" >
                            <div className="col container" >
                                <div className=" float-right mr-5">
                                    <img
                                        className="profile-image"
                                        src="https://i.imgur.com/PaOjJ3A.png"
                                    />

                                    <h4 className="text-center">
                                        Here is all the information we have about you, feel free to contact us if something doesnot feel right
                                    </h4>
                                </div>
                            </div>

                            <div className="col container" >
                                <Card className="card ml-5 rounded-4 profilecard container border-primary float-left">

                                    <Card.Header className="card-hf-color">
                                        <h1>
                                            Profile
                                        </h1>
                                    </Card.Header>

                                    <Card.Body>
                                        <form
                                            className="card-body"
                                            onSubmit={this.handleSubmit}
                                        >
                                            <div className="form-group">
                                                <div className="col-auto form-inline col-form-label">

                                                    <label>
                                                        First Name
                                                    </label>

                                                    <OverlayTrigger
                                                        overlay={popover}
                                                        placement="right"
                                                        rootClose
                                                        trigger="click"
                                                    >
                                                        {({ ref, ...triggerHandler }) => (
                                                            <div
                                                                className="btn m-0 p-0"
                                                                {...triggerHandler}
                                                            >
                                                    &nbsp;

                                                                <span
                                                                    className="material-icons"
                                                                    ref={ref}
                                                                >
                                                                    help_outline
                                                                </span>
                                                            </div>
                                            )}
                                                    </OverlayTrigger>

                                                </div>

                                                <div>
                                                    <input
                                                        className="form-control col-auto"
                                                        disabled
                                                        onChange={this.handleChangeFirstName}
                                                        type='text'
                                                        value={this.state.First_Name}
                                                    />
                                                </div>


                                            </div>

                                            <div className="form-group">
                                                <div className="col-auto form-inline col-form-label">

                                                    <label>
                                                        Last Name
                                                    </label>

                                                    <OverlayTrigger
                                                        overlay={popover}
                                                        placement="right"
                                                        rootClose
                                                        trigger="click"
                                                    >
                                                        {({ ref, ...triggerHandler }) => (
                                                            <div
                                                                className="btn m-0 p-0"
                                                                {...triggerHandler}
                                                            >
                                                        &nbsp;

                                                                <span
                                                                    className="material-icons"
                                                                    ref={ref}
                                                                >
                                                                    help_outline
                                                                </span>
                                                            </div>)}
                                                    </OverlayTrigger>

                                                </div>

                                                <div className="row-auto">
                                                    <input
                                                        className="form-control col-auto"
                                                        disabled
                                                        onChange={this.handleChangeLastName}
                                                        type='text'
                                                        value={this.state.Last_Name}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-auto form-inline col-form-label">
                                                    Email Address
                                                </label>

                                                <div>
                                                    <input
                                                        className="form-control col-auto"
                                                        disabled
                                                        type='text'
                                                        value={this.state.email}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-auto form-inline col-form-label">
                                                    Telegram Username
                                                </label>

                                                <div>
                                                    <input
                                                        className="form-control col-auto"
                                                        onChange={this.handleChangeHandle}
                                                        placeholder={this.state.Handle}
                                                        type='text'
                                                        value={this.state.Handle}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-auto col-form-label mr-1">
                                                    Degree:
                                                    <select
                                                        className="form-control col-auto form-select m-2 p-6"
                                                        onChange={this.handleChangeDegree}
                                                        value={this.state.degree}
                                                    >
                                                        <option
                                                            selected
                                                            value=""
                                                        >
                                                            ---Select Degree---
                                                        </option>

                                                        <option value="M" >
                                                            M-Tech
                                                        </option>

                                                        <option value="B">
                                                            B-Tech
                                                        </option>
                                                    </select>
                                                </label>

                                                <label className="col-auto col-form-label ml-1">
                                                    Course:
                                                    <select
                                                        className="form-control col-auto form-select m-2 p-6"
                                                        onChange={this.handleChangeCourse}
                                                        value={this.state.course}
                                                    >
                                                        <option
                                                            selected
                                                            value=""
                                                        >
                                                            ---Select Course---
                                                        </option>

                                                        <option value="CSAI">
                                                            CSAI
                                                        </option>

                                                        <option value="CSE">
                                                            CSE
                                                        </option>

                                                        <option value="CSB">
                                                            CSB
                                                        </option>

                                                        <option value="CSD">
                                                            CSD
                                                        </option>

                                                        <option value="CSS">
                                                            CSS
                                                        </option>

                                                        <option value="CSAM">
                                                            CSAM
                                                        </option>

                                                        <option value="ECE">
                                                            ECE
                                                        </option>

                                                    </select>
                                                </label>

                                            </div>
                                        </form>
                                    </Card.Body>

                                    <Card.Footer className="card-hf-color">
                                        <button
                                            className="btn btn-lg btn-primary col-5"
                                            onClick={this.handleSubmit.bind(this)}
                                            type="button"
                                        >
                                            Submit
                                        </button>
                                    </Card.Footer>

                                </Card>
                            </div>


                        </div>
                    </div>
                </section>
            );
  }
}

export default Profile;
