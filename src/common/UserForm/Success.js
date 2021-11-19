import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from "utils/axios";
import backend from "env";


export class Success extends Component {  

    static propTypes = {
        done: PropTypes.bool.isRequired,
        handleChangedone: PropTypes.func.isRequired,
        handleChangesubmitanother: PropTypes.func.isRequired,
        values: PropTypes.object.isRequired
    }
    
    constructor(props) {
        super(props);
    }


    componentDidMount() {
      // submit project
      const val = { 
                    "visible":this.props.values.visible,
                    "stage":this.props.values.stage,
                    "project_name":this.props.values.project_name,
                    "project_description":this.props.values.project_description,
                    "project_tags":this.props.values.project_tags,
                    "date_of_est":this.props.values.date_of_est,
                    "team_members":this.props.values.team_members,
                  }
      axios.post("club/announcements/",val).then((ress) => {
        // this.props.handleChangedone
        console.log(ress)
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    }

    shouldComponentUpdate() {
      return true;
    }
  // continue = e => {
  //   e.preventDefault();
  //   // PROCESS FORM //
  //   this.props.nextStep();
  // };

  // back = e => {
  //   e.preventDefault();
  //   this.props.prevStep();
  // };

  render() {
    return (
        <div>
            <div>
                <div title="Success" />

                <h1>
                    Thank You For Your Submission
                </h1>

                <p>
                    You will get an email with further instructions.
                </p>
            </div>
        </div>
    );
  }
}

export default Success;