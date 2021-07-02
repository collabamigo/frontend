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
import Loading from "../../common/Loading";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

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

            {' '}
        </Popover.Content>
    </Popover>
  );

// eslint-disable-next-line react/no-multi-comp
class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleChangeHandle = this.handleChangeHandle.bind(this);
        this.handleChangeLinkedIn = this.handleChangeLinkedIn.bind(this);
        this.handleChangeGitHub = this.handleChangeGitHub.bind(this);
        this.handleChangeContact = this.handleChangeContact.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state ={
            First_Name: '',
            Last_Name:'',
            degree: '',
            contact: undefined,
            course:'',
            github: null,
            handle:'',
            isTeacher: false,
            linkedIn: null,
            loading: true }
    }

    componentDidMount() {
        axios.get(backend+"connect/profile/?format=json")
            .then(res => axios.get(backend+"connect/teacher/").then((res2) => {

                if (res2.data.length){
                    this.setState({
                        isTeacher: true,
                        linkedIn: res2.data[0]["Linkedin"],
                        github:res2.data[0]["Gitname"],
                    })

                    if (res2.data[0]["Contact"].toString() !== "0"){
                        this.setState({contact: "+" + res2.data[0]["Contact"].toString()})
                    }

                    else{
                        this.setState({contact:undefined})
                    }
                }
                this.setState({
                    ...(res.data[0]),
                    loading: false
                });

            }))
    }

    shouldComponentUpdate () {
        return true;
    }


    handleChangeDegree(e) {
        this.setState({ degree: e.target.value })
    }

    handleChangeLinkedIn(e) {
        this.setState({ linkedIn: e.target.value })
    }
    
    handleChangeCourse(e) {
        this.setState({ course: e.target.value })
    }

    handleChangeHandle(e) {
        this.setState({ handle: e.target.value })
    }

    handleChangeGitHub(e){
        this.setState({github:e.target.value})
    }

    handleChangeContact(value){
        this.setState({contact:value})
    }

    isFormValid() {
        // Validate phone number
        if (!(this.state.contact === undefined || (1000000 <= parseInt(this.state.contact.slice(1)) && parseInt(this.state.contact.slice(1)) <= 100000000000000))) {
            alert("Your mobile number seems invalid. Please recheck.")
            return false
        }
        else
            return true
    }

    handleSubmit(e) {
        if (this.isFormValid()) {

            let payload = {
                degree: this.state.degree,
                course: this.state.course,
                handle: this.state.handle
            }
            this.setState({loading: true})
            axios.patch(backend + "connect/profile/" + this.state.id + "/", payload)
                .then(() => {
                    if (this.state.isTeacher)
                        axios.patch(backend + "connect/teacher/" + this.state.id + "/", {
                            Linkedin: this.state.linkedIn,
                            Gitname: this.state.github,
                            Contact: (this.state.contact === undefined)?0:parseInt(this.state.contact.slice(1)),
                        })

                    this.setState({loading: false})
                    alert("Profile update successful")

                })
        }

        e.preventDefault();

    }



  render() {
        if (this.state.loading)
            return <Loading />
        else
            return (
                <section className="container-fluid lowwl mt-0">
                    <div className="row" >
                        {isMobile?null:(
                            <div className="col container">
                                <div className="mr-5 mt-5">
                                    <SvgIcon
                                        className="profile-image mt-5"
                                        height="100%"
                                        src="waving.svg"
                                        width="120%"
                                    />

                                    <h5 className="text-center">
                                        Here is all the information we have about you,
                                        feel free to change whatever doesn&apos;t fit right
                                    </h5>
                                </div>
                            </div>)}

                        <div className="col container" >
                            <Card className="card ml-5 rounded-4 container mb-5">

                                <Card.Header className="card-hf-color card-header">
                                    <h1>
                                        Profile
                                    </h1>

                                    <p className="text-danger float-left">
                                        * Required
                                    </p>
                                </Card.Header>

                                <Card.Body className="pt-0 mt-0">
                                    <form
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="form-group required">
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

                                        <div className="form-group required">
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

                                        <div className="form-group required">
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
                                                Telegram
                                            </label>

                                            <div>
                                                <input
                                                    className="form-control col-auto"
                                                    onChange={this.handleChangeHandle}
                                                    placeholder="username"
                                                    type='text'
                                                    value={this.state.handle}
                                                />
                                            </div>
                                        </div>

                                        {this.state.isTeacher?
                                            <div>
                                                <div className="form-group required">
                                                    <label className=" form-inline col-form-label">
                                                        LinkedIn URL
                                                    </label>

                                                    <div>
                                                        <input
                                                            className="form-control col-auto"
                                                            onChange={this.handleChangeLinkedIn}
                                                            placeholder="https://www.linkedin.com/in/example-here"
                                                            type="text"
                                                            value={this.state.linkedIn}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label className=" form-inline col-form-label">
                                                        GitHub
                                                    </label>

                                                    <div>
                                                        <input
                                                            className="form-control col-auto"
                                                            onChange={this.handleChangeGitHub}
                                                            placeholder="Username"
                                                            type="text"
                                                            value={this.state.github}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className=" form-inline col-form-label">
                                                        Contact
                                                    </label>


                                                    <div>
                                                        <PhoneInput
                                                            className="form-control col-auto"
                                                            defaultCountry="IN"
                                                            onChange={this.handleChangeContact}
                                                            placeholder="Mobile Number"
                                                            value={this.state.contact}
                                                        />                                                    

                                                    </div>
                                                </div>
                                            </div>:null}
                                        
                                        <div className="row form-group justify-content-center">
                                            <div className="col-form-label required">
                                                <label>
                                                    Degree:
                                                </label>

                                                <select
                                                    className="form-control col-auto form-select m-2 p-6"
                                                    onChange={this.handleChangeDegree}
                                                    required
                                                    value={this.state.degree}
                                                >
                                                    <option value="M" >
                                                        M-Tech
                                                    </option>
    
                                                    <option value="B">
                                                        B-Tech
                                                    </option>

                                                    <option value="P">
                                                        Ph.D.
                                                    </option>

                                                    <option value="F">
                                                        Faculty
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-auto col-form-label ml-1 required">
                                                <label>
                                                    Course:
                                                </label>

                                                <select
                                                    className="form-control col-auto form-select m-2 p-6"
                                                    onChange={this.handleChangeCourse}
                                                    value={this.state.course}
                                                >
                                                    <option
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
                                            </div>

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
