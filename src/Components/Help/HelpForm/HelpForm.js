import React from 'react'
// import axios from "axios";
// import backend from "../../../env";
import './HelpForm.css'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'

class HelpForm extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            currentStep: 1,
        }
    }

    shouldComponentUpdate () {
        return true;
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
        return (
            <form onSubmit={this.handleSubmit}>

                <Step1 currentStep={this.state.currentStep} />

                <Step2 currentStep={this.state.currentStep} />

                <br />
                
                {this.previousButton()}

                {this.nextButton()}

            </form>
        );
  }

}

export default HelpForm;

