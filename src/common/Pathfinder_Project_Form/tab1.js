import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'

export default class tab1 extends Component {
    static propTypes = {
        batch: PropTypes.number.isRequired,
        course: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        
    }

    shouldComponentUpdate(){
        return true;
    }

    render() {
        return (
            <div>
                {this.props.name}

                {this.props.batch}

                {this.props.course}

                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Label>
                        TAB 1
                    </Form.Label>

                    <Form.Control
                        placeholder="Enter email"
                        type="email"
                    />

                    <Form.Text className="text-muted">
                        Well never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Label>
                        Password
                    </Form.Label>

                    <Form.Control
                        placeholder="Password"
                        type="password"
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                >
                    <Form.Check
                        label="Check me out"
                        type="checkbox"
                    />
                </Form.Group>
            </div>
        )
    }
}
