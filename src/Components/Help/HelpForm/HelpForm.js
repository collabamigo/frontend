import React from 'react'
import axios from "axios";
import './HelpForm.css'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import backend from "../../../env";
import PropTypes from "prop-types";

class HelpForm extends React.Component{
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handlerChangeHandle = this.handlerChangeHandle.bind(this);
        this.handlerChangeGithub = this.handlerChangeGithub.bind(this);
        this.handlerChangeLinkedin = this.handlerChangeLinkedin.bind(this);
        this.handlerChangeContact = this.handlerChangeContact.bind(this);

        this.state ={
            handle:'',
            Contact:undefined,
            Github: undefined,
            Linkedin:undefined,
            currentStep: 1,
            isLoading: false
        }
    }

    componentDidMount() {
        axios.get(backend+"connect/profile/").then(
            (res) => this.setState({
                handle: res.data[0].handle
            })
        )
    }

    shouldComponentUpdate () {
        return true;
    }

    handlerChangeHandle(e) {
        this.setState({ handle: e.target.value })
    }

    handlerChangeGithub(e) {
        this.setState({ Github: e.target.value })
    }

    handlerChangeLinkedin(e) {
        this.setState({ Linkedin: e.target.value })
    }

    handlerChangeContact(e) {
        this.setState({ Contact: e.target.value })
    }


    handlerNext = () => {
        this.setState({
          currentStep: 2
        })
    }

    handlerPrev = () => {
        this.setState({
          currentStep: 1
        })
    }

    handlerSubmit = (tags) => {
        this.setState({
            isLoading: true
        })
        axios.post(backend+"connect/teacher/",{
            Contact: this.state.Contact,
            Gitname: this.state.Github,
            Linkedin: this.state.Linkedin.split("/in/")[1],
            skills: tags,
        }).then((res) => axios.patch(backend+"connect/profile/"+res.data.id+"/",{
            handle: this.state.handle
        }).then((res2) => this.props.handleSubmit({
            data: [{...res.data,
            handle: res2.data.handle}]
        })))
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
                <div>

                    <Step1
                        Contact={this.state.Contact}
                        Github={this.state.Github}
                        Linkedin={this.state.Linkedin}
                        currentStep={this.state.currentStep}
                        handle={this.state.handle}
                        handleChangeContact={this.handlerChangeContact}
                        handleChangeGithub={this.handlerChangeGithub}
                        handleChangeHandle={this.handlerChangeHandle}
                        handleChangeLinkedin={this.handlerChangeLinkedin}
                        handleNext={this.handlerNext}
                    />

                    <Step2
                        currentStep={this.state.currentStep}
                        handlePrev={this.handlerPrev}
                        handleSubmit={this.handlerSubmit}
                        // onChange={e=> {this.handleSubmit(e)}}
                    />

                    <br />

                </div>
            );
  }

}

export default HelpForm;

