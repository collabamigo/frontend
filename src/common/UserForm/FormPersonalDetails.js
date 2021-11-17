import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import "@pathofdev/react-tag-input/build/index.css";
// import ReactTagInput from "@pathofdev/react-tag-input";
import isEqual from "lodash/isEqual"
import InputGroup from 'react-bootstrap/InputGroup'
export class FormPersonalDetails extends Component {

    static propTypes = {
        handleChange: PropTypes.func.isRequired,
        handleChangeteam: PropTypes.func.isRequired,
        handleDeleteteam: PropTypes.func.isRequired,
        handleProjectVisibilityChange: PropTypes.func.isRequired,

        removeClick: PropTypes.func.isRequired,
        addClick: PropTypes.func.isRequired,

        nextStep: PropTypes.func.isRequired,
        prevStep: PropTypes.func.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        values:PropTypes.object.isRequired
    }


    constructor(props) {
        super(props);

        this.handleContinue = this.handleContinue.bind(this);
        this.handleBack = this.handleBack.bind(this);

    }

    shouldComponentUpdate() {
        return true;
    }


  handleContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  createUI(){
    return this.props.values.team_members.map((el, i) =>
        (
            <div
                id={i}
                key={el}
            >
                <InputGroup className="mb-3 w-75">
                    <Form.Control
                        aria-describedby="basic-addon2"
                        aria-label="Name"
                        onChange={(e) => this.props.handleChangeteam('name',i,e)}
                        placeholder="Name"
                        required
                        value={this.props.values.team_members[i].name}
                    />

                    <Form.Control
                        aria-describedby="basic-addon2"
                        aria-label="Email"
                        onChange={(e) => this.props.handleChangeteam('email',i,e)}
                        placeholder="Email"
                        required
                        value={this.props.values.team_members[i].email}


                    />

                    <button
                        id="button-addon2"
                        onClick={(e) => this.props.removeClick(i)}
                        type="button"
                        variant="outline-secondary"
                    >
                        Remove
                    </button>
                </InputGroup>
            </div>
        )
    )
 }

  handleBack = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
      const team_members = this.props.values.team_members;

    return (
        <div>

            {/* {this.state.items.length} */}

            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="ProjectDetails"
                >

                    {/* <Form.Control
                        onChange={this.props.handleChange('team_size')}
                        placeholder="Team Size"
                        type="number"
                        value={this.props.values.team_size}
                    /> */}

                    <Form.Check
                        checked={this.props.values.visible}
                        id="custom-switch"
                        label="Want Project to be Public?"
                        onChange={(e)=> this.props.handleProjectVisibilityChange(e)}
                        type="switch"
                    />

                    <Form.Label>
                        Add Team Members
                    </Form.Label>

                    {this.createUI()}

                    <button
                        className="btn btn-primary mt-2"
                        // eslint-disable-next-line react/jsx-handler-names
                        disabled={isEqual(team_members[team_members.length -1 ], {email:"", name:""})}
                        onClick={(e) => this.props.addClick(e)}
                        type="button"

                    >
                        Add Team Members
                    </button>






                    {/* <InputGroup className="mb-3 w-75">
                        <Form.Control
                            aria-describedby="basic-addon2"
                            aria-label="Recipient's username"
                            placeholder="Recipient's username"
                        />

                        <Form.Control
                            aria-describedby="basic-addon2"
                            aria-label="Recipient's username"
                            placeholder="Recipient's username"
                        />

                        <button
                            id="button-addon2"
                            type="button"
                            variant="outline-secondary"
                        >
                            Button
                        </button>
                    </InputGroup> */}


                </Form.Group>

            </Form>

            <button
                color="secondary"
                onClick={this.handleBack}
                type="button"
                variant="contained"
            >
                Back

            </button>

            <button
                color="primary"
                onClick={this.handleContinue}
                type="button"
                variant="contained"
            >
                Continue

            </button>
        </div>
    );
  }
}

export default FormPersonalDetails;
