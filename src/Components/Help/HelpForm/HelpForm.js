import React from 'react'
// import axios from "axios";
// import backend from "../../../env";
import './HelpForm.css'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'

class HelpForm extends React.Component{

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
            currentStep: 1
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

        // let payload = {
        //     "Contact":"",
        //     "Handle":"",
        //     "Github":"",
        //     "IsTeacher":true,
        //     "LD":'',
        // }

        // axios.post(backend+"connect/api/teacher/", payload)
        //     .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //   })

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

    handleNext = () => {
        let currentStep = this.currentStep
        currentStep = currentStep >= 1? 2: this.state.currentStep + 1
        this.setState({
          currentStep: currentStep
        })
    }

    handlePrev = () => {
        let currentStep = this.currentStep
        currentStep = currentStep <= 2? 1: this.state.currentStep - 1
        this.setState({
          currentStep: currentStep
        })
    }

    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
            <button 
                className="btn btn-secondary" 
                onClick={this.handlePrev}
                type="button"
            >
                Previous
            </button>
        )
      }
      return null;
    }
    
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <2){
        return (
            <button 
                className="btn btn-primary"
                onClick={this.handleNext}
                type="button"
            >
                Next
            </button>        
        )
      }
        return null;
    }

    render() {
        console.log(this.state.currentStep)
        console.log(this.state.data)
        return (
            <form onSubmit={this.handleSubmit}>

                <Step1
                    Contact={this.state.Contact}
                    Github={this.state.Github}
                    Handle={this.state.Handle}
                    LD={this.state.LD}
                    currentStep={this.state.currentStep}
                    onChange={e => {this.handleChangeHandle(e) ; this.handleChangeGithub(e);
                        this.handleChangeLD(e); this.handleChangeContact(e) }}
                />

                <Step2
                    currentStep={this.state.currentStep}
                    onChange={e=> {this.handleSubmit(e)}}
                />

                <br />
                
                {this.previousButton()}

                {this.nextButton()}

            </form>
        );
  }

}

export default HelpForm;

