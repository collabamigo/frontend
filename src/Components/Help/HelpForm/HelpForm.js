import React from 'react'
import axios from "axios";
import './HelpForm.css'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import PropTypes from "prop-types";
import Loading from "../../../common/Loading";

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
            Github: "",
            Linkedin:"",
            currentStep: 1,
            isLoading: false
        }
    }

    componentDidMount() {
        axios.get("connect/profile/").then(
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
        this.setState({ Contact: e })
    }

    isFormValid() {
        // Validate phone number
        if (!(this.state.Contact === undefined || (1000000 <= parseInt(this.state.Contact.slice(1)) && parseInt(this.state.Contact.slice(1)) <= 100000000000000))) {
            alert("Your mobile number seems invalid. Please recheck.")
            return false
        }
        else
            return true
    }

    handlerNext = () => {
        if (this.isFormValid())
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
        axios.post("connect/teacher/",{
            Contact: (this.state.Contact === undefined)?0:parseInt(this.state.Contact.slice(1)),
            Gitname: this.state.Github,
            Linkedin: this.state.Linkedin,
            skills: tags,
        }).then((res) => axios.patch("connect/profile/"+res.data.id+"/",{
            handle: this.state.handle
        }).then((res2) => this.props.handleSubmit({
            data: [{...res.data,
            handle: res2.data.handle}]
        })))
    }

    render() {
        if (this.state.isLoading)
            return <Loading />
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

