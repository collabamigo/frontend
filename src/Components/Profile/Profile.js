import React from 'react'
import "./Profile.css";
import axios from "axios";
import backend from "../../env";
import './Profile.css'

class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangeBranch = this.handleChangeBranch.bind(this);
        this.handleChangeHandle = this.handleChangeHandle.bind(this);
        this.handleChangeContact = this.handleChangeContact.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        const data = [{
            FirstName: '',
            LastName:'',
            degree: '',
            branch:'',
            Handle:'',
            Contact:0
        }]
        this.state ={
            data: data,
        }

        axios.get(backend+"connect/api/profile?format=json")
            .then(res => {
                const data = res.data;
                this.setState({data});
            })
    }

    shouldComponentUpdate () {
        return true;
    }

    handleChangeFirstName(e) {
        this.setState({ FirstName: e.target.value })
    }

    handleChangeLastName(e) {
        this.setState({ LastName: e.target.value })
    }

    handleChangeDegree(e) {
        this.setState({ degree: e.target.value })
    }

    handleChangeBranch(e) {
        this.setState({ branch: e.target.value })
    }

    handleChangeHandle(e) {
        this.setState({ Handle: e.target.value })
    }

    handleChangeContact(e) {
        this.setState({ Contact: e.target.value })
    }

    handleSubmit(e) {

        alert('A name was submitted: ' + this.state.LastName);

        let payload = {
            "First_Name":this.state.data[0]["First_Name"],
            "Last_Name":this.state.data[0]["Last_Name"],
            "Gender":"",
            "Degree":this.state.degree,
            "Course":this.state.branch,
            "Handle":"",
            "IsTeacher":false}

        axios.post(backend+"connect/api/profile/", payload)
            .then(res => {
            console.log(res);
            console.log(res.data);
          })

        //     "Last_Name": "", n
        //     "Gender": "",
        //     "Degree": "", n
        //     "Course": "", n
        //     "Email": "", n
        //     "Handle": "",
        //     "IsTeacher": false n
        // }

        console.log(this.state.FirstName)
        console.log(this.state.LastName)
        console.log(this.email)
        console.log(this.state.Handle)
        console.log(this.state.Contact)
        console.log(this.state.degree)
        console.log(this.state.branch)

        this.setState({
            FirstName: '',
            LastName:'',
            degree: '',
            branch:'',
            Contact:'',
            Handle:''
        })
        e.preventDefault();

    }

    handleChange(event) {
    this.setState({LastName: event.target.value});
  }

    email = "shikhar20121@iiitd.ac.in"
    first_name = "Shikhar Sharma"
    name = this.first_name.split(' ')

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
                        onChange={this.handleChangeFirstName}
                        placeholder={this.state.data[0]["First_Name"]}
                        type='text'
                        value={this.state.data[0]["First_Name"]}
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
                        onChange={this.handleChangeLastName}
                        placeholder={this.state.data[0]["Last_Name"]}
                        type='text'
                        value={this.state.data[0]["Last_Name"]}
                    />

                    <button
                        className="btn btn-outline-info col-auto"
                        type="button"
                    >
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
                        placeholder={this.email}
                        type='text'
                        value={this.email}
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
                        placeholder={this.state.Handle}
                        type='text'
                        value={this.state.Handle}
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
                        type='number'
                        value={this.state.Contact}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-auto col-form-label">
                    Degree:
                    <select
                        className="form-control col-auto"
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

                <label className="col-auto col-form-label">
                    Branch:
                    <select
                        className="form-control col-auto"
                        onChange={this.handleChangeBranch}
                        value={this.state.branch}
                    >
                        <option
                            selected
                            value=""

                        >
                            ---Select Branch---
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

            <button
                className="btn btn-primary mb-2"
                onChange={this.handleChange}
                type="submit"
                value="Submit"
            >
                Submit
            </button>

        </form>
    );
  }
}

export default Profile;
