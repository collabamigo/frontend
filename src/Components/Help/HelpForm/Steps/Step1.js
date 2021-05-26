
import React from "react";
import axios from "axios";
import backend from "../../../../env";
import PropTypes from "prop-types";

class Step1 extends React.Component {
    static propTypes = {
            currentStep:PropTypes.number.isRequired
        };

    constructor(props) {
        super(props);
        this.handleChangeHandle = this.handleChangeHandle.bind(this);
        this.handleChangeGithub = this.handleChangeGithub.bind(this);
        this.handleChangeLD = this.handleChangeLD.bind(this);
        this.handleChangeContact = this.handleChangeContact.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const data = [{
            Handle:'',
            Contact:'',
            Github: '',
            LD:'',
        }]

        this.state ={
            data: data,
            currentStep: props.currentStep
        }
    }

    shouldComponentUpdate () {
        return true;
    }

    handleChangeHandle(e) {
        this.setState({ Handle: e.target.value })
    }

    handleChangeGithub(e) {
        this.setState({ Github: e.target.value })
    }

    handleChangeLD(e) {
        this.setState({ LD: e.target.value })
    }

    handleChangeContact(e) {
        this.setState({ Contact: e.target.value })
    }

    handleSubmit(e) {

        alert('A number was submitted: ' + this.state.Handle);

        let payload = {
            "Contact":"",
            "Handle":"",
            "Github":"",
            "IsTeacher":true,
            "LD":'',
        }

        axios.post(backend+"connect/api/teacher/", payload)
            .then(res => {
            console.log(res);
            console.log(res.data);
          })

        console.log(this.state.Handle)
        console.log(this.state.Contact)
        console.log(this.state.Github)
        console.log(this.state.LD)


        this.setState({
            Contact:'',
            Handle:'',
            Github:'',
            LD:'',
        })
        e.preventDefault();

    }

    handleChange(event) {
        this.setState({Contact: event.target.value});
    }

    render (){
        console.log(this.state.data)
        if (this.state.currentStep !== 1) {
            return null
      }
        return(
            <>
                <div className="form-group row">
                    <label className="col-auto col-form-label">
                        Handle
                    </label>

                    <div>
                        <input
                            className="form-control col-auto"
                            onChange={this.handleChangeHandle}
                            placeholder="@instagram"
                            required
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
                            placeholder="Mobile Number"
                            required
                            type='number'
                            value={this.state.Contact}
                        />
                    </div>
                </div>

                <br />

                <div className="form-group row">
                    <label className="col-auto col-form-label">
                        Github Profile
                    </label>

                    <div>
                        <input
                            className="form-control col-auto"
                            onChange={this.handleChangeGithub}
                            placeholder="Github account"
                            required
                            type='text'
                            value={this.state.Github}
                        />
                    </div>
                </div>

                <br />

                <div className="form-group row">
                    <label className="col-auto col-form-label">
                        LinkedIn Profile
                    </label>

                    <div>
                        <input
                            className="form-control col-auto"
                            onChange={this.handleChangeLD}
                            placeholder="LinkedIn account"
                            required
                            type='text'
                            value={this.state.LD}
                        />
                    </div>
                </div>

                <br />

                <div />
            </>
      );
    }
}

export default Step1;