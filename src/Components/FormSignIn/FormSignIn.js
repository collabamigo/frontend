
import React from 'react'

class FormSignIn extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangeBranch = this.handleChangeBranch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            FirstName: '',
            LastName:'',
            email: '',
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

    handleChangeEmail() {
        this.setState({ email:"lol@iiitd.ac.in"})
    }

    handleChangeDegree(e) {
        this.setState({ degree: e.target.value })
    }

    handleChangeBranch(e) {
        this.setState({ branch: e.target.value })
    }

    
    handleSubmit(e) {
        if (this.state.degree !== "selected"){
            alert('A name was submitted: ' + this.state.LastName);

            console.log(this.state.FirstName)
            console.log(this.state.LastName)
            console.log(this.state.email)
            console.log(this.state.degree)
            console.log(this.state.branch)
            this.setState({
                FirstName: '',
                LastName:'',
                email: '',
                degree: '',
                branch:''
            })
            e.preventDefault();
        }

        else{
              alert('Please select: ');
        }

    }

  handleChange(event) {
    this.setState({LastName: event.target.value});
  }

  render() {
        const first_name = localStorage.getItem("userName")
        const temp = "lol@iiitd.ac.in"
        const name = first_name.split(' ')
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
                                placeholder={name[0]}
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
                                placeholder={name[1]}
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
                                onSubmit={this.handleChangeEmail}
                                placeholder={temp}
                                type='text'
                                value={temp}
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
                                    value={this.state.degree}
                                >
                                    <option
                                        selected
                                        value="selected"
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
                                >
                                    <div className="col" />

                                    <option
                                        selected
                                        value={this.state.branch}

                                    >
                                        ---Select Branch---
                                    </option>

                                    <option value={this.state.branch}>
                                        CSAI
                                    </option>

                                    <option value={this.state.branch}>
                                        CSE
                                    </option>

                                    <option value={this.state.branch}>
                                        CSB
                                    </option>

                                    <option value={this.state.branch}>
                                        CSD
                                    </option>

                                    <option value={this.state.branch}>
                                        CSS
                                    </option>

                                    <option value={this.state.branch}>
                                        CSAM
                                    </option>

                                    <option value={this.state.branch}>
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