import React, {useState} from 'react';
import {Formik, Field, Form} from 'formik';
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import axios from "utilities/axios";
import {ToastContainer} from "react-toastify";

function generateCode(formData, setShowModal, eventId) {

    const validate = (values, formData) => {
        const errors = {};
        console.log("validate called", formData)

        // if (!values.email) {
        //
        //     errors.email = 'Required';
        //
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //
        //     errors.email = 'Invalid email address';
        //
        // }

        for (let itr in formData) {
            const field=formData[itr];
            console.log(field)
            if (field.required && !values[field.id])
                errors[field.id] = 'This field is required';
            else
                console.log(values[field.id], field.name, field.required)

        }
        console.log("err", errors)
        return errors;
    };

    function generateTextField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    className={"text-input w-100 bg-secondary text-white border-secondary pb-4 rounded-4"+((touched && error)?" is-invalid":null)}
                    name={field.id}
                />

                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}

            </div>)
    }

    function generateSelectField(field, error, touched) {
        return (
            <div
                className="form-group"
                key={field.id}
            >
                <label
                    className="fw-bold mb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    as="select"
                    className={"form-control w-100 bg-secondary text-white border-secondary mb-4 rounded-4 appearance-auto" + ((touched && error) ? " is-invalid" : "")}
                    name={field.id}
                >
                    <option
                        value=""
                    >
                        --Select--
                    </option>

                    {field.options.split(";").map((option, index) => (
                        <option
                            key={index.toString() + option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </Field>


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateCheckboxField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <div >
                    {field.options.split(";").map((option, index) => (
                        <div
                            className="form-check"
                            key={index.toString() + option}
                        >

                            <Field
                                className="form-check-input  bg-secondary text-white border-secondary mb-4 "
                                name={field.id}
                                type="checkbox"
                                value={option}
                            />

                            <label
                                className="fw-bold pb-2 form-check-label"
                                key={index.toString() + option}
                            >
                                {option}
                            </label>
                        </div>
                    ))}
                </div>


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateRadioField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <div>
                    {field.options.split(";").map((option, index) => (
                        <div
                            className="form-check"
                            key={index.toString() + option}
                        >

                            <Field
                                className="form-check-input  bg-secondary text-white border-secondary mb-4 "
                                name={field.id}
                                type="radio"
                                value={option}
                            />

                            <label
                                className="fw-bold pb-2 form-check-label"

                            >
                                {option}
                            </label>
                        </div>
                    ))}
                </div>


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateDateField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    className={"text-input w-100 bg-secondary text-white border-secondary pb-4 rounded-4" + ((touched && error) ? " is-invalid" : "")}
                    name={field.id}
                    type="date"
                />


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateTimeField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    className={"text-input w-100 bg-secondary text-white border-secondary pb-4 rounded-4" + ((touched && error) ? " is-invalid" : "")}
                    name={field.id}
                    type="time"
                />


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateDateTimeField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    className={"text-input w-100 bg-secondary text-white border-secondary pb-4 rounded-4" + ((touched && error) ? " is-invalid" : "")}
                    name={field.id}
                    type="datetime-local"
                />


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateTextAreaField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    as="textarea"
                    className={"text-input w-100 bg-secondary text-white border-secondary pb-4 rounded-4" + ((touched && error) ? " is-invalid" : "")}
                    name={field.id}
                />


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateFileField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    className="text-input w-100 bg-secondary text-white border-secondary pb-4 rounded-4"
                    name={field.id}
                    type="file"
                />


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateEmailField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    className={"text-input w-100 bg-secondary text-white border-secondary pb-4 rounded-4" + ((touched && error) ? " is-invalid" : "")}
                    name={field.id}
                    type="email"
                />


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function generateNumberField(field, error, touched) {
        return (
            <div key={field.id}>
                <label
                    className="fw-bold pb-2"
                    htmlFor={field.id}
                >
                    {field.name}
                </label>

                <Field
                    className={"text-input w-100 bg-secondary text-white border-secondary pb-4 rounded-4" + ((touched && error) ? " is-invalid" : "")}
                    name={field.id}
                    type="number"
                />


                {touched && error &&
                <div className="invalid-feedback">
                    {error}
                </div>}
            </div>)
    }

    function formFields(errors, touched) {
        const formFields = [];

        for (let field of formData) {
            switch (field.type) {
                case "text":
                    formFields.push(generateTextField(field, errors[field.id], touched[field.id]));
                    break;
                case "select":
                    formFields.push(generateSelectField(field, errors[field.id], touched[field.id]));
                    break;
                case "checkbox":
                    formFields.push(generateCheckboxField(field, errors[field.id], touched[field.id]));
                    break;
                case "radio":
                    formFields.push(generateRadioField(field, errors[field.id], touched[field.id]));
                    break;
                case "date":
                    formFields.push(generateDateField(field, errors[field.id], touched[field.id]));
                    break;
                case "time":
                    formFields.push(generateTimeField(field, errors[field.id], touched[field.id]));
                    break;
                case "datetime-local":
                    formFields.push(generateDateTimeField(field, errors[field.id], touched[field.id]));
                    break;
                case "textarea":
                    formFields.push(generateTextAreaField(field, errors[field.id], touched[field.id]));
                    break;
                case "file":
                    formFields.push(generateFileField(field, errors[field.id], touched[field.id]));
                    break;
                case "email":
                    formFields.push(generateEmailField(field, errors[field.id], touched[field.id]));
                    break;
                case "number":
                    formFields.push(generateNumberField(field, errors[field.id], touched[field.id]));
                    break;
                default:
                    break;
            }
        }
        return formFields;
    }

    return (
        <div className="bg-dark p-4 text-white rounded-3 w-100">
            <div className="row">
                <div className="col-11 col-md-7 col-lg-5 m-auto">
                    <Modal.Header className="py-2 my-2">
                        <Modal.Title>
                            Event Registration form
                        </Modal.Title>
                    </Modal.Header>

                    <Formik
                        initialValues={{...(Array(formData.length).fill(""))}}
                        onSubmit={(values) => {axios.post("form/submit/" + eventId + "/", values).then(() => {
                            setShowModal(false);

                        }
                        )}}
                        validate={(values) => validate(values, formData)}
                    >
                        {({errors, touched}) => (
                            <Form>
                                {formFields(errors, touched)}

                                <button
                                    className="btn btn-primary btn-block mt-4 me-3"
                                    type="submit"
                                >
                                    Submit
                                </button>

                                <button
                                    className="btn btn-secondary btn-block mt-4"
                                    onClick={() => {
                                setShowModal(false);
                            }}
                                    type="button"
                                >
                                    Cancel
                                </button>

                            </Form>)}
                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default function GenerateEventForm({formData, eventId,start,end}) {
    if (!formData)
        return null

    const [show, setShow] = useState(false);

    const handleNotification =()=>{
        return(
            <ToastContainer
                autoClose={5000}
                closeOnClick
                draggable
                hideProgressBar={false}
                newestOnTop={false}
                pauseOnFocusLoss
                pauseOnHover
                position="top-center"
                rtl={false}
            />
        )

    }

    return (
        <>
            <Button
                className={"w-100 "+ (((new Date()) < (new Date(start))) && ((new Date()) < (new Date(end))) ? "disabled":"")}
                onClick={() => setShow(true)}
                size="lg"
            >
                Register Here
            </Button>

            <Modal
                backdrop="static"
                className="w-100 h-100 p-0"
                contentClassName="border-0 m-0 rounded-5 top-0"
                dialogClassName="mw-100 w-100 h-100 top-0 m-0"
                keyboard={false}
                onHide={() => setShow(false)}
                show={show}
            >
                {generateCode(formData, setShow, eventId)}
            </Modal>

            { handleNotification }
        </>
    )
}
GenerateEventForm.propTypes = {
    end: PropTypes.string.isRequired,
    eventId: PropTypes.string.isRequired,
    formData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))).isRequired,
    start: PropTypes.string.isRequired,
}
