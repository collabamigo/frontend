import React from 'react'
import "./Profile.css";
import axios from "axios";
import backend from "../../env";
import './Profile.css'

class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangecourse = this.handleChangecourse.bind(this);
        this.handleChangeHandle = this.handleChangeHandle.bind(this);
        this.handleChangeContact = this.handleChangeContact.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            First_Name: '',
            Last_Name:'',
            degree: 'null',
            course:'null',
            handle:'',
            contact:'',
            email: '',
        }

    }

    componentDidMount() {
        axios.get(backend+"connect/api/profile?format=json")
            .then(res => {
                this.setState(res.data[0] );
            })
    }

    shouldComponentUpdate () {
        return true;
    }

    handleChangeDegree(e) {
        this.setState({ degree: e.target.value })
    }

    handleChangecourse(e) {
        this.setState({ course: e.target.value })
    }

    handleChangeHandle(e) {
        this.setState({ handle: e.target.value })
    }

    handleChangeContact(e) {
        this.setState({ contact: e.target.value })
    }

    handleSubmit(e) {


        let payload = {
            degree: this.state.degree,
            course: this.state.course,
            handle: this.state.handle,
        }

        axios.patch(backend + "connect/api/profile/" + this.state.id +'/', payload)
            .then(() => {
            alert('A name was submitted: ' + this.state.First_Name);
          })

        e.preventDefault();

    }



  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
                <label className="col-auto col-form-label">
                    First Name
                </label>

                <div>
                    <input
                        className="form-control col-auto"
                        disabled
                        type='text'
                        value={this.state.First_Name}
                    />
                </div>
            </div>

            <br />

            <div className="form-group row">
                <label className="col-auto col-form-label">
                    Last Name
                </label>

                <div className="row-auto">
                    <input
                        className="form-control col-auto"
                        disabled
                        type='text'
                        value={this.state.Last_Name}
                    />

                    <button
                        className="btn btn-outline-info col-auto"
                        type="button"
                    >
                        {/* TODO: Link of help to be added here */}
                        Help
                    </button>

                </div>
            </div>

            <br />

            <div className="form-group row">
                <label className="col-auto col-form-label">
                    Email
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

            <br />

            <div className="form-group row">
                <label className="col-auto col-form-label">
                    Handle
                </label>

                <div>
                    <input
                        className="form-control col-auto"
                        onChange={this.handleChangeHandle}
                        placeholder="Social media handles"
                        type='text'
                        value={this.state.handle}
                    />
                </div>
            </div>

            <br />

            <div className="form-group row">
                <label className="col-auto col-form-label">
                    Contact
                </label>

                <div>
                    <input
                        className="form-control col-auto"
                        onChange={this.handleChangeContact}
                        placeholder='Contact number'
                        type='number'
                        value={this.state.contact}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-auto col-form-label">
                    Degree:
                    <select
                        className="form-control col-auto"
                        onChange={this.handleChangeDegree}
                        placeholder='Your degree [BTech/MTech]'
                        value={this.state.degree}
                    >
                        <option
                            disabled
                            hidden
                            value="null"
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

                <label className="col-auto col-form-label">
                    course:
                    <select
                        className="form-control col-auto"
                        onChange={this.handleChangecourse}
                        value={this.state.course}
                    >
                        <option
                            disabled
                            hidden
                            value="null"

                        >
                            ---Select course---
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

            <br />

            <br />

            <input
                className="btn btn-primary mb-2"
                type="submit"
                value="submit"
            />

        </form>
    );
  }
}

export default Profile;
