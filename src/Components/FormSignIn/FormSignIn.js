
import React from 'react'
import axios from "axios";

class FormSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangeBranch = this.handleChangeBranch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            FirstName: '',
            LastName:'',
            degree: '',
            branch:''
        }
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
    
    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.LastName);
        let payload = {
            "First_Name":this.state.FirstName,
            "Last_Name":this.state.LastName,
            "Gender":"",
            "Degree":this.state.degree,
            "Course":this.state.branch,
            "Handle":"",
            "IsTeacher":false}

        axios.post("https://blooming-peak-53825.herokuapp.com/connect/api/profile/", payload)
            .then(res => {
            console.log(res);
            console.log(res.data);
          })

        // r = requests.post(url=URL, data=json_data,
    //                       cookies=session, headers={'Referer': URL, 'Content-Type': 'application/json'})
    //{
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
        console.log(this.state.degree)
        console.log(this.state.branch)

        this.setState({
            FirstName: '',
            LastName:'',
            degree: '',
            branch:''
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
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label className="row">
                            <div className="col" />

                            <div className="col-2" >
                                First Name:
                            </div>

                            <div className="col-auto" />

                            <input
                                onChange={this.handleChangeFirstName}
                                placeholder={this.name[0]}
                                required
                                type='text'
                                value={this.state.FirstName}
                            />

                            <div className="col" />

                        </label>

                        <br />

                        <label className="row">
                            <div className="col" />

                            <div className="col-2">
                                Last Name:
                            </div>

                            <div className="col-auto" />

                            <input
                                onChange={this.handleChangeLastName}
                                placeholder={this.name[1]}
                                required
                                type='text'
                                value={this.state.LastName}
                            />

                            <div className="col" />

                        </label>

                        <br />

                        <label className="row">
                            <div className="col" />

                            <div className="col-2">
                                Email Address:
                            </div>

                            <div className="col-auto" />

                            <input
                                disabled
                                placeholder={this.email}
                                type='text'
                                value={this.email}
                            />

                            <div className="col" />

                        </label>

                        <br />

                        <div className="row">
                            <div className="col" />

                            <label className="col-auto">
                                Degree:
                                <select
                                    className="form-control"
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

                            <label className="col-auto">
                                Branch:
                                <select
                                    className="form-control"
                                    onChange={this.handleChangeBranch}
                                    required
                                    value={this.state.branch}
                                >
                                    <div className="col" />

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

                            <div className="col" />

                        </div>

                        <br />

                        <br />

                        <button
                            className="btn btn-primary"
                            onChange={this.handleChange}
                            type="submit" 
                            value="Submit"
                        >
                            Submit
                        </button>

                    </div>
                </div>
            </div>
        </form>
    );
  }
}

export default FormSignIn;
