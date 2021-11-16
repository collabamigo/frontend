/* eslint-disable react/jsx-handler-names */
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormTeamDetails from './FormTeamDetails';

import Confirm from './Confirm';
import Success from './Success';
import PropTypes from 'prop-types';

export class UserForm extends Component {

  static propTypes = {

    batch: PropTypes.number.isRequired,
    course: PropTypes.string.isRequired,
    date_of_est: PropTypes.instanceOf(Date).isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,



    handleChange: PropTypes.func.isRequired,
    handleChangeDate: PropTypes.func.isRequired,
    handleChangeTags: PropTypes.func.isRequired,

    handleChangeteam: PropTypes.func.isRequired,
    handleDeleteteam: PropTypes.func.isRequired,
    handleProjectVisibilityChange: PropTypes.func.isRequired,

    removeClick: PropTypes.func.isRequired,
    addClick: PropTypes.func.isRequired,



    visible: PropTypes.bool.isRequired,

    stage: PropTypes.string.isRequired,

    project_description: PropTypes.string.isRequired,
    project_name: PropTypes.string.isRequired,
    project_tags: PropTypes.arrayOf(PropTypes.string).isRequired,

    team_members: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    team_member_emails: PropTypes.arrayOf(PropTypes.string).isRequired,
    team_member_names: PropTypes.arrayOf(PropTypes.string).isRequired,
    // team_size : PropTypes.number.isRequired,
}


    constructor(props) {
        super(props);

        this.state = {
            step: 1,
          };

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }


  shouldComponentUpdate() {
    return true;
}

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change


  render() {
    const { step } = this.state;
    const { visible, stage, project_name, project_description, project_tags,
           date_of_est, team_members } = this.props;

    // console.log(v1);
    // console.log("v1");

    const v1 = {project_name, project_description, project_tags, date_of_est, stage};
    // const v2 = {fname, lname, batch , course};

    const v2 = {visible ,team_members};

    const v3 = {project_name, project_description, project_tags, date_of_est, stage,visible ,team_members};

    switch (step) {
      case 1:
        return (
            <FormUserDetails
                handleChange={this.props.handleChange}
                handleChangeDate={this.props.handleChangeDate}
                handleChangeTags={this.props.handleChangeTags}
                nextStep={this.nextStep}
                values={v1}
            />
        );
      case 2:
        return (
            <FormPersonalDetails
                addClick={this.props.addClick}
                handleChange={this.props.handleChange}
                handleChangeteam={this.props.handleChangeteam}
                handleDeleteteam={this.props.handleDeleteteam}
                handleProjectVisibilityChange={this.props.handleProjectVisibilityChange}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                removeClick={this.props.removeClick}
                values={v2}
            />
        );
      // case 3:
      //   return (
      //       <FormTeamDetails
      //           handleChange={this.props.handleChange}
      //           nextStep={this.nextStep}
      //           prevStep={this.prevStep}
      //           values={v3}
      //       />
      //   );
      case 3:
        return (
            <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={v3}
            />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
