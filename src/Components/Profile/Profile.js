import React from 'react'
import "./Profile.css";
import axios from "axios";
import backend from "../../env";
import './Profile.css';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {Popover} from 'react-bootstrap';
import SvgIcon from "../../common/SvgIcon";
import {isMobile} from "react-device-detect";


const popoverRight = (
    <Popover
        id="popover-positioned-right"
        title="Popover right"
    >
        <Popover.Title as="h3">
            <strong>
                My name is not right!
            </strong>
        </Popover.Title>

        <Popover.Content>
            Your name was authenticated from your google account.
            {' '}
            Contact us at our email  
            
            {' '}

            <strong>

                {/* <a
                    href="none"
                    onClick={mailtoo('test@gmail.com', 'Subject', 'Body')}
                >
                    test@gmail.com
                </a> */}
                
                <a
                    href="mailto:watsonhex@gmail.com ?subject=My Name is not correct"
                    onClick="window.open(this.href)"
                    onKeyPress="window.open(this.href)"
                    rel="noreferrer"
                    target="_blank"
                >
                    watsonhex@gmail.com
                </a>


            </strong>

            {' '}
            and we will get it right.

            <br />
            Thank you.

            {' '}
        </Popover.Content>
    </Popover>
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
            handle:'',
            loading: true }
    }

    componentDidMount() {
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
        this.setState({ handle: e.target.value })
    }

    handleSubmit(e) {

        let payload = {
            degree:this.state.degree,
            course:this.state.course,
            handle:this.state.handle}
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
                <section className="container-fluid lowwl mt-0">
                    <div className="row" >
                        {isMobile?null:(
                            <div className="col container">
                                <div className=" float-right mr-5 mt-5">
                                    <SvgIcon
                                        className="profile-image mt-5"
                                        height="100%"
                                        src="waving.svg"
                                        width="120%"
                                    />

                                    <h5 className="text-center">
                                        Here is all the information we have about you,
                                        feel free to change whatever doesn&apos;t fit right.
                                    </h5>
                                </div>
                            </div>)}

                        <div className="col container" >
                            <Card className="card ml-5 rounded-4 profilecard container border-primary float-left">

                                <Card.Header className="card-hf-color">
                                    <h1 className="" >
                                        Profile
                                    </h1>
                                </Card.Header>

                                <Card.Body className="pt-0 mt-0">
                                    <form
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="form-group">
                                            <div className="col-auto form-inline col-form-label">

                                                <label>
                                                    First Name
                                                </label>

                                                <OverlayTrigger
                                                    overlay={popoverRight}
                                                    placement="right"
                                                    trigger="click"
                                                >
                                                    <div className="btn">
                                                        <span
                                                            className="material-icons"
                                                        >
                                                            help_outline
                                                        </span>
                                                    </div>
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
                                                    overlay={popoverRight}
                                                    placement="right"
                                                    trigger="click"
                                                >
                                                    <div className="btn">
                                                        <span
                                                            className="material-icons"
                                                        >
                                                            help_outline
                                                        </span>
                                                    </div>
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

                                        <div className="form-group ">
                                            <label className=" form-inline col-form-label">
                                                Telegram Username
                                            </label>

                                            <div>
                                                <input
                                                    className="form-control col-auto"
                                                    onChange={this.handleChangeHandle}
                                                    type='text'
                                                    value={this.state.handle}
                                                />
                                            </div>
                                        </div>

                                        <div className="row form-group justify-content-center">
                                            <label className="col-form-label">
                                                Degree:
                                                <select
                                                    className="form-control col-auto form-select m-2 p-6"
                                                    onChange={this.handleChangeDegree}
                                                    required
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
                                                    required
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

                                                    <option value="CSSS">
                                                        CSSS
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

                                        <div>
                                            <button
                                                className="btn btn-lg btn-primary col-5"
                                            // onClick={this.handleSubmit.bind(this)}
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </section>
            );
  }
}

export default Profile;
