
import React from 'react'
import axios from "utilities/axios";
import PropTypes from "prop-types";
import backend from "../../env";
import Loading from "components/Loading";
import {Modal} from "react-bootstrap";
import Form from 'react-bootstrap/Form'

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
            isLoading: false,
            currentModal:true
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
    
    handleCloseModal() {
        this.setState({
            currentModal: false,
        })
    }
    
    handleSubmit(e) {
        this.handleCloseModal
        this.setState({isLoading: true})

        let payload = {
            First_Name :this.state.FirstName,
            Last_Name :this.state.LastName,
            degree :this.state.degree,
            course :this.state.course,
        }

        axios.post(backend + "connect/profile/", payload)
            .then((res) => {
                localStorage.setItem("id", res.data.id)
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

  render() {
    if (this.state.isLoading)
        return <Loading />     
    else
        return (
            <Modal
                aria-labelledby="example-custom-modal-styling-title"
                backdrop="static"
                dialogClassName="modal-100w"
                handleClose={this.handleCloseModal.bind(this)}
                keyboard={false}
                show={this.state.currentModal}
            >
                <Modal.Header className="bg-dark">
                    <Modal.Title className="text-light">
                        Lets Create your Profile Amigo!!
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-dark">
                    <Form.Group >
                        <Form.Label>
                            <div className="text-danger float-start">
                                *
                            </div>

                            <span className="text-light">
                                {' '}
                                First Name:

                                {' '}
                            </span>
                        </Form.Label>

                        <Form.Control
                            className="form-control bg-secondary text-white border-secondary border-1"
                            onChange={this.handleChangeFirstName}
                            placeholder="name input"
                            type="text"
                            value={this.state.FirstName}
                        />

                        <br />

                        <Form.Label className="text-light">
                            Last Name:
                            {' '}
                        </Form.Label>

                        <Form.Control
                            className="form-control bg-secondary text-white border-secondary border-1"
                            onChange={this.handleChangeLastName}
                            placeholder="name input"
                            type="text"
                            value={this.state.LastName}
                        />

                        <br />

                        <Form.Label className="text-light">
                            Email Address:
                            {' '}
                        </Form.Label>

                        <Form.Control
                            className="form-control disabled bg-secondary text-white border-secondary border-1"
                            disabled
                            type="email"
                            value={this.state.email}
                        />

                        <br />

                        <Form.Label>
                            <div className="text-danger float-start">
                                *
                            </div>

                            <span className="text-light">
                                {' '}
                                Degree:

                                {' '}
                            </span>
                        </Form.Label>

                        <Form.Select
                            className="form-control required bg-secondary text-white border-secondary border-1"
                            onChange={this.handleChangeDegree}
                            required
                            value={this.state.degree}
                        >
                            <option value="">
                                ---Select Degree---
                            </option>

                            <option value="M" >
                                M-Tech
                            </option>

                            <option value="B">
                                B-Tech
                            </option>

                            <option value="P">
                                Ph.D.
                            </option>

                            <option value="F">
                                Faculty
                            </option>
                        </Form.Select>

                        <br />

                        <Form.Label>
                            <div className="text-danger float-start">
                                *
                            </div>

                            <span className="text-light">
                                {' '}
                                Course:

                                {' '}
                            </span>
                        </Form.Label>

                        <Form.Select
                            className="form-control required bg-secondary text-white border-secondary border-1"
                            onChange={this.handleChangeCourse}
                            required={this.state.course==="B"}
                            value={this.state.course}
                        >

                            <option value="">
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

                        </Form.Select>
                        
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer className="bg-dark">
                    <div className="text-danger float-start">
                        * Required
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={this.handleSubmit}
                        type="submit"
                        value="Submit"
                    >
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>
        );
  }
}

export default FormSignIn;



// <Modal.Body className="bg-dark">
//                     <Modal.Title className='bg-light'>
//                         Set up your Profile
//                     </Modal.Title>
//
//                     <form
//                         className="form-group"
//                         onSubmit={this.handleSubmit}
//                     >
//
//
//                         <div className="row">
//                             <div className="col">
//                                 <div className="row required">
//
//                                     <label className="col-auto form-text" >
//                                         First Name:
//                                     </label>
//
//
//                                     <input
//                                         className="form-control"
//                                         onChange={this.handleChangeFirstName}
//                                         required
//                                         type='text'
//                                         value={this.state.FirstName}
//                                     />
//
//
//                                 </div>
//
//                                 <br />
//
//                                 <div className="row required">
//
//                                     <label className="col-auto form-text">
//                                         Last Name:
//                                     </label>
//
//                                     <input
//                                         className="form-control"
//                                         onChange={this.handleChangeLastName}
//                                         required
//                                         type='text'
//                                         value={this.state.LastName}
//                                     />
//
//
//                                 </div>
//
//                                 <br />
//
//                                 <div className="row required">
//
//                                     <label className="col-auto form-text">
//                                         Email Address:
//                                     </label>
//
//                                     <input
//                                         className="form-control disabled"
//                                         disabled
//                                         type="email"
//                                         value={this.state.email}
//                                     />
//
//                                 </div>
//
//                                 <br />
//
//                                 <div className="row required justify-content-center">
//                                     <div className="col-auto">
//                                         <label className="form-text">
//                                             Degree:
//                                         </label>
//
//                                         <select
//                                             className="form-control"
//                                             onChange={this.handleChangeDegree}
//                                             required
//                                             value={this.state.degree}
//                                         >
//                                             <option
//                                                 value=""
//                                             >
//                                                 ---Select Degree---
//                                             </option>
//
//                                             <option value="M" >
//                                                 M-Tech
//                                             </option>
//
//                                             <option value="B">
//                                                 B-Tech
//                                             </option>
//
//                                             <option value="P">
//                                                 Ph.D.
//                                             </option>
//
//                                             <option value="F">
//                                                 Faculty
//                                             </option>
//
//                                         </select>
//                                     </div>
//
//                                     <div className="col-auto">
//                                         <label className="form-text">
//                                             Course:
//                                         </label>
//
//                                         <select
//                                             className="form-control"
//                                             onChange={this.handleChangeCourse}
//                                             required={this.state.degree==="B"}
//                                             value={this.state.course}
//                                         >
//
//                                             <option
//                                                 value=""
//                                             >
//                                                 ---Select Course---
//                                             </option>
//
//                                             <option value="CSAI">
//                                                 CSAI
//                                             </option>
//
//                                             <option value="CSE">
//                                                 CSE
//                                             </option>
//
//                                             <option value="CSB">
//                                                 CSB
//                                             </option>
//
//                                             <option value="CSD">
//                                                 CSD
//                                             </option>
//
//                                             <option value="CSSS">
//                                                 CSSS
//                                             </option>
//
//                                             <option value="CSAM">
//                                                 CSAM
//                                             </option>
//
//                                             <option value="ECE">
//                                                 ECE
//                                             </option>
//
//                                         </select>
//                                     </div>
//
//
//                                 </div>
//
//                                 <br />
//
//                                 <br />
//
//                                 <button
//                                     className="btn btn-primary"
//                                     onChange={this.handleChange}
//                                     type="submit"
//                                     value="Submit"
//                                 >
//                                     Submit
//                                 </button>
//
//                                 <div className="text-danger float-left">
{/*                                    * Required*/}
{/*                                </div>*/}

{/*                            </div>*/}
{/*                        </div>*/}
{/*                    </form>*/}
{/*                </Modal.Body>*/}


