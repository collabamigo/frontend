
import React from 'react'
import axios from "axios";
import PropTypes from "prop-types";
import backend from "../../env";

class FormSignIn extends React.Component {
    static propTypes = {
        emailId:PropTypes.string.isRequired,
        firstName:PropTypes.string.isRequired,
        lastName:PropTypes.string.isRequired,
        onSubmit:PropTypes.func,
    };

    static defaultProps = {
      onSubmit: undefined
    };

    constructor(props) {
        super(props);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            FirstName: this.props.firstName,
            LastName:this.props.lastName,
            email: this.props.emailId,
            degree: '',
            course:'',
            isLoading: false
        }
    }

    // noinspection JSCheckFunctionSignatures
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

    handleChangeCourse(e) {
        this.setState({ course: e.target.value })
    }
    
    handleSubmit(e) {
        this.setState({isLoading: true})

        let payload = {
            First_Name :this.state.FirstName,
            Last_Name :this.state.LastName,
            degree :this.state.degree,
            course :this.state.course,
        }

        axios.post(backend + "connect/profile/", payload)
            .then(() => {
            this.props.onSubmit()
          })


        this.setState({
            FirstName: '',
            LastName:'',
            degree: '',
            course:''
        })
        e.preventDefault();

    }

    handleChange(event) {
        this.setState({LastName: event.target.value});
  }


  render() {
    if (this.state.isLoading)
        return (
            <div className="float-centre">
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
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label className="row">

                                <div className="col-auto form-text" >
                                    First Name:
                                </div>
    

                                <input
                                    className="form-control"
                                    onChange={this.handleChangeFirstName}
                                    required
                                    type='text'
                                    value={this.state.FirstName}
                                />
    

                            </label>
    
                            <br />
    
                            <label className="row">

                                <div className="col-auto form-text">
                                    Last Name:
                                </div>

                                <input
                                    className="form-control"
                                    onChange={this.handleChangeLastName}
                                    required
                                    type='text'
                                    value={this.state.LastName}
                                />
    

                            </label>
    
                            <br />
    
                            <label className="row">

                                <div className="col-auto form-text">
                                    Email Address:
                                </div>

                                <input
                                    className="form-control disabled"
                                    disabled
                                    type="email"
                                    value={this.state.email}
                                />

                            </label>
    
                            <br />
    
                            <div className="row">
                                <div className="col" />
    
                                <label className="col-auto form-text">
                                    Degree:
                                    <select
                                        className="form-control"
                                        onChange={this.handleChangeDegree}
                                        required
                                        value={this.state.degree}
                                    >
                                        <option
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
    
                                <label className="col-auto form-text">
                                    Course:
                                    <select
                                        className="form-control"
                                        onChange={this.handleChangeCourse}
                                        required
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
