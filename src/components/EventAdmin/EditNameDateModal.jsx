import {Modal, Button} from "react-bootstrap";
import React from 'react';
import {Form, Formik} from "formik";
import PropTypes from "prop-types";
import TextInput from "common/TextInput";
import {DatePickerField} from "../../common/DatePickerField";


export default function EditNameDateModal({show, handleClose, name, location, eventStartDate, eventEndDate,
                                              registrationStartDate, registrationEndDate, handleSubmit}) {

    const validate = (values) => {
        // console.log("values in editnamedate modal", values);
        const errors = {};

        if (values.eventStartDate && values.eventEndDate) {
            if (new Date(values.eventStartDate) > new Date(values.eventEndDate) &&
                (values.eventStartDate.getTime() !== eventStartDate.getTime() ||
                    values.eventEndDate.getTime() !== eventEndDate.getTime())) {
                errors.eventEndDate = "Event End date must be after start date";
            }
        }

        if (values.registrationStartDate && values.registrationEndDate) {
            if (new Date(values.registrationStartDate) > new Date(values.registrationEndDate) &&
                (values.registrationEndDate.getTime() !== registrationEndDate.getTime() ||
                    values.registrationStartDate.getTime() !== registrationStartDate.getTime())) {
                errors.registrationEndDate = "Registration deadline date must be after registration opening date";
            }
        }

        if (values.eventEndDate && new Date(values.eventEndDate) < new Date() &&
            values.eventEndDate.getTime() !== eventEndDate.getTime()) {
            errors.eventEndDate = "Event End date must be in the future";
        }

        if (values.registrationEndDate && new Date(values.registrationEndDate) < new Date() &&
            values.registrationEndDate.getTime() !== registrationEndDate.getTime()) {
            errors.registrationEndDate = "Registration deadline date must be in the future";
        }

        // if (values.registrationStartDate && new Date(values.registrationStartDate) < new Date()) {
        //     errors.registrationStartDate = "Registration opening date must be in the future";
        // }

        if (values.eventStartDate && new Date(values.eventStartDate) < new Date() &&
            values.eventStartDate.getTime() !== eventStartDate.getTime()) {
            errors.eventStartDate = "Event date must be in the future";
        }

        // for (let itr in values) {
        //     const field = formData[itr];
        //     if (field.required && !values[field.id])
        //         errors[field.id] = 'This field is required';
        //
        // }
        return errors;
    }
    return (
        <Modal
            backdrop="static"
            keyboard={false}
            onHide={handleClose}
            show={show}
        >
            <div className="bg-dark  text-white rounded-3">
                <Modal.Header>
                    <Modal.Title>
                        Edit Details
                    </Modal.Title>
                </Modal.Header>

                <Formik
                    initialValues={{
                        name: name,
                        eventStartDate: eventStartDate,
                        eventEndDate: eventEndDate,
                        location: location,
                        registrationStartDate: registrationStartDate,
                        registrationEndDate: registrationEndDate,
                    }}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                    validate={validate}
                >
                    {({errors, touched}) => {
                    // console.log("errors", errors);
                    // console.log("touched", touched);
                    return (
                        <Form>
                            <Modal.Body>

                                <TextInput
                                    id=""
                                    label="Event Name"
                                    name="name"
                                    placeholder="Event Name"
                                    type="text"
                                />

                                <div className="mb-3 align-middle">
                                    <label
                                        className="me-2 fs-5"
                                        htmlFor="eventStartDate"
                                    >
                                        Event starts at
                                    </label>

                                    <DatePickerField
                                        className={"form-control w-auto text-input bg-secondary " +
                                    "text-white border-secondary" +
                                    ((touched.eventStartDate && errors.eventStartDate) ? " is-invalid" : "")}
                                        // id="eventStartDate"
                                        name="eventStartDate"
                                        required
                                        showTimeSelect
                                    />

                                    {touched.eventStartDate && errors.eventStartDate &&
                                    <div className="invalid-feedback">
                                        {errors.eventStartDate}
                                    </div>}
                                </div>

                                <div className="mb-3 align-middle">
                                    <label
                                        className="me-2 fs-5"
                                        htmlFor="eventEndDate"
                                    >
                                        Event ends at
                                    </label>

                                    <DatePickerField
                                        className={"form-control w-auto text-input bg-secondary " +
                                            "text-white border-secondary" +
                                            ((touched.eventEndDate && errors.eventEndDate) ? " is-invalid" : "")}
                                        // id="eventStartDate"
                                        name="eventEndDate"
                                        required
                                        showTimeSelect
                                    />

                                    {touched.eventEndDate && errors.eventEndDate &&
                                        <div className="invalid-feedback">
                                            {errors.eventEndDate}
                                        </div>}
                                </div>

                                <TextInput
                                    id=""
                                    label="Event Location"
                                    name="location"
                                    placeholder="Event location"
                                    type="text"
                                />

                                <div className="mb-3 align-middle">
                                    <label
                                        className="me-2 fs-5"
                                        htmlFor="registrationStartDate"
                                    >
                                        Registration starts at
                                    </label>

                                    <DatePickerField
                                        className={"form-control w-auto text-input bg-secondary " +
                                            "text-white border-secondary" +
                                            ((touched.registrationStartDate && errors.registrationStartDate) ? " is-invalid" : "")}
                                        // id="eventStartDate"
                                        name="registrationStartDate"
                                        required
                                        showTimeSelect
                                    />

                                    {touched.registrationStartDate && errors.registrationStartDate &&
                                        <div className="invalid-feedback">
                                            {errors.registrationStartDate}
                                        </div>}
                                </div>

                                <div className="mb-3 align-middle">
                                    <label
                                        className="me-2 fs-5"
                                        htmlFor="registrationEndDate"
                                    >
                                        Registration closes at
                                    </label>

                                    <DatePickerField
                                        className={"form-control w-auto text-input bg-secondary " +
                                            "text-white border-secondary" +
                                            ((touched.registrationEndDate && errors.registrationEndDate) ? " is-invalid" : "")}
                                        // id="eventStartDate"
                                        name="registrationEndDate"
                                        required
                                        showTimeSelect
                                    />

                                    {touched.registrationEndDate && errors.registrationEndDate &&
                                        <div className="invalid-feedback">
                                            {errors.registrationEndDate}
                                        </div>}
                                </div>
                            </Modal.Body>

                            <Modal.Footer className="border-0">
                                <Button
                                    onClick={handleClose}
                                    variant="outline-light"
                                >
                                    Close
                                </Button>

                                <Button
                                    type="submit"
                                    variant="light"
                                >
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>)
                }}
                </Formik>
            </div>
        </Modal>
    )
}

EditNameDateModal.propTypes = {
    eventEndDate: PropTypes.instanceOf(Date).isRequired,
    eventStartDate: PropTypes.instanceOf(Date).isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    registrationEndDate: PropTypes.instanceOf(Date).isRequired,
    registrationStartDate: PropTypes.instanceOf(Date).isRequired,
    show: PropTypes.bool.isRequired,
};
